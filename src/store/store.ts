import { create } from "zustand";
import axios from "axios";

const API_URL = "https://ecommerce-backend-l061.onrender.com/api/products";

export interface Product {
    _id: string;
    name: string;
    price: number;
    image: string;
    category: string;
    stock: number;
    description?: string
}

interface ProductStore {
    products: Product[];
    loading: boolean;
    fetchProducts: () => Promise<void>
    updateProduct: (id: string, updateProduct: Partial<Product>) => Promise<void>;
    deleteProduct: (id: string) => Promise<void>
}

const useProductStore = create<ProductStore>((set) => ({
    products: [],
    loading: false,

    //Fetch Products
    fetchProducts: async () => {
        set({ loading: true });
        try {
            const { data } = await axios.get<Product[]>(API_URL);
            set({ products: data, loading: false });
        } catch (error) {
            console.error("Error fetching products", error);
            set({ loading: false });
        }
    },

    //Update Product
    updateProduct: async (id, updatedProduct) => {
        try {
            const { data } = await axios.put<Product>(`${API_URL}/${id}`, updatedProduct);
            set((state) => ({
                products: state.products.map((p) => (p._id === id ? data : p)),
            }))
        } catch (error) {
            console.error("Error updating product", error);
        }
    },

    //Delete Product
    deleteProduct: async (id) => {
        try {
            await axios.delete(`${API_URL}/${id}`);
            set((state) => ({
                products: state.products.filter((p) => p._id !== id)
            }))
        } catch (error) {
            console.error("Error deleting product", error)
        }
    }
}))

export default useProductStore