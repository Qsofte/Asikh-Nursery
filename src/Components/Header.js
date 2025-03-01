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

      {/* Hamburger Menu */}
      <div className="menu-icon" onClick={() => setIsOpen(!isOpen)}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>

      {/* Navigation Links (Show on mobile when menu is open) */}
      <nav className={`nav-links ${isOpen ? "open" : ""}`}>
        <a className="sections" href="/home">Home</a>
        <a className="sections" href="/about">About us</a>
        <a className="sections" href="/our-services">Our Services</a>
        <a className="sections" href="/order">Order Now</a>
        <a className="sections" href="/contact">Contact Us</a>
      </nav>
    </div>
  );
};

export default Header;

