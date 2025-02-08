import { BrowserRouter as Router } from "react-router-dom"
import Navbar from "./components/Navbar"
import Herobanner from "./components/Herobanner"
import ProductList from "./components/ProductList"

const App = () => {
  return (
    <Router>
      <Navbar/>
      <Herobanner/>
      <ProductList/>
    </Router>
  )
}

export default App