import React, { useContext } from "react";
import { ContextGeneral } from "../../context/ContextGeneral";
import "../../styles/publicaciones/SeccPublicaciones.css";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/pagination";

// import required modules
import { EffectCards, Pagination } from "swiper";

//Iconos:
import { BsMegaphoneFill } from "react-icons/bs";
import { FaMicrophoneAlt } from "react-icons/fa";
import { SiGoogleclassroom } from "react-icons/si";

function SeccPublicaciones() {
  const {
    items,
    convocatorias,
    talleres,
    podcast,
    contentDescPizarron,
    functionSetContent,
  } = useContext(ContextGeneral);

  function casillaDesplegable() {
    return (
      <div
        className="rounded-bottom_1rem row d-flex align-items-center d-block d-lg-none"
        style={{ backgroundColor: contentDescPizarron.backColorDesc }}
      >
        <div className="col text-white">
          <p className="fs-4 mb-3 mt-3 fw-bold">{contentDescPizarron.titulo}</p>
          <p className="fs-6 mb-3">{contentDescPizarron.desc}</p>
          <p className="fs-6">
            {contentDescPizarron.categoria === "Podcast"
              ? "Escúchalo aquí: "
              : "Link registro: "}
            <a className=" text-white" href={contentDescPizarron.link}>
              {contentDescPizarron.link}
            </a>
          </p>
        </div>
        {/* <div className="col-12 mb-4 d-flex align-items-center justify-content-center">
            <img
              className="rounded-2rem img-fluid"
              src={contentDescPizarron.img}
              alt={contentDescPizarron.titulo}
            />
        </div> */}
      </div>
    );
  }

  return (
    <div className="container">
      <div className="row m-4 m-lg-0">
        <div className="col-12 col-lg-4 mb-5 mb-lg-0">
          <div className="row mb-3 mb-lg-0">
            <div className="col d-flex align-items-center justify-content-center">
              <p className="tituloSecc fw-bold fs-1 mb-0 me-3">Convocatorias</p>
              <BsMegaphoneFill className="iconos-novedades" />
            </div>
          </div>
          <div
            className="rounded-top-left row py-4 py-lg-5"
            style={{ backgroundColor: items[0].background }}
          >
            <div className="col">
              <Swiper
                effect={"cards"}
                grabCursor={true}
                pagination={{
                  clickable: true,
                }}
                modules={[EffectCards, Pagination]}
                className="mySwiper"
              >
                {convocatorias.map((convocatoria, index) => {
                  return (
                    <SwiperSlide
                      className="shadow-lg"
                      id="Swiper"
                      key={"Convocatoria: " + index}
                      onClick={() => {
                        /* window.scroll(0, 550); */
                        functionSetContent(convocatoria, items[0].background);
                      }}
                    >
                      <img
                        className="img-fluid"
                        src={convocatoria.img}
                        alt={convocatoria.titulo}
                      />
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </div>
          </div>
          {contentDescPizarron.categoria === "Convocatoria"
            ? casillaDesplegable()
            : null}
        </div>

        <div className="col-12 col-lg-4 mb-5 mb-lg-0">
          <div className="row mb-3 mb-lg-0">
            <div className="col d-flex align-items-center justify-content-center">
              <p className="tituloSecc fw-bold fs-1 mb-0 me-3">Talleres</p>
              <SiGoogleclassroom className="iconos-novedades" />
            </div>
          </div>
          <div
            className="item2-convo row py-4 py-lg-5"
            style={{ backgroundColor: items[1].background }}
          >
            <div className="col ">
              <Swiper
                effect={"cards"}
                grabCursor={true}
                pagination={{
                  clickable: true,
                }}
                modules={[EffectCards, Pagination]}
                className="mySwiper"
              >
                {talleres.map((taller, index) => {
                  return (
                    <SwiperSlide
                      className="shadow-lg"
                      key={"Taller: " + index}
                      onClick={() => {
                        /* window.scroll(0, 550); */
                        functionSetContent(taller, items[1].background);
                      }}
                    >
                      <img
                        className="img-fluid"
                        src={taller.img}
                        alt={taller.titulo}
                      />
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </div>
          </div>
          {contentDescPizarron.categoria === "Taller"
            ? casillaDesplegable()
            : null}
        </div>

        <div className="col-12 col-lg-4 mb-5 mb-lg-0">
          <div className="row mb-3 mb-lg-0">
            <div className="col d-flex align-items-center justify-content-center">
              <p className="tituloSecc fw-bold fs-1 mb-0 me-3">Podcast</p>
              <FaMicrophoneAlt className="iconos-novedades" />
            </div>
          </div>
          <div
            className="rounded-top-rigth row py-4 py-lg-5"
            style={{ backgroundColor: items[2].background }}
          >
            <div className="col ">
              <Swiper
                effect={"cards"}
                grabCursor={true}
                pagination={{
                  clickable: true,
                }}
                modules={[EffectCards, Pagination]}
                className="mySwiper"
              >
                {podcast.map((podcast, index) => {
                  return (
                    <SwiperSlide
                      className="shadow-lg"
                      key={"Podcast: " + index}
                      onClick={() => {
                        /* window.scroll(0, 550); */
                        functionSetContent(podcast, items[2].background);
                      }}
                    >
                      <img
                        className="img-fluid"
                        src={podcast.img}
                        alt={podcast.titulo}
                      />
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </div>
          </div>
          {contentDescPizarron.categoria === "Podcast"
            ? casillaDesplegable()
            : null}
        </div>
      </div>

      <div className="d-none d-lg-block">
        {console.log(contentDescPizarron.categoria)}
        {contentDescPizarron.categoria === "" ? null: (
          <div
            className="rounded-bottom_1rem row m-4 m-lg-0 p-5 d-flex align-items-center"
            style={{ backgroundColor: contentDescPizarron.backColorDesc }}
          >
            <div className="col-6 text-white">
              <p className="fs-1 mb-5 fw-bold">{contentDescPizarron.titulo}</p>
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
            <div className="col-6 d-flex align-items-center justify-content-center">
              <img
                className="rounded-2rem img-fluid"
                src={contentDescPizarron.img}
                alt={contentDescPizarron.titulo}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default SeccPublicaciones;
