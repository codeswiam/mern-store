import { create } from "zustand";
import { useState } from "react";

// we're creating a global state that we can use from any component in the app
export const useProductStore = create((set) => ({
    products: [],
    setProducts: (products) => set({products}),
    createProduct: async (newProduct) => {
        if (!newProduct.name || !newProduct.image || !newProduct.price) {
            return {success:false, message:"Please fill in all fields."}
        }

        const res = await fetch("/api/products", {
            method: "POST",
            headers: {
                "Content-Type":"application/json",
            }, body: JSON.stringify(newProduct),
        })
        const data = await res.json();

        // we can't just add the new product to the state bcz it doesn't have an id
        // homepage needs the id to render the product card
        const res2 = await fetch("/api/products");
        const data2 = await res2.json();
        set({products: data2.data});

        // set((state) => ({products:[...state.products, data.data]}))
        return {success:true, message:"Product created successfully."}
    },
    fetchProducts: async () => {
        const res = await fetch("/api/products");
        const data = await res.json();
        set({products: data.data});
    },
    deleteProduct: async (pid) => {
        const res = await fetch(`/api/products/${pid}`, {
            method: "DELETE",
        });
        const data = await res.json();
        if (!data.success) return {success:false, message: data.message};

        // refresh the state so that it does not contain the deleted product
        set(state => ({products: state.products.filter(product => product._id !== pid)}));
        return {success:true, message: data.message};
    },
    updateProduct: async (pid, updatedProduct) => {
        const res = await fetch(`/api/products/${pid}`, {
            method: "PUT",
            headers: {
                "Content-Type":"application/json",
            }, body: JSON.stringify(updatedProduct),
        })

        const data = await res.json();
        if (!data.success) return {success:false, message: data.message};

        set(state => ({
            // refresh the state so that it contains the updated product info
            products: state.products.map(product => (product._id === pid ? data.data : product))
        }));
        return {success:true, message: data.message};
    }
}))