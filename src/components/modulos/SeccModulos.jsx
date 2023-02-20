import React, { useState, useEffect } from "react";
import ReactPlayer from "react-player";

//Estilos:
import "../../styles/modulos/SeccModulos.css";

//Data:
import data from "../../json/dataModulos.json";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Pagination, Navigation } from "swiper";

//Iconos:
import { MdClose } from "react-icons/md";

function SeccModulos() {
  const [infoVide, setInfoVide] = useState({});

  useEffect(() => {
    setInfoVide({
      titulo: "",
      descripcion: "",
      link: "",
    });

    return () => {};
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <p className="tituloSecc fw-bold fs-1 mb-0">Módulos</p>
          <p className="text-white fs-6 d-block d-md-none">
            Aquí encontrarás los diferentes temas de aprendizajes
          </p>
          <p className="text-white fs-3 d-none d-md-block">
            Aquí encontrarás los diferentes temas de aprendizajes
          </p>
        </div>
      </div>
      <div className="row d-flex justify-content-center align-items-center">
        <div className="col-12 col-md-10">
          <Swiper
            className="mySwiper rounded-2rem w-100 h-100"
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
          >
            {data.map((item) => {
              return (
                <SwiperSlide
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal" 
                  key={item.titulo}
                  onClick={() => {
                    setInfoVide(
                      {
                        titulo: item.titulo,
                        descripcion: item.descripcion,
                        link: item.link,
                      }
                    )
                  }}
                >
                  <div className="d-flex justify-content-center align-items-center d-flex">
                    <div className="position-absolute align-self-end rounded p-1 mb-0">
                      <p className="h5 align-self-start text-center mb-4 pt-1 mx-2 text-white pb-1 d-block d-md-none">{item.titulo}</p>
                      <p className="h3 align-self-start text-center mb-4 pt-1 mx-2 text-white pb-1 d-none d-md-block">{item.titulo}</p>
                    </div>
                    <img
                      className="rounded-2rem img-fluid"
                      src={item.img}
                      alt={item.caption}
                    />
                    
                    
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
          <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-xl  modal-dialog-centered">
              <div className="modalbackground text-white modal-content">
                <div className="container my-1 my-md-3">
                  <div className="row flex justify-content-between align-items-center">
                    <div className="col-6 col-lg-3">
                      <img
                        className="img-fluid"
                        src={require("../../img/cemitt.png")}
                        alt="logo"
                      />
                    </div>
                    <div className="col-auto"> 
                      <MdClose className="fs-1" type="button" data-bs-dismiss="modal" aria-label="Close" />
                    </div>
                  </div>
                  <div className="row pt-3 mt-md-0">
                    <div className="col">
                      <p className="h2 text-center">{infoVide.titulo}</p>
                    </div>
                  </div>
                </div>
                <div className="modal-body">
                  <div className="container-fluid">
                    <div className="player-wrapper mb-4 mb-md-5">
                        <ReactPlayer
                          url={infoVide.link}
                          className="react-player rounded shadow"
                          width="100%"
                          height="100%"
                          controls={true}
                        />
                      </div>

                    <div className="row d-flex align-items-center justify-content-center mb-3 mb-lg-5">
                      <div className="bgDescripcion rounded-2rem col-12 col-lg-10 p-4 shadow-lg">
                        <p className="h3 pb-2 d-none d-lg-block">Descripción del modulo:</p>
                        <p className="h4 d-none d-lg-block">{infoVide.descripcion}</p>
                        <p className="h5 pb-2 d-block d-lg-none">Descripción del modulo:</p>
                        <p className="h6 d-block d-lg-none">{infoVide.descripcion}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SeccModulos;
