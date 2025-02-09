import { useEffect, useState } from "react";
import useProductStore from "../store/store";
import { Link } from "react-router-dom";

const ProductsPage = () => {
    const { products, fetchProducts, loading } = useProductStore();
    const [filter, setFilter] = useState("")

    useEffect(() => {
        fetchProducts();
    }, []);

    const filteredProducts = products.filter((product) =>
        product.name.toLowerCase().includes(filter.toLowerCase())
    );

  return (
    <div className="mt-10 px-6">
        <h2 className="text-2xl font-bold text-center mb-6">All Products</h2>
        <div className="flex justify-center mb-4">
            <input type="text" placeholder="Search products..." className="border px-4 py-2 rounded-lg w-1/2" value={filter} onChange={(e) => setFilter(e.target.value)}/>
        </div>
        {loading ? (
            <p className="text-center">Loading...</p>
        ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {filteredProducts.length > 0 ? (
                    filteredProducts.map((product) => (
                        <div key={product._id} className="bg-white shadow-lg rounded-lg p-4 hover:shadow-xl transition-all">
                            <Link to={`/products/${product._id}`}>
                                <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded-md"/>
                                <h3 className="text-lg font-semibold mt-2">{product.name}</h3>
                                <p className="text-blue-600">{product.category}</p>
                                <p className="text-gray-600">{product.description}</p>
                                <p className="text-xl font-bold mt-2">${product.price}</p>
                                <p className="mt-2">In-Stock: {product.stock}</p>
                            </Link>
                        </div>
                    ))
                ) : (
                    <p className="text-center text-gray-500">No products match your search.</p>
                )}
            </div>
        )}
    </div>
  )
}

export default ProductsPage