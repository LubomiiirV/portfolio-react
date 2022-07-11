import React from "react";
import "../style-components/navbar.css";
import Logo from "../images/logo.png";
import { useState } from "react";

function Navbar() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const [navbar, setNavbar] = useState(false);
  const changeBackground = () => {
    if (window.scrollY >= 20) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeBackground);
  window.addEventListener("resize", handleClick);

  return (
    <nav
      className={navbar ? "navbar sticky" : "navbar"}
      onScroll={changeBackground}
    >
      <div className="max-width">
        <div className="logo">
          <img
            className="mini-logo"
            src={Logo}
            alt="LOGO"
            style={{ width: "15em" }}
          />
        </div>
        <div className="menu-btn" onClick={handleClick}>
          <i className={click ? "fas fa-times" : "fas fa-bars"}> </i>
        </div>
        <ul className={click ? "menu active " : "menu"}>
          <li>
            <a href="#home" className="menu-btn">
              Domov
            </a>
          </li>
          <li>
            <a href="#about" className="menu-btn">
              O mne
            </a>
          </li>
          <li>
            <a href="#services" className="menu-btn">
              Služby
            </a>
          </li>
          <li>
            <a href="#skills" className="menu-btn">
              Znalosti
            </a>
          </li>
          <li>
            <a href="#teams" className="menu-btn">
              Môj tím
            </a>
          </li>
          <li>
            <a href="#contact" className="menu-btn">
              Kontakt
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
