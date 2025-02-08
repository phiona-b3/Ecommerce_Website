import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation
import useProductStore from "../store/store";

const ProductList = () => {
    const { products, fetchProducts, loading } = useProductStore();
    const navigate = useNavigate(); // Initialize navigation

    useEffect(() => {
        fetchProducts();
    }, []);

    return (
        <div className="mt-10">
            <h2 className="text-xl font-bold text-center mb-6">Featured Products</h2>
            {loading ? (
                <p className="text-center">Loading...</p>
            ) : (
                <div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {products.length > 0 ? (
                            products.slice(0, 8).map((product) => ( // Show only 4 products
                                <div key={product._id} className="bg-white shadow-lg rounded-lg p-4 hover:shadow-xl transition-all">
                                    <Link to={`/products/${product._id}`}>
                                        <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded-md"/>
                                        <h3 className="text-lg font-semibold mt-2">{product.name}</h3>
                                        <p className="text-gray-600">{product.description}</p>
                                        <p className="text-xl font-bold mt-2">${product.price}</p>
                                    </Link>
                                </div>
                            ))
                        ) : (
                            <p className="text-center text-gray-500">No products available.</p>
                        )}
                    </div>
                    <div className="flex justify-center mt-6">
                        <button 
                            className="bg-gray-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-gray-500 transition-all"
                            onClick={() => navigate("/products")} // Navigate to products page
                        >
                            More...
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default ProductList;
