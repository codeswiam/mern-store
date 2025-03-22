import express from "express";
import { createProduct, deleteProduct, getProducts, updateProduct } from "../controllers/product.controller.js";

export const router = express.Router();

// no need to rewrite /api/products here because it is already used in server.js
// when telling the app to use these routes

router.get("/", getProducts);
router.put("/:id", createProduct);
router.post("/", updateProduct);
router.delete("/:id", deleteProduct);


export default router;