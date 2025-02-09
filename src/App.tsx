import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import ProductsPage from "./components/ProductsPage"
import Home from "./components/Home"
import ProductDetails from "./components/ProductDetails"
import Cart from "./components/Cart"
import AdminLogin from "./components/AdminLogin"
import AdminRoute from "./components/AdminRoute"
import AdminDashboard from "./components/AdminDashboard"

const App = () => {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/products" element={<ProductsPage/>}></Route>
        <Route path="/products/:id" element={<ProductDetails/>}></Route>
        <Route path="/cart" element={<Cart/>}></Route>
        <Route path="/admin-login" element={<AdminLogin/>}></Route>
        <Route path="/admin/dashboard" element={<AdminRoute><AdminDashboard/></AdminRoute>}/>
      </Routes>
    </Router>
  )
}

export default App