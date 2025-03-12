import React, { useState } from "react";
import "./Head.css";
import "./Resp.css";
import logo from "../Logo/logo.png";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

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
      </nav>

      {/* <a href="https://wa.me/your-number" className="whatsapp-btn">
        <img src={whatsappIcon} alt="WhatsApp" />
      </a> */}

      <div className="menu-icon" onClick={() => setIsOpen(!isOpen)}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>


    </div>
  );
};

export default Header;

