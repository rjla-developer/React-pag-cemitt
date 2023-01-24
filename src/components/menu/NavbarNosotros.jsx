import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../styles/menu/Navbar.css";
import { RxHamburgerMenu } from "react-icons/rx";

const NavbarNosotros = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };
  return (
    <nav className="navbar">
      <div className="containerMenu">
        <div className="logo">
          <Link to="/">
            <img
                className="logoImg"
              src={require("../../img/cemitt.png")}
              alt="logo"
            />
          </Link>
        </div>
        <div className="menu-icon" onClick={handleShowNavbar}>
          <RxHamburgerMenu />
        </div>
        <div className={`nav-elements  ${showNavbar && "active"}`}>
          <ul>
            <li>
              <a href="#Somos">¿Quiénes somos?</a>
            </li>
            <li>
              <a href="#Proyecto">Proyecto</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavbarNosotros;
