import { useEffect } from "react";
import useProductStore from "../store/store"
const ProductList = () => {
    const { products, fetchProducts, loading } = useProductStore()

    useEffect(() => {
        fetchProducts()
    }, [])
  return (
    <div className="mt-10">
        <h2 className="text-xl font-bold text-center mb-6">Product List</h2>
        {loading ? (
            <p className="text-center">Loading...</p>
        ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {products.length > 0 ? (
                    products.map((product) => (
                        <div key={product._id} className="bg-white shadown-lg rounded-lg p-4 hover:shadow-xl transition-all">
                            <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded-md"/>
                            <h3 className="text-lg font-semibold mt-2">{product.name}</h3>
                            <p className="text-gray-600">{product.description}</p>
                            <p className="text-xl font-bold mt-2">${product.price}</p>
                        </div>
                    ))
                ) : (
                    <p className="text-center text-gray-500">No products available.</p>
                )}
            </div>
        )}
    </div>
  )
}

export default ProductList