import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import ProductsPage from "./components/ProductsPage"
import Home from "./components/Home"
import ProductDetails from "./components/ProductDetails"

const App = () => {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/products" element={<ProductsPage/>}></Route>
        <Route path="/products/:id" element={<ProductDetails/>}></Route>
      </Routes>
    </Router>
  )
}

export default App