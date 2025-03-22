// Entrypoint for our api
import express from "express";
import dotenv from "dotenv";
import { connectDB } from './config/db.js'
import productRoutes from "./routes/product.route.js"

dotenv.config(); // now you can access .env vars from anywhere in the app

const app = express();
const PORT = process.env.PORT;

app.use(express.json()); // middleware that allows us to accept JSON data in the body

app.use("/api/products", productRoutes);

app.listen(5050, () => {
    connectDB();
    console.log("Server started at http://localhost:" + PORT);
})

