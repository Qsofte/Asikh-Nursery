import './Footer.css';
import './Resp.css';
import whatsapp from "../Logo/WhatsApp.png";
import instagram from "../Logo/Insta.png";
import linkedin from "../Logo/Linkedin.png";
import logo from "../Logo/logo.png";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-banner">
        <div className="yellow-box">
          <p className="visit-text">Visit us at Chintamani market, Hajipur, Vaishali.</p>
          <p className="or-text">or</p>
          <div className="footer-buttons">
            <a href="/order" className="order-btn">Order Online</a>
            <a href="/contact" className="contact-btn">Contact Us</a>
          </div>
        </div>
      </div>

      <div className="footer-main">
        {/* Footer Logo */}
        <div className="footer-logo">
          <img src={logo} alt="Logo" />
        </div>

        {/* Footer Links */}
        <div className="footer-links">
          <h3>Links</h3>
          <a href="/about">About Us</a>
          <a href="/our-services">Our Services</a>
          <a href="/order">Order Now</a>
        </div>

        {/* Footer Help Section */}
        <div className="footer-help">
          <h3>Help</h3>
          {/* <a href="/terms">Terms & Conditions</a> */}
          <a href="/privacy">Privacy Policy</a>
          <a href="/contact">Contact Us</a>
        </div>
        
        {/* Social Media Links */}
        <div className="footer-social">
          <h3 style={{display: 'none'}}>Follow us on</h3>
          <div className="social-icons">
            <a href="https://wa.me/" target="_blank" rel="noopener noreferrer">
              <img src={whatsapp} alt="WhatsApp" />
            </a>
            <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer">
              <img src={instagram} alt="Instagram" />
            </a>
            <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer">
              <img src={linkedin} alt="Linkedin" />
            </a>
          </div>
        </div>
      </div>

      {/* Footer Copyright */}
      <p className="footer-text">© 2025 Asikh Nursery LLC. All rights reserved</p>
    </footer>
  );
}

export default Footer;
