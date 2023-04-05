import { useContext, useState, useEffect } from "react";
import "../styles/Administrador.css";

import {
  saveDocumentoBD,
  deleteDocumentoBD,
  updateDocumentoBD,
} from "../firebase/api";

//Context:
import { ContextGeneral } from "../context/ContextGeneral";

//Iconos:
import { BsMegaphoneFill } from "react-icons/bs";
import { FaMicrophoneAlt, FaEdit } from "react-icons/fa";
import { SiGoogleclassroom } from "react-icons/si";
import { MdOndemandVideo } from "react-icons/md";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { BiLoaderCircle } from "react-icons/bi";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/navigation";

// import required modules
import { EffectCards, Navigation } from "swiper";

function Administrador() {
  const [edit, setEdit] = useState(false);
  const [agregar, setAgregar] = useState(false);
  const {
    convocatorias,
    talleres,
    podcast,
    contentDescPizarron,
    setContentDescPizarron,
    functionSetContent,
    initialStateContent,
    getLinks
  } = useContext(ContextGeneral);
  const [cartelVariable, setCartelVariable] = useState("convocatorias");
  const [load, setLoad] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setContentDescPizarron({ ...contentDescPizarron, [name]: value });
  };

  useEffect(() => {
    getLinks()
  
    return () => {
    }
  }, [load])
  

  const formulario = (titulo) => {
    return (
      <form
        id="form"
        className="row d-flex align-items-center justify-content-center mt-5"
      >
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
              value={contentDescPizarron.titulo}
            />
          </div>

          <div className="input-group mb-3">
            <span className="input-group-text">Descripción: </span>
            <textarea
              name="desc"
              className="form-control"
              aria-label="With textarea"
              onChange={handleInputChange}
              value={contentDescPizarron.desc}
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
              value={contentDescPizarron.img}
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
              value={contentDescPizarron.link}
            />
          </div>
        </div>
        <div className="col-8 d-flex align-items-center justify-content-center">
          <button
            type="button"
            className="btn btn-primary me-3"
            onClick={() => {
              if (titulo === "Agregar") {
                saveDocumentoBD(contentDescPizarron, cartelVariable);
                reset();
                
              } else if (titulo === "Editar") {
                updateDocumentoBD(contentDescPizarron.id, contentDescPizarron, cartelVariable);
                reset();
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
                resetSlide()
              } else if (titulo === "Editar") {
                setEdit(false);
                resetSlide()
              }
            }}
          >
            Cancelar
          </button>
        </div>
      </form>
    );
  };

  const showSwiper = () => {
    if (cartelVariable === "convocatorias")
      return (
        <div className="col">
          <Swiper
            effect={"cards"}
            navigation={true}
            modules={[EffectCards, Navigation]}
            onSlideChange={() => {
              resetSlide();
            }}
            className="mySwiper swiper-admin"
          >
            {convocatorias.map((cartel, index) => {
              return (
                <SwiperSlide className="shadow-lg" id="Swiper" key={cartel.id}>
                  <>
                    <div className="d-flex justify-content-center position-absolute">
                      <button
                        type="button"
                        className="btn btn-light btn-lg mx-3"
                        onClick={() => {
                          setEdit(!edit);
                          setAgregar(false);
                          setContentDescPizarron(cartel);
                          window.scroll(0, 50);
                          console.log(contentDescPizarron);
                        }}
                      >
                        <FaEdit />
                      </button>
                      <button
                        type="button"
                        className="btn btn-danger btn-lg"
                        data-bs-toggle="modal"
                        data-bs-target="#modalEliminar"
                        onClick={() => {
                          setContentDescPizarron(cartel);
                        }}
                      >
                        <RiDeleteBin5Fill />
                      </button>
                    </div>

                    <img
                      className="img-fluid"
                      src={cartel.img}
                      alt={cartel.titulo}
                    />
                  </>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      );
    if (cartelVariable === "talleres")
      return (
        <div className="col">
          <Swiper
            effect={"cards"}
            navigation={true}
            modules={[EffectCards, Navigation]}
            onSlideChange={() => {
              resetSlide();
            }}
            className="mySwiper swiper-admin"
          >
            {talleres.map((cartel, index) => {
              return (
                <SwiperSlide className="shadow-lg" id="Swiper" key={cartel.id}>
                  <>
                    <div className="d-flex justify-content-center position-absolute">
                      <button
                        type="button"
                        className="btn btn-light btn-lg mx-3"
                        onClick={() => {
                          setEdit(!edit);
                          setAgregar(false);
                          setContentDescPizarron(cartel);
                          /* window.scroll(0, 50); */
                        }}
                      >
                        <FaEdit />
                      </button>
                      <button
                        type="button"
                        className="btn btn-danger btn-lg"
                        data-bs-toggle="modal"
                        data-bs-target="#modalEliminar"
                        onClick={() => {
                          setContentDescPizarron(cartel);
                        }}
                      >
                        <RiDeleteBin5Fill />
                      </button>
                    </div>

                    <img
                      className="img-fluid"
                      src={cartel.img}
                      alt={cartel.titulo}
                    />
                  </>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      );

    if (cartelVariable === "podcast")
      return (
        <div className="col">
          <Swiper
            effect={"cards"}
            navigation={true}
            modules={[EffectCards, Navigation]}
            onSlideChange={() => {
              resetSlide();
            }}
            className="mySwiper swiper-admin"
          >
            {podcast.map((cartel, index) => {
              return (
                <SwiperSlide className="shadow-lg" id="Swiper" key={cartel.id}>
                  <>
                    <div className="d-flex justify-content-center position-absolute">
                      <button
                        type="button"
                        className="btn btn-light btn-lg mx-3"
                        onClick={() => {
                          setEdit(!edit);
                          setAgregar(false);
                          setContentDescPizarron(cartel);
                          window.scroll(0, 50);
                          console.log(contentDescPizarron);
                        }}
                      >
                        <FaEdit />
                      </button>
                      <button
                        type="button"
                        className="btn btn-danger btn-lg"
                        data-bs-toggle="modal"
                        data-bs-target="#modalEliminar"
                        onClick={() => {
                          setContentDescPizarron(cartel);
                        }}
                      >
                        <RiDeleteBin5Fill />
                      </button>
                    </div>

                    <img
                      className="img-fluid"
                      src={cartel.img}
                      alt={cartel.titulo}
                    />
                  </>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      );
  };

  const reset = () => {
    setLoad(true);
    setEdit(false);
    setAgregar(false);
    functionSetContent({
      id: "",
      titulo: "",
      desc: "",
      link: "",
      img: " ",
      categoria: "",
    });
    setTimeout(() => {
      setLoad(false);
    }, 150);
  };

  const resetSlide = () => {
    setEdit(false);
    setContentDescPizarron(initialStateContent)
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
            <button
              className="nav-link active ms-3 d-flex align-items-center justify-content-center"
              onClick={() => {
                reset();
                setCartelVariable("convocatorias");
              }}
            >
              <BsMegaphoneFill className="me-2" />
              Convovatorias
            </button>
            <button
              className="nav-link ms-3 d-flex align-items-center justify-content-center"
              onClick={() => {
                reset();
                setCartelVariable("talleres");
              }}
            >
              <SiGoogleclassroom className="me-2" />
              Talleres
            </button>
            <button
              className="nav-link ms-3 d-flex align-items-center justify-content-center"
              onClick={() => {
                reset();
                setCartelVariable("podcast");
              }}
            >
              <FaMicrophoneAlt className="me-2" />
              Podcast
            </button>
            <button
              className="nav-link disabled ms-3 d-flex align-items-center justify-content-center"
              onClick={() => {
                reset();
                setCartelVariable("modulos");
              }}
            >
              <MdOndemandVideo className="me-2" />
              Módulos
            </button>
          </nav>
        </div>

        <div className="col p-5 mt-2">
          <h1 className="text-center text-white text-capitalize">{cartelVariable}</h1>
          <div className="row mt-5 pt-5">
            {load ? (
              <div className="col d-flex justify-content-center rounded-2rem">
                <div className="my-5 py-5">
                  <BiLoaderCircle className="loadIcon my-5 text-white" />
                </div>
              </div>
            ) : (
              showSwiper()
            )}
            <div className="col d-flex align-items-start justify-content-center bg-dark rounded-2rem">
              {contentDescPizarron.categoria === "" ? (
                <div className="text-white m-5">
                  <p className="fs-1 text-center">
                    Bienvenido al administrador
                  </p>
                  <p className="fs-5 text-center">
                    Si deseas agregar un nuevo cartel, en la parte de abajo hay
                    un botón que dice "Agregar nuevo elemento", dale clic y
                    rellena el formulario, al finalizar dale clic en "Confirmar"
                  </p>
                </div>
              ) : (
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
              )}
            </div>
          </div>

          {/* Mostrar formulario para editar o mostrar botón */}
          {edit ? (
            formulario("Editar")
          ) : (
            <div className="row mt-5 pt-3">
              <div className="col d-flex align-items-center justify-content-center">
                <button
                  type="button"
                  className="btn btn-light btn-lg"
                  onClick={() => {
                    resetSlide();
                    setContentDescPizarron({...contentDescPizarron, ['categoria']: cartelVariable})
                    setAgregar(true);
                  }}
                >
                  Agregar nuevo elemento
                </button>
              </div>
            </div>
          )}

          {/* Mostrar formulario de agregar */}
          {agregar ? formulario("Agregar") : null}

          {/* Modal para eliminar */}
          <div
            className="modal fade"
            id="modalEliminar"
            data-bs-backdrop="static"
            data-bs-keyboard="false"
            tabIndex="-1"
            aria-labelledby="staticBackdropLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="staticBackdropLabel">
                    Eliminar post
                  </h5>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body">
                  ¿Estas seguro que deseas eliminar este post?
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-primary"
                    data-bs-target="#ConfirmarElim"
                    data-bs-toggle="modal"
                    data-bs-dismiss="modal"
                    onClick={() =>{
                      deleteDocumentoBD(contentDescPizarron.id, cartelVariable);
                      reset();
                    }
                    }
                  >
                    Continuar
                  </button>
                  <button
                    type="button"
                    className="btn btn-danger"
                    data-bs-dismiss="modal"
                  >
                    Cancelar
                  </button>
                  
                </div>
              </div>
            </div>
          </div>

          {/* Modal para confirmar eliminación */}
          <div
            className="modal fade"
            id="ConfirmarElim"
            aria-hidden="true"
            aria-labelledby="exampleModalToggleLabel2"
            tabIndex="-1"
          >
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalToggleLabel2">
                    Eliminado
                  </h5>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body">
                  Se ha borrado el elemento correctamente
                </div>
                <div className="modal-footer">
                  <button
                    className="btn btn-primary"
                    data-bs-target="#exampleModalToggle"
                    data-bs-toggle="modal"
                    data-bs-dismiss="modal"
                  >
                    Cerrar
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Administrador;
