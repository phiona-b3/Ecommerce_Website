import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();
const app = express();

//Middleware
app.use(express.json());
app.use(cors());

//connect to MongoDB Atlas
mongoose
    .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("MongoDB Connected"))
    .catch((err) => console.log(err));

//Product Schema
const productSchema = new mongoose.Schema({
    name: String,
    price: Number,
    description: String,
    image: String,
});

const Product = mongoose.model("Product", productSchema);

//REST API Routes

//GET
app.get("/products", async (req, res) => {
    const products = await Product.find();
    res.json(products)
})

//POST
app.post("/products", async (req, res) => {
    const newProduct = new Product(req.body);
    await newProduct.save();
    res.json(newProduct);
})

//PUT
app.put("/products/:id", async (req, res) => {
    const updatedProduct = await Product.fingByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedProduct);
})

//DELETE
app.delete("/products/:id", async (req, res) => {
    await Product.findByIdAndDelete(req.params.id);
    res.json({ message: "Product Deleted" });
})

//Start the Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`))