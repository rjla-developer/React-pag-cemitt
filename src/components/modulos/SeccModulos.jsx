import React, { useState, useEffect } from "react";
import ReactPlayer from "react-player";
import { AiFillCloseCircle } from "react-icons/ai";

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

function SeccModulos() {
  const [videPlayer, setVidePlayer] = useState(false);
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
    <div>
      <p className="tituloSecc">Módulos</p>
      <p className="descriSecc">
        Aquí encontrarás los diferentes temas de aprendizajes
      </p>
      <Swiper
        pagination={{
          type: "fraction",
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper2"
      >
        {data.map((item) => {
          return (
            <SwiperSlide
              key={item.caption}
              onClick={() => {
                setVidePlayer(!videPlayer);
                setInfoVide(
                  {
                    titulo: item.titulo,
                    descripcion: item.descripcion,
                    link: item.link,
                  }
                )
                console.log(videPlayer);
              }}
            >
              <div className="containerPortada">
                <img
                  className="imgPortadaVideo"
                  src={item.img}
                  alt={item.caption}
                />
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
      {videPlayer ? (
        <div className="containerModal">
          <div className="modal">
            <p className="tituloModal">{infoVide.titulo}</p>
            <AiFillCloseCircle
              className="iconoCerrar"
              onClick={() => setVidePlayer(!videPlayer)}
            />
            <div className="containerVideoDesc">
              <div className="descModal">
                <h3 className="descrVideo">{infoVide.descripcion}</h3>
              </div>
              <div className="videoModulo">
                <ReactPlayer
                  width={750}
                  height={450}
                  url={infoVide.link}
                  controls={true}
                />
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default SeccModulos;
