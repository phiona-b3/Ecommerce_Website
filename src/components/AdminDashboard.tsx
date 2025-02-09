import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom"
import { auth } from "../firebase";

const AdminDashboard = () => {
    const navigate = useNavigate();
    
    const handleLogout = async () => {
        await signOut(auth);
        navigate("/admin-login")
    };

  return (
    <div className="p-6">
        <h1 className="text-3xl font-bold">Admin Dashboard</h1>
        <button onClick={handleLogout} className="bg-red-500 text-white p-2 rounded mt-4">Logout</button>
    </div>
  )
}

export default AdminDashboard