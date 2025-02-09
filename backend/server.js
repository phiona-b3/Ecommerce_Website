import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import productRoutes from "./routes/products.js"

dotenv.config();
const app = express();

app.use(cors({ origin: "https://p-ecommerce-dashboard.netlify.app/" }))

//Middleware
app.use(express.json());
app.use(cors());
app.use("/api", productRoutes)

//connect to MongoDB Atlas
mongoose
    .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("MongoDB Connected"))
    .catch((err) => console.log(err));

//Start the Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`))