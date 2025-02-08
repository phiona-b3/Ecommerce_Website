import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import ProductsPage from "./components/ProductsPage"
import Home from "./components/Home"

const App = () => {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/products" element={<ProductsPage/>}></Route>
      </Routes>
    </Router>
  )
}

export default App