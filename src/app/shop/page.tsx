import Navigation from "../components/navigation";
import Footer from "../components/footer";
import Product from "../components/product";


export default function page(){
    return(
      <div>
        <Navigation/>
        <Product/>
        <Product/>
        <Product/>
      <Footer/>
    </div>
  )
}