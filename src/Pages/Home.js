import "./Page.css";
import "./Responsive.css";
import Homebg from '../images/Home-pg.jfif';
import Homebgmob from '../images/homepg_mob.jfif';
import tools from '../images/Tools.png';
import flowers from '../images/Flower.jpeg';
import homePic1 from "../images/home-pic-1.jpeg";
import homePic2 from "../images/home-pic-2.png";
// import { useNavigate } from "react-router-dom";

const Home = () => {

  // const navigate = useNavigate();

  // const handleClick = () => {
  //   navigate("/order");
  // }

  return (
    <>
    <div className="container">
      <div className="hm-pg">
        <div className="hm-img-text">
          <img src={Homebg} alt="Garden" className="hm-bg-img"/>
          <img src={Homebgmob} alt="Garden" className="hm-bg-img-mob"/>
          <h1>Buy Online: Greenery at your finger tips</h1>
          <p>Browse, select, and purchase your favourite plant from the comfort of your home or</p>
            <p className="visited-text">
              Visit us at <a href=" https://maps.app.goo.gl/EtsYhZ6PkbQc9TyK8" target="_blank">Chintamani market, Hajipur, Vaishali.</a>
            </p>


          <div className="buttons1">
          <a href="/order" className="btn buy-now by-what" style={{textDecoration:"none"}}>Buy Now</a>
          <a href="https://wa.me/917519935805?text=Hello, I’m interested in exploring more about the products and services offered by Asikh Nursery." style={{textDecoration:"none"}} className="btn whatsapp wts by-what">Whatsapp</a>
          <a href="/our-services" style={{textDecoration:"none"}} className="btn Know-More knw">Know More</a>
        </div>
        </div>
      </div>

      {/* second section */}

      <div className="products-container">
      <h2 className="products-title">Our Products</h2>
      
      <div className="product-item">
        <div className="image-box">
          <img src={tools} alt="Garden Tools" className="product-img prdt-img1" />
        </div>
        <div className="product-content">
          <h3>Tools and Fertilizers</h3>
          <p>
            Transform your outdoor space effortlessly with our premium garden tools!
            Whether you’re planting, pruning, or maintaining your yard, we have the right tools
            to make gardening easy and enjoyable.
          </p>
          <p className="para-txtre">Grow your dream garden with tools you can rely on!</p>
          <div className="buttons">
            <a href="/order" style={{textDecoration:"none"}} className="btn buy-now">Buy Now</a>
            <a href="/our-services" style={{textDecoration:"none"}} className="btn learn-more">Learn more</ a>
          </div>
        </div>
      </div>
      
      <div className="plant-section">
        <div className="product-content">
          <h3>Plants to Enrich Your Space</h3>
          <p>
            Our nursery provides a diverse range of quality plants to turn your garden into an oasis.
            Explore the variety and quality at our nursery, and let’s grow together.
          </p>
          <p className="para-txtre">From Our Nursery to Your Place.</p>
          <div className="buttons">
          <a href="/order" style={{textDecoration:"none"}} className="btn buy-now">Buy Now</a>
          <a href="/our-services" style={{textDecoration:"none"}} className="btn learn-more">Learn more</ a>
          </div>
        </div>
        
        <div className="image-box">
          <img src={flowers} alt="Plants" className="product-img prdt-img2" />
        </div>
      </div>
    </div>
    
      {/* Third Section */}

          <h2 className="plt-1">Plant care guide and advice</h2>
          <div className="plt-care">
            <div className="plt-care1">
              <div className="plt-care-img1">
                <img src={homePic1} alt="Nature Img" />
              </div>
              <div className="plt-care-para1">
                <p>To care for a plant effectively, ensure it receives the right amount of sunlight based on its needs, and water it regularly without overwatering. Use well-draining soil and provide appropriate nutrients through fertilizer during the growing season. Additionally, periodically check for pests and diseases, and prune any dead or damaged leaves to promote healthy growth.</p>
              </div>
              <div className="plt-care-btn1">
                <button >Know More</button>
              </div>
            </div>

              <div className="plt-care2">
                <div className="plt-care-img2">
                  <img src={homePic2} alt="Nature Img" />
                </div>
                <div className="plt-care-para2">
                  <p>To care for a plant effectively, ensure it receives the right amount of sunlight based on its needs, and water it regularly without overwatering. Use well-draining soil and provide appropriate nutrients through fertilizer during the growing season. Additionally, periodically check for pests and diseases, and prune any dead or damaged leaves to promote healthy growth.</p>
                </div>
                <div className="plt-care-btn2">
                  <button>Know More</button>
                </div>
            </div>
          </div>
          </div>
    </>
  );
};

export default Home;
