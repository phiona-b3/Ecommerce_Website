import { useEffect, useState } from 'react'
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";

const API_URL = import.meta.env.VITE_API_URL;

interface Product {
    _id: string;
    name: string;
    category: string;
    stock: number;
}

const AdminAnalytics = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [categoryData, setCategoryData] = useState<{ name: string; value: number }[]>([])

    useEffect(() => {
        fetch(API_URL)
        .then((res) => res.json())
        .then((data) => {
            setProducts(data);

            //Group products by category
            const categoryMap: Record<string, number> = {};
            data.forEach((product: Product) => {
                categoryMap[product.category] = (categoryMap[product.category] || 0) + 1;
            });

            // converting data into array to be represented in using Recharts
            const formattedData = Object.keys(categoryMap).map((key) => ({
                name: key,
                value: categoryMap[key],
            }));

            setCategoryData(formattedData);
        })
        .catch((err) => console.log("Error fetching products:", err));
    }, []);


  return (
    <div className="p-6 bg-white shadow-md rounded-lg mt-6">
        <h2 className="text-2xl font-bold mb-4">Product Analytics</h2>
        {/*Total prodcuts */}
        <p className="text-lg font-semibold">Total Products: {products.length}</p>
        {/*Low Stock Warning */}
        <p className="text-lg font-semibold text-red-500">Low Stock: {products.filter((p) => p.stock < 5).length} products</p>

        {/*Products per category chart */}
        <div className="w-full h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                    <Pie data={categoryData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={150} fill="#82ca9d" >
                    {categoryData.map((_, index) => (
                        <Cell key={`cell-${index}`} fill={["#0088FE", "#00C49F", "#FFBB28", "#FF8042"][index % 4]} />
                    ))}
                    </Pie>
                    <Tooltip/>
                </PieChart>
            </ResponsiveContainer>
        </div>
    </div>
  )
}

export default AdminAnalytics