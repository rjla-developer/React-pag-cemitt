import React from "react";
import "../../styles/pieDePagina/PieDePag.css";
import { IoCall, IoLocationSharp } from "react-icons/io5";
import { FaFacebookSquare, FaYoutube } from "react-icons/fa";

function PieDePag() {
  return (
    <footer className="container mt-5" id="PiePag">
      <div className="row justify-content-center">
        <div className="col-8 col-md-4 mb-2 mb-md-0 align-self-center">
          <img
            className="img-fluid"
            src={require("../../img/cemitt.png")}
            alt="logo"
          />
        </div>
        <div className="col-6 col-md-3">
          <p className="fs-6 text-white text-center d-block d-md-none">CONTACTOS</p>
          <p className="fs-4 text-white text-center d-none d-md-block">CONTACTOS</p>
          <div className="row">
            <div className="col-6 col-md-12 d-flex justify-content-center justify-content-md-evenly">
              <div className="row">
                <div className="col-2">
                  <a href="tel:7773105520" className="links">
                    <IoCall className="icono" />
                  </a>
                </div>
                <div className="col-10 d-none d-md-block">
                  <a href="tel:7773105520" className="links">
                    <p className="text-white text-center">
                      Servicio al Cliente: {<br />} 777-310-5520
                    </p>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-6 col-md-12 d-flex justify-content-center justify-content-md-evenly">
              <div className="row">
                <div className="col-2">
                  <a href="https://goo.gl/maps/bmF2NsbyAYFvXrMs8" className="links" target="_blank" rel="noreferrer">
                    <IoLocationSharp className="icono" />
                  </a>
                </div>
                <div className="col-10 d-none d-md-block">
                  <a href="https://goo.gl/maps/bmF2NsbyAYFvXrMs8" className="links" target="_blank" rel="noreferrer">
                    <p className="text-white text-center">
                      Clic para abrir {<br />} Google maps
                    </p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-6 col-md-3">
          <p className="fs-6 text-white text-center d-block d-md-none">REDES SOCIALES</p>
          <p className="fs-4 text-white text-center d-none d-md-block">REDES SOCIALES</p>
          <div className="row">
            <div className="col-6 col-md-12 d-flex justify-content-center justify-content-md-evenly">
              <div className="row">
                <div className="col-2">
                  <a
                    href="https://www.youtube.com/@cemittmorelos2653"
                    className="links"
                    target="_blank" rel="noreferrer"
                  >
                    <FaYoutube className="icono" />
                  </a>
                </div>
                <div className="col-10 d-none d-md-block p-2">
                  <a
                    href="https://www.youtube.com/@cemittmorelos2653"
                    className="links"
                    target="_blank" rel="noreferrer"
                  >
                    <p className="text-white text-center">
                      CemiTT Morelos
                    </p>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-6 col-md-12 d-flex justify-content-center justify-content-md-evenly">
              <div className="row">
                <div className="col-2">
                  <a href="https://www.facebook.com/CentroCemiTT" className="links" target="_blank" rel="noreferrer">
                    <FaFacebookSquare className="icono" />
                  </a>
                </div>
                <div className="col-10 d-none d-md-block pt-2">
                  <a href="https://www.facebook.com/CentroCemiTT" className="links" target="_blank" rel="noreferrer">
                    <p className="text-white text-center">
                      CEMITT
                    </p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row align-items-center justify-content-center mt-4">
        <div className="col-8">
          <p className="text-center text-white">Copyright © 2023 RJ Luengas. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}

export default PieDePag;
