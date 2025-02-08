import express from "express";
import Product from "../models/product.js";

const router = express.Router();

//REST API Routes

//GET
router.get("/products", async (req, res) => {
    const products = await Product.find();
    res.json(products)
})

//POST
router.post("/products", async (req, res) => {
    const newProduct = new Product(req.body);
    await newProduct.save();
    res.json(newProduct);
})

//PUT
router.put("/products/:id", async (req, res) => {
    const updatedProduct = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedProduct);
})

//DELETE
router.delete("/products/:id", async (req, res) => {
    await Product.findByIdAndDelete(req.params.id);
    res.json({ message: "Product Deleted" });
})

export default router;
