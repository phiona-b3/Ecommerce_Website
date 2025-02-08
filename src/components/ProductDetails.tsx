import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import useProductStore from "../store/store";

const ProductDetails = () => {
    const { id } = useParams();
    const { products } = useProductStore();
    const [product, setProduct] = useState<Product | null>(null);

    useEffect(() => {
        const foundProduct = products.find((p) => p._id.toString() === id);
        setProduct(foundProduct)
    }, [id, products])

    if (!product) return <p className="text-center mt-10">Product not found.</p>

  return (
    <div className="max-w-4xl mx-auto mt-10 p-6 bg-white shadow-md rounded-lg">
        <img src={product.image} alt={product.name} className="w-full h-96 object-cover rounded-md"/>
        <h1 className="text-3xl font-bold mt-4">{product.name}</h1>
        <p className="text-gray-600 mt-2">{product.description}</p>
        <p className="text-xl font-bold mt-2">${product.price}</p>
        <button className="mt-4 bg-cyan-500 text-white px-6 py-2 rounded-lg">Add to Cart</button>
    </div>
  )
}

export default ProductDetails