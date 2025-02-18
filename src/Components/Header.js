import "./Head.css";
import "./Resp.css";
import logo from "../Logo/logo.png";

function Header() {
  return (
    <div className="header">
      <a className="logo-text" href="/home">
        {<img src={logo} alt="Asikh Nursery Logo" className="logo-img" />}
      </a>

      <input type="checkbox" id="menu-toggle" className="menu-checkbox" />

      <label htmlFor="menu-toggle" className="menu-icon">
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </label>

      <nav className="nav-links">
        <a className="sections" href="/home">
          Home
        </a>
        <a className="sections" href="/about">
          About us
        </a>
        {/* <a className="sections" href="/plant">
          Plant care
        </a> */}
        <a className="sections" href="/our-services">
          Our Services
        </a>
        <a className="sections" href="/order">
          Order Now
        </a>
        <a className="sections" href="/contact">
          Contact Us
        </a>
        {/* <a className="sections" href="/privacy">
          Privacy
        </a> */}
      </nav>
    </div>
  );
}

export default Header;
