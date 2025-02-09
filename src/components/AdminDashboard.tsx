import { signOut } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom"
import { auth } from "../firebase";
import AdminAnalytics from "./AdminAnalytics";

const AdminDashboard = () => {
    const navigate = useNavigate();
    
    const handleLogout = async () => {
        await signOut(auth);
        navigate("/admin-login")
    };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Admin Dashboard</h1>
        <button onClick={handleLogout} className="bg-red-500 text-white p-2 rounded mt-4 justify-end">Logout</button>
      </div>
        {/*Analytics Section*/}
        <div>
          <AdminAnalytics/>
        </div>

        {/*Product Management Page */}
        <div className="mt-6">
          <Link to="/admin/products" className="bg-blue-400 text-white p-3 rounded block text-center">Manage Products</Link>
        </div>
    </div>
  )
}

export default AdminDashboard