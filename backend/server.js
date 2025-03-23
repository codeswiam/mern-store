// Entrypoint for our api
import express from "express";
import dotenv from "dotenv";
import path  from "path";
import { connectDB } from './config/db.js'
import productRoutes from "./routes/product.route.js"

dotenv.config(); // now you can access .env vars from anywhere in the app

const app = express();
const PORT = process.env.PORT;

const __dirname = path.resolve(); // gets root path

app.use(express.json()); // middleware that allows us to accept JSON data in the body

app.use("/api/products", productRoutes);

// run npm run build in the frontend to build the static app to be used in prod
// this checks if we're in prod and if so uses the dist dir built with the command
if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "/frontend/dist")));
    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"))
    })
} else {
    app.get("/", (req, res) => {
        res.send("API is running...");
    });
}

app.listen(PORT, () => {
    connectDB();
    console.log("Server started at http://localhost:" + PORT);
})

