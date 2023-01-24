import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../styles/menu/Navbar.css";
import { RxHamburgerMenu } from "react-icons/rx";

const Navbar = () => {
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
              <Link to="/Nosotros">Nosotros</Link>
            </li>
            <li>
              <a href="#Publicaciones">Publicaciones</a>
            </li>
            <li>
              <a href="#Servicios">Servicios</a>
            </li>
            <li>
                <a href="#Modulos">Módulos</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
