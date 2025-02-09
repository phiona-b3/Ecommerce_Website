import { Link } from 'react-router-dom'
import { CiShoppingCart } from "react-icons/ci";
import useCartStore from '../store/cartStore';

const Navbar = () => {
  const { cart }= useCartStore();
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  return (
    <nav className="bg-white shadow-md py-4 px-6 flex justify-between items-center">
        <div className="text-2xl font-bold text-dark-500">
            <Link to="/" className="text-gray-400">ShoppingFun</Link>
        </div>

        <ul className="hidden md:flex space-x-6 text-gray-700 font-medium">
            <li><Link to="/" className="hover:text-blue-500">Home</Link></li>
            <li><Link to="/products" className="hover:text-blue-500">Products</Link></li>
            <li><Link to="/dashboard" className="hover:text-blue-500">Dashboard</Link></li>
        </ul>
        <Link to="/cart" className="relative flex items-center text-gray-700 hover:text-blue-500"><CiShoppingCart />
          {totalItems > 0 && (
            <span className="-top-2 -right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full">{totalItems}</span>
          )}
        </Link>
    </nav>
  )
}

export default Navbar