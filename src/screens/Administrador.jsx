import { useContext, useState } from "react";
import "../styles/Administrador.css";

import { saveDocumentoBD, deleteDocumentoBD, updateDocumentoBD } from "../firebase/api";

//Context:
import { ContextGeneral } from "../context/ContextGeneral";

//Iconos:
import { BsMegaphoneFill } from "react-icons/bs";
import { FaMicrophoneAlt, FaEdit } from "react-icons/fa";
import { SiGoogleclassroom } from "react-icons/si";
import { MdOndemandVideo } from "react-icons/md";
import { RiDeleteBin5Fill } from "react-icons/ri";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/pagination";

// import required modules
import { EffectCards, Pagination } from "swiper";

function Administrador() {
  const [edit, setEdit] = useState(false);
  const [agregar, setAgregar] = useState(false);
  const { convocatorias, contentDescPizarron, functionSetContent } =
    useContext(ContextGeneral);
  const [valueState, setValueState] = useState(contentDescPizarron);

  const handleInputChange=(e)=>{
    const {name, value}= e.target;
    setValueState({...valueState, [name]: value});
  }

  const formulario = (titulo) => {
    return (
      <form className="row d-flex align-items-center justify-content-center mt-5">
        <div className="col-8 rounded-2rem">
          <p className="fs-2 text-center text-white">{titulo}:</p>

          <div className="input-group input-group-sm mb-3">
            <span className="input-group-text" id="inputGroup-sizing-default">
              Titulo:{" "}
            </span>
            <input
              name="titulo"
              type="text"
              className="form-control"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-sm"
              onChange={handleInputChange}
            />
          </div>

          <div className="input-group mb-3">
            <span className="input-group-text">Descripción: </span>
            <textarea
              name="desc"
              className="form-control"
              aria-label="With textarea"
              onChange={handleInputChange}
            ></textarea>
          </div>

          <div className="input-group input-group-sm mb-3">
            <span className="input-group-text" id="inputGroup-sizing-default">
              Img:{" "}
            </span>
            <input
              name="img"
              type="text"
              className="form-control"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-sm"
              onChange={handleInputChange}
            />
          </div>

          <div className="input-group input-group-sm mb-3">
            <span className="input-group-text" id="inputGroup-sizing-default">
              Link:{" "}
            </span>
            <input
              name="link"
              type="text"
              className="form-control"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-sm"
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="col-8 d-flex align-items-center justify-content-center">
          <button
            type="button"
            className="btn btn-primary me-3"
            onClick={() => {
              if (titulo === "Agregar") {
                console.log("Se agrego")
                saveDocumentoBD(valueState, "convocatorias")
              } else if (titulo === "Editar") {
                console.log("Se edito")
                updateDocumentoBD(valueState.id, valueState, "convocatorias")
              }
            }}
          >
            Confirmar
          </button>
          <button
            type="button"
            className="btn btn-danger"
            onClick={() => {
              if (titulo === "Agregar") {
                setAgregar(false);
              } else if (titulo === "Editar") {
                setEdit(false);
              }
            }}
          >
            Cancelar
          </button>
        </div>
      </form>
    );
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="barra-lateral col-2 p-0 bg-dark text-white">
          <nav className="nav flex-column d-flex align-items-start fs-4">
            <div className="row mb-3">
              <div className="col">
                <img
                  className="img-fluid"
                  src={require("../img/cemitt.png")}
                  alt="logo"
                />
              </div>
            </div>
            <a
              className="nav-link active ms-3 d-flex align-items-center justify-content-center"
              href="/"
            >
              <BsMegaphoneFill className="me-2" />
              Convovatorias
            </a>
            <a
              className="nav-link ms-3 d-flex align-items-center justify-content-center"
              href="/"
            >
              <FaMicrophoneAlt className="me-2" />
              Talleres
            </a>
            <a
              className="nav-link ms-3 d-flex align-items-center justify-content-center"
              href="/"
            >
              <SiGoogleclassroom className="me-2" />
              Podcast
            </a>
            <a
              className="nav-link ms-3 d-flex align-items-center justify-content-center"
              href="/"
            >
              <MdOndemandVideo className="me-2" />
              Módulos
            </a>
          </nav>
        </div>

        <div className="col p-5 mt-2">
          <h1 className="text-center text-white">Convocatorias</h1>
          <div className="row mt-5 pt-5">
            <div className="col">
              <Swiper
                effect={"cards"}
                grabCursor={true}
                pagination={{
                  clickable: true,
                }}
                modules={[EffectCards, Pagination]}
                className="mySwiper swiper-admin"
              >
                {convocatorias.map((convocatoria, index) => {
                  return (
                    <SwiperSlide
                      className="shadow-lg"
                      id="Swiper"
                      key={"Convocatoria: " + index}
                    >
                      <>
                        <div className="d-flex justify-content-center position-absolute">
                          <button
                            type="button"
                            className="btn btn-light btn-lg mx-3"
                            onClick={() => {
                              setEdit(!edit);
                              setAgregar(false);
                              functionSetContent(convocatoria, "black");
                              setValueState({...valueState, ["id"]: convocatoria.id})
                            }}
                          >
                            <FaEdit />
                          </button>
                          <button
                            type="button"
                            className="btn btn-danger btn-lg"
                            onClick={()=>deleteDocumentoBD(convocatoria.id, "convocatorias")}
                          >
                            <RiDeleteBin5Fill />
                          </button>
                        </div>

                        <img
                          className="img-fluid"
                          src={convocatoria.img}
                          alt={convocatoria.titulo}
                        />
                      </>
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </div>
            <div className="col d-flex align-items-start justify-content-center bg-dark rounded-2rem">
              <div className="text-white m-5">
                <p className="fs-1 mb-5 fw-bold">
                  {contentDescPizarron.titulo}
                </p>
                <p className="fs-3 mb-5">{contentDescPizarron.desc}</p>
                <p className="fs-3">
                  {contentDescPizarron.categoria === "Podcast"
                    ? "Escúchalo aquí: "
                    : "Link registro: "}
                  <a className=" text-white" href={contentDescPizarron.link}>
                    {contentDescPizarron.link}
                  </a>
                </p>
              </div>
            </div>
          </div>

          {edit ? (
            formulario("Editar")
          ) : (
            <div className="row mt-5 pt-3">
              <div className="col d-flex align-items-center justify-content-center">
                <button
                  type="button"
                  className="btn btn-light btn-lg"
                  onClick={() => {
                    setAgregar(true);
                  }}
                >
                  Agregar nuevo elemento
                </button>
              </div>
            </div>
          )}
          {agregar ? formulario("Agregar") : null}
        </div>
      </div>
    </div>
  );
}

export default Administrador;
