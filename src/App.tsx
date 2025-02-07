import { BrowserRouter as Router } from "react-router-dom"
import Navbar from "./components/Navbar"
import Herobanner from "./components/Herobanner"

const App = () => {
  return (
    <Router>
      <Navbar/>
      <Herobanner/>
    </Router>
  )
}

export default App