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
    <nav className="container">
      <div className="row py-2 justify-content-between">
        <div className="col-6 col-md-3 d-flex align-items-center justify-content-center">
          <Link to="/">
            <img
              className="img-fluid"
              src={require("../../img/cemitt.png")}
              alt="logo"
            />
          </Link>
        </div>
        <div className="col-3 d-block d-md-none"></div>
        <div className="col-3 col-md-5 d-flex align-items-center justify-content-center order-first order-md-last">
          <div className="text-white menu-icon fs-2" onClick={handleShowNavbar}>
            <RxHamburgerMenu />
          </div>
          <div className={`nav-elements  ${showNavbar && "active"}`}>
            <ul>
              <li>
                <Link to="/">Página principal</Link>
              </li>
              <li>
                <Link to="/Nosotros">Nosotros</Link>
              </li>
            </ul>
            
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

/* <nav className="navbar navbar-expand-lg navbar-light">
  <div className="container">
    <div className="row">
      <div className="col-6 col-md-3 d-flex align-items-center justify-content-center">
        <Link to="/">
          <img
            className="img-fluid"
            src={require("../../img/cemitt.png")}
            alt="logo"
          />
        </Link>
      </div>
      <div className="col-3 d-block d-md-none"></div>
      <div className="col-3 col-md-5 d-flex align-items-center justify-content-center order-first order-md-last">
        <button className="navbar-toggler text-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon text-white"></span>
        </button>
      </div>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <a className="nav-link active text-white" aria-current="page" href="#">Home</a>
          <a className="nav-link text-white" href="#">Features</a>
        </div>
      </div>
  </div>
    
  </div>
</nav> */
