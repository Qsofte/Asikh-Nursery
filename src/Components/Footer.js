import './Footer.css';
import flower from "../images/Flower.png";

function Footer () {
  return (
    <>
    <footer className="footer">

      <div className="footer-banner">
        <div className="yellow-box"></div>
        <img className="footer-banner-img" src={flower} alt="Plants" />
      </div>

      <div className="footer-logo">
        <img src='./static/media/logo.7aeaf2ffaf713a014561.png' alt=''></img>
      </div>

      <div className="footer-links">
        <h3 className='Link-txt'>Links</h3>
        <a href="/about">About Us</a>
        <a href="/oursevices">Our Services</a>
        <a href="/about">Order Now</a>
      </div>

      <div className="footer-help">
        <h3 className='Help-txt'>Help</h3>
        <a href="/terms">Terms & Condition</a>
        <a href="/privacy">Privacy Policy</a>
        <a href="/contact">Contact Us</a>
      </div>
      
      <div className="footer-social">
        <h3 className='Follow-txt'>Follow us on</h3>
        </div>
        <div>
        <a href="/about"><img src="/images/Whatsapp.png" alt="WhatsApp" /></a> 
        <a href="/about"><img src="/assets/images/instagram.png" alt="Instagram" /></a>
        <a href="/about"><img src="/assets/images/linkedin.png" alt="LinkedIn" /></a>
        </div>
      

      <p>© 2025 Asikh Nursery LLC. All rights reserved</p>
    </footer>
    </>
  );
};

export default Footer;
