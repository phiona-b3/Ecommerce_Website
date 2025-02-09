import { useState, useEffect } from 'react';
import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;
const CLOUDINARY_URL = import.meta.env.VITE_CLOUDINARY_URL;
const CLOUDINARY_UPLOAD_PRESET = import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET;

interface Product {
  _id: string;
  name: string;
  price: number;
  stock: number;
  category: string;
  image: string;
}

const AdminProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [currentProduct, setCurrentProduct] = useState<Product | null>(null);
  const [newProduct, setNewProduct] = useState<{ name: string; price: string; stock: string; category: string; image: string }>(
    { name: "", price: "", stock: "", category: "", image: "" }
  );
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get<Product[]>(API_URL);
      setProducts(response.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  const uploadImage = async (): Promise<string | null> => {
    if (!imageFile) return currentProduct?.image || null;

    const formData = new FormData();
    formData.append("file", imageFile);
    formData.append("upload_preset", CLOUDINARY_UPLOAD_PRESET);

    try {
      const response = await axios.post(CLOUDINARY_URL, formData);
      return response.data.secure_url;
    } catch (error) {
      console.error("Image upload failed:", error);
      return null;
    }
  };

  const handleAddProduct = async () => {
    setLoading(true);
    try {
      const imageUrl = await uploadImage();
      if (!imageUrl) {
        alert("Image upload failed.");
        setLoading(false);
        return;
      }

      const productData = { ...newProduct, image: imageUrl };
      await axios.post(API_URL, productData);
      fetchProducts();
      setNewProduct({ name: "", price: "", stock: "", category: "", image: "" });
      setImageFile(null);
    } catch (error) {
      console.error("Error adding product:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleEditProduct = (product: Product) => {
    setCurrentProduct(product);
    setNewProduct({ ...product, price: String(product.price), stock: String(product.stock) });
  };

  const handleUpdateProduct = async () => {
    if (!currentProduct) return;
    setLoading(true);
    try {
      const imageUrl = await uploadImage();
      if (!imageUrl) {
        alert("Image upload failed.");
        setLoading(false);
        return;
      }

      const updatedProduct = { ...newProduct, image: imageUrl };
      await axios.put(`${API_URL}/${currentProduct._id}`, updatedProduct);
      fetchProducts();
      setCurrentProduct(null);
      setNewProduct({ name: "", price: "", stock: "", category: "", image: "" });
      setImageFile(null);
    } catch (error) {
      console.error("Error updating product:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteProduct = async (id: string) => {
    if (!window.confirm("Are you sure you want to delete this product?")) return;
    try {
      await axios.delete(`${API_URL}/${id}`);
      fetchProducts();
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Product Management</h1>

      <div className="mb-6 bg-white p-4 shadow-md rounded">
        <h2 className="text-xl font-semibold mb-2">{currentProduct ? "Edit Product" : "Add New Product"}</h2>
        <input type="text" placeholder="Product Name" value={newProduct.name} onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })} className="border p-2 mr-2" />
        <input type="number" placeholder="Price" value={newProduct.price} onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })} className="border p-2 mr-2" />
        <input type="number" placeholder="Stock" value={newProduct.stock} onChange={(e) => setNewProduct({ ...newProduct, stock: e.target.value })} className="border p-2 mr-2" />
        <input type="text" placeholder="Product Category" value={newProduct.category} onChange={(e) => setNewProduct({ ...newProduct, category: e.target.value })} className="border p-2 mr-2" />
        <input type="file" onChange={(e) => setImageFile(e.target.files?.[0] || null)} className="border p-2" />
        <button onClick={currentProduct ? handleUpdateProduct : handleAddProduct} className="bg-blue-500 text-white px-4 py-2 ml-2" disabled={loading}>{loading ? (currentProduct ? "Updating..." : "Adding...") : currentProduct ? "Update" : "Add"}</button>
      </div>

      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="border p-2">Image</th>
            <th className="border p-2">Product</th>
            <th className="border p-2">Price</th>
            <th className="border p-2">Stock</th>
            <th className="border p-2">Category</th>
            <th className="border p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product._id}>
              <td className="border p-2"><img src={product.image} alt={product.name} className="h-16 w-16 object-cover rounded" /></td>
              <td className="border p-2">{product.name}</td>
              <td className="border p-2">${product.price}</td>
              <td className="border p-2">{product.stock}</td>
              <td className="border p-2">{product.category}</td>
              <td className="border p-2">
                <button onClick={() => handleEditProduct(product)} className="bg-yellow-500 text-white px-4 py-1 mr-2">Edit</button>
                <button onClick={() => handleDeleteProduct(product._id)} className="bg-red-500 text-white px-4 py-1">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminProducts;
