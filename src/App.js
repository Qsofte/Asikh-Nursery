import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Plant from "./Pages/Plant";
import Contact from "./Pages/Contact";
import OrderNow from "./Pages/OrderNow";
import OurServices from "./Pages/OurServices";
import Privacy from "./Pages/Privacy";
import TermOfUse from "./Pages/TermOfUse";
import Products from "./Pages/Products";
import ProductDetails from "./Pages/ProductDetails";
// import SocialMediaLinks from "./Pages/SocialMediaLinks";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/plant" element={<Plant />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/order" element={<OrderNow />} />
          <Route path="/our-services" element={<OurServices />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/termofuse" element={<TermOfUse />} />
          <Route path="/products" element={<Products />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          {/* <Route path="/socialmedialinks" element={<SocialMediaLinks />} /> */}
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
