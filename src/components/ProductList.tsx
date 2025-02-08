import { useEffect } from "react";
import useProductStore from "../store/store"
const ProductList = () => {
    const { products, fetchProducts, loading } = useProductStore()

    useEffect(() => {
        fetchProducts()
    }, [])
  return (
    <div>
        <h2>Product List</h2>
        {loading ? (
            <p>Loading...</p>
        ) : (
            <ul>
                {products.map((product) => (
                    <li key={product._id}>
                        <h3>{product.name}</h3>
                        <p>{product.description}</p>
                        <p>${product.price}</p>
                        <button onClick={() => useProductStore.getState().deleteProduct(product._id)}>Delete</button>
                    </li>
                ))}
            </ul>
        )}
    </div>
  )
}

export default ProductList