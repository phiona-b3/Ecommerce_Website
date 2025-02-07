import { Link } from 'react-router-dom'
import Cart from './Cart'

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md py-4 px-6 flex justify-between items-center">
        <div className="text-2xl font-bold text-dark-500">
            <Link to="/">ShoppingFun</Link>
        </div>

        <ul className="hidden md:flex space-x-6 text-gray-700 font-medium">
            <li><Link to="/" className="hover:text-blue-500">Home</Link></li>
            <li><Link to="/products" className="hover:text-blue-500">Products</Link></li>
            <li><Link to="/dashboard" className="hover:text-blue-500">Dashboard</Link></li>
        </ul>

        <Cart/>
    </nav>
  )
}

export default Navbar