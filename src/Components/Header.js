import React, { useState } from "react";
import "./Head.css";
import "./Resp.css";
import logo from "../Logo/logo.png";
import whatsappIcon from "../images/Whatsapp.png";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  console.log("Header component rendered!");

  return (
    <div className="header">
      {/* Logo */}
      <a className="logo-text" href="/home">
        <img src={logo} alt="Asikh Farms Logo" className="logo-img" />
      </a>

      <nav className={`nav-links ${isOpen ? "open" : ""}`}>
        <a className="sections" href="/home">Home</a>
        <span className="divider">|</span> 
        <a className="sections" href="/about">About us</a>
        <span className="divider">|</span>
        <a className="sections" href="/our-services">Our Services</a>
        <span className="divider">|</span>
        <a className="sections" href="/order">Order Now</a>
        <span className="divider">|</span>
        <a className="sections" href="/contact">Contact Us</a> 
        <span className="divider">|</span>
        <a className="sections" href="/products">Products</a> 
      </nav>

      <div className="whatsapp-container">
        <a
          href="https://wa.me/917519935805?text=Hello, I’m interested in exploring more about the products and services offered by Asikh Nursery."
          className="whatsapp-button">
          <span className="whatsapp-text">WhatsApp</span>
          <span className="whatsapp-icon">
            <img src={whatsappIcon} alt="WhatsApp" />
          </span>
        </a>
      </div>

      <div className="menu-icon" onClick={() => setIsOpen(!isOpen)}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
    </div>
  );
};

export default Header;

