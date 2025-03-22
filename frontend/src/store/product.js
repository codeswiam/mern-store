import { create } from "zustand";
import { useState } from "react";

// we're creating a state that we can use from any place in the app
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
                "Content-Type":"application/json"
            }, body: JSON.stringify(newProduct)
        })
        const data = await res.json();
        set((state) => ({products:[...state.products, data.data]}))
    }
}))

const [state, setState] = useState()