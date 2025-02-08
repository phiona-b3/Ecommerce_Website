import Footer from "./Footer"
import Herobanner from "./Herobanner"
import ProductList from "./ProductList"
import Testimonials from "./Testimonials"

const Home = () => {
  return (
    <div>
        <Herobanner/>
        <ProductList/>
        <Testimonials/>
        <Footer/>
    </div>
  )
}

export default Home