import React from "react";
import Navbar from "../components/menu/Navbar";
import PieDePag from "../components/pieDePagina/PieDePag";
import "../styles/Nosotros.css";

function Nosotros() {
  return (
    <>
      <Navbar />
      <div className="container">
        <div className="row justify-content-center m-1">
          <div className="somos2 col-12 col-sm-10 p-3 p-sm-5" id="Somos">
            <p className="tituloSecc2 fw-bold fs-1 mb-3 mb-md-4 ">¿Quiénes somos?</p>
            
            <p className="descriSecc2 fs-6 mb-4 d-block d-md-none">
              El CemiTT se creó en el 2007 y desde sus orígenes se ha constituido
              como una institución vanguardista con respecto a temas de ciencia,
              tecnología e innovación. Contamos con la infraestructura, el
              personal calificado y la actitud necesaria para convertir este
              proyecto en una realidad.
            </p>
            <p className="descriSecc2 fs-6 mb-4 d-block d-md-none">
              Formamos parte de una importante red que integra universidades y
              centros de investigación, empresas, gobierno y emprendedores. Hemos
              celebrado convenios de colaboración con importantes instituciones de
              educación superior y centros de investigación del estado con el
              objetivo de integrar portafolios de oferta tecnológica y facilitar
              la transferencia y comercialización de tecnología.
            </p>
            <p className="descriSecc2 fs-6 mb-4 d-block d-md-none">
              Así mismo, apoyamos a las empresas de base tecnológica que han sido
              incubadas en el CemiTT en la identificación de estrategias de
              aceleramiento y comercialización.
            </p>

            <p className="descriSecc2 fs-5 mb-4 d-none d-md-block">
              El CemiTT se creó en el 2007 y desde sus orígenes se ha constituido
              como una institución vanguardista con respecto a temas de ciencia,
              tecnología e innovación. Contamos con la infraestructura, el
              personal calificado y la actitud necesaria para convertir este
              proyecto en una realidad.
            </p>
            <p className="descriSecc2 fs-5 mb-4 d-none d-md-block">
              Formamos parte de una importante red que integra universidades y
              centros de investigación, empresas, gobierno y emprendedores. Hemos
              celebrado convenios de colaboración con importantes instituciones de
              educación superior y centros de investigación del estado con el
              objetivo de integrar portafolios de oferta tecnológica y facilitar
              la transferencia y comercialización de tecnología.
            </p>
            <p className="descriSecc2 fs-5 mb-4 d-none d-md-block">
              Así mismo, apoyamos a las empresas de base tecnológica que han sido
              incubadas en el CemiTT en la identificación de estrategias de
              aceleramiento y comercialización.
            </p>

            <div className="row justify-content-center">
              <div className="col-12 col-md-8">
                <img
                  className="img-fluid"
                  src={require("../img/cemitt.png")}
                  alt="logo"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="row justify-content-center m-0 mt-5">
          <div className="equipo col-12 col-sm-10 p-1 p-sm-5" id="Conocenos">
            <p className="tituloSecc2 fw-bold fs-1 mb-3 mb-md-4 p-sm-0">Conocenos:</p>

            <div class="row row-cols-1 row-cols-lg-2 g-2 g-lg-3">
              <div class="col">
                <div class="itemPersona p-2">
                  <div className="row justify-content-center">
                    <div className="col-5 col-md-4">
                      <img
                        className="imgItemPersona img-fluid"
                        src={require("../img/nosotros/imgPerfil.jpg")}
                        alt="logo"
                      />
                    </div>
                    <div className="col-7 col-md-8 pt-0 pt-md-1 py-lg-2">
                      <p className="h5 fw-bold m-0 mb-0 mb-md-2">Raul</p>
                      <p className="fs-6 mb-0">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="itemPersona p-2">
                  <div className="row justify-content-center">
                    <div className="col-5 col-md-4">
                      <img
                        className="imgItemPersona img-fluid"
                        src={require("../img/nosotros/imgPerfil.jpg")}
                        alt="logo"
                      />
                    </div>
                    <div className="col-7 col-md-8 pt-0 pt-md-1 py-lg-2">
                      <p className="h5 fw-bold m-0 mb-0 mb-md-2">Raul</p>
                      <p className="fs-6 mb-0">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="itemPersona p-2">
                  <div className="row justify-content-center">
                    <div className="col-5 col-md-4">
                      <img
                        className="imgItemPersona img-fluid"
                        src={require("../img/nosotros/imgPerfil.jpg")}
                        alt="logo"
                      />
                    </div>
                    <div className="col-7 col-md-8 pt-0 pt-md-1 py-lg-2">
                      <p className="h5 fw-bold m-0 mb-0 mb-md-2">Raul</p>
                      <p className="fs-6 mb-0">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="itemPersona p-2">
                  <div className="row justify-content-center">
                    <div className="col-5 col-md-4">
                      <img
                        className="imgItemPersona img-fluid"
                        src={require("../img/nosotros/imgPerfil.jpg")}
                        alt="logo"
                      />
                    </div>
                    <div className="col-7 col-md-8 pt-0 pt-md-1 py-lg-2">
                      <p className="h5 fw-bold m-0 mb-0 mb-md-2">Raul</p>
                      <p className="fs-6 mb-0">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="itemPersona p-2">
                  <div className="row justify-content-center">
                    <div className="col-5 col-md-4">
                      <img
                        className="imgItemPersona img-fluid"
                        src={require("../img/nosotros/imgPerfil.jpg")}
                        alt="logo"
                      />
                    </div>
                    <div className="col-7 col-md-8 pt-0 pt-md-1 py-lg-2">
                      <p className="h5 fw-bold m-0 mb-0 mb-md-2">Raul</p>
                      <p className="fs-6 mb-0">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <PieDePag />
    </>
    
  );
}

export default Nosotros;
