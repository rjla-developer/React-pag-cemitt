import React from "react";
import "../../styles/pieDePagina/PieDePag.css";
import { IoCall, IoLocationSharp } from "react-icons/io5";
import { FaFacebookSquare, FaYoutube } from "react-icons/fa";

function PieDePag() {
  return (
    <div className="pieDePagina" id="PiePag">
      <div className="contactosCemitt">
        <div>
          <img
            className="logoElemContact"
            src={require("../../img/cemitt.png")}
            alt="logo"
          />
        </div>
        <div class="elemContact">
          <p className="tittleContact">CONTACTOS</p>
          <div className="infoContact">
            <a href="tel:7773105520" className="links">
              <IoCall className="icono" />
            </a>
            <a href="tel:7773105520" className="links">
              <p className="descContact" style={{ width: "274px" }}>
                Servicio al Cliente: {<br />} 777-310-5520
              </p>
            </a>
          </div>
          <div className="infoContact">
            <a href="https://goo.gl/maps/bmF2NsbyAYFvXrMs8" className="links" target="_blank" rel="noreferrer">
              <IoLocationSharp className="icono" />
            </a>
            <a href="https://goo.gl/maps/bmF2NsbyAYFvXrMs8" className="links" target="_blank" rel="noreferrer">
              <p className="descContact" style={{ width: "274px" }}>
                Clic para abrir {<br />} Google maps
              </p>
            </a>
          </div>
        </div>
        <div class="elemContact">
          <h3 className="tittleContact">REDES SOCIALES</h3>
          <div className="infoContact">
            <a
              href="https://www.youtube.com/@cemittmorelos2653"
              className="links"
              target="_blank" rel="noreferrer"
            >
              <FaYoutube className="icono" />
            </a>

            <a
              href="https://www.youtube.com/@cemittmorelos2653"
              className="links"
              target="_blank" rel="noreferrer"
            >
              <p className="descContact" style={{ width: "126px" }}>
                CemiTT Morelos
              </p>
            </a>
          </div>
          <div className="infoContact">
            <a href="https://www.facebook.com/CentroCemiTT" className="links" target="_blank" rel="noreferrer">
              <FaFacebookSquare className="icono" />
            </a>
            <a href="https://www.facebook.com/CentroCemiTT" className="links" target="_blank" rel="noreferrer">
              <p className="descContact" style={{ width: "126px" }}>
                CEMITT
              </p>
            </a>
          </div>
        </div>
      </div>
      <div className="creditos">
        <p>Copyright © 2023 RJ Luengas. Todos los derechos reservados.</p>
      </div>
    </div>
  );
}

export default PieDePag;
