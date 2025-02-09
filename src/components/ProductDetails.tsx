import { useEffect, useState } from 'react';
import { Link, useParams } from "react-router-dom";
import useProductStore from "../store/store";
import useCartStore from '../store/cartStore';


const ProductDetails = () => {
    const { id } = useParams();
    const { products } = useProductStore();
    const { addToCart } = useCartStore();
    // @ts-expect-error
    const [product, setProduct] = useState<Product | null>(null);
    const [quantity, setQuantity] = useState<number>(1)

    useEffect(() => {
        const foundProduct = products.find((p) => p._id.toString() === id);
        setProduct(foundProduct)
    }, [id, products])

    if (!product) return <p className="text-center mt-10">Product not found.</p>

  return (
    <div className="max-w-4xl mx-auto mt-10 p-6 bg-white shadow-md rounded-lg">
        <img src={product.image} alt={product.name} className="w-full h-96 object-cover rounded-md"/>
        <h1 className="text-3xl font-bold mt-4">{product.name}</h1>
        <p className="text-blue-600 mt-2">{product.category}</p>
        <p className="text-gray-600 mt-2">{product.description}</p>
        <p className="text-xl font-bold mt-2">${product.price}</p>

        <div className="mt-4">
          <label className="font-bold">Quantity: </label>
          <input type="number" value={quantity} min="1" className="border px-3 py-1 ml-2 w-16 text-center" onChange={(e) => setQuantity(Math.max(1, Number(e.target.value)))} />
        </div>

        <button onClick={() => addToCart(product, quantity)} className="mt-4 bg-cyan-500 text-white px-6 py-2 rounded-lg"><Link to="/cart">Add to Cart</Link></button>
    </div>
  )
}

export default ProductDetails