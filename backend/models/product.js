import mongoose  from "mongoose";
const Schema = mongoose.Schema

//Product Schema
const productSchema = new Schema({
    name: String,
    price: Number,
    description: String,
    image: String,
});

export default mongoose.model("Product", productSchema);