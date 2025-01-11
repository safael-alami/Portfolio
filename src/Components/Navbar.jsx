import { useState } from "react";
import { Link } from "react-scroll"; 
import "../Styles/Navbar.css";
import logo from "../Assets/Images/logo_portfolio.png";
import github from "../Assets/Images/git-logo.png";
import medium from "../Assets/Images/Medium-logo.png";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <div className="navBar_container">
       <a href="#hero">
      <img src={logo} className="logo" alt="Logo" />
    </a>

      <div className={`nav ${menuOpen ? "show" : ""}`}>
        <div>
          <Link to="About" smooth={true} duration={500}>About</Link>
        </div>
        <div>
          <Link to="Career" smooth={true} duration={500}>Career</Link>
        </div>
        <div>
          <Link to="Experience" smooth={true} duration={500}>Experience</Link>
        </div>
        <div>
          <Link to="Skills" smooth={true} duration={500}>Skills</Link>
        </div>
        <div>
          <Link to="Projects" smooth={true} duration={500}>Projects</Link>
        </div>
        <div>
          <Link to="Contact" smooth={true} duration={500}>Contact</Link>
        </div>
      </div>

      <div className="logo_container">
        <div>
          <a href="https://github.com/safael-alami/" target="_blank">
            <img src={github} className="git" alt="GitHub" />
          </a>
        </div>
        <div>
          <a href="https://medium.com/@safaelalami971" target="_blank">
            <img src={medium} className="git" alt="Medium" />
          </a>
        </div>
      </div>

      {/* <div className="menu-toggle" onClick={toggleMenu}>
        <i className="fas fa-bars"></i>
      </div> */}
    </div>
  );
}

export default Navbar;
