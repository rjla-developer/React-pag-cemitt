import React, { useState, useEffect } from "react";
import "../../styles/publicaciones/SeccPublicaciones.css";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/pagination";

// import required modules
import { EffectCards, Pagination } from "swiper";

const items = [
  {
    nombre: "Convocatorias",
    background: "#ecc2329c",
    width: "365px",
  },
  {
    nombre: "Talleres",
    background: "#7198f79c",
    width: "215px",
  },
  {
    nombre: "Asesorías",
    background: "#dc85bf9c",
    width: "265px",
  },
];

const convocatorias = [
  {
    titulo: "¡Empieza el maratón!",
    desc: "Prepárate para solicitar el registro de tu marca con nosotros. Recibe asesorías personalizadas y hasta el 80% de reembolso una vez registrada tu marca ante el IMPI",
    linkRegistro: "https://forms.gle/vJPC87RYujo1DKcf8",
    img: "https://hrdjumasol.com/wp-content/uploads/2013/12/500x500.gif",
  },
  {
    titulo: "¡Empieza el maratón! 2",
    desc: "Prepárate jhbsaaaaaaaaaa aaaaaaaaaaaaaaa aaaaaaaaaaa dclaknclan sklcn al <slnbjaslnklanlanlxnasl asasnlandlnals dlakn dlansdkgalsndlanlansldnaln sdaskdbjasldjnñasjdpandas para solicitar el registro de tu marca con nosotros. Recibe asesorías personalizadas y hasta el 80% de reembolso una vez registrada tu marca ante el IMPI",
    linkRegistro: "https://forms.gle/vJPC87RYujo1DKcf8",
    img: "https://camo.githubusercontent.com/735990c4f7ec7f7a920ac87f04adbadca4865fffe088ee8357d3ca7751b12bfb/68747470733a2f2f692e706f7374696d672e63632f676377797372684b2f6869646570686973682e706e67",
  },
  {
    titulo: "¡Empieza el maratón! 3",
    desc: "Prepárate para solicitar el registro de tu marca con nosotros. Recibe asesorías personalizadas y hasta el 80% de reembolso una vez registrada tu marca ante el IMPI",
    linkRegistro: "https://forms.gle/vJPC87RYujo1DKcf8",
    img: "https://cdn.fandangoseo.com/wp-content/uploads/2021/03/domain.jpg.webp",
  },
];

function SeccPublicaciones() {
  const [contentDescPizarron, setContentDescPizarron] = useState({});
  /* const [backColorDesc, setBackColorDesc] = useState(""); */

  useEffect(() => {
    setContentDescPizarron({
      titulo: "Da clic a un cartel",
      desc: "Lorem Prepárate para solicitar el registro de tu marca con nosotros. Recibe asesorías personalizadas y hasta el 80% de reembolso una vez registrada tu marca ante el IMPI",
      linkRegistro: "https://forms.gle/vJPC87RYujo1DKcf8",
      img: "https://hrdjumasol.com/wp-content/uploads/2013/12/500x500.gif",
      backColorDesc: "#7198f79c",
    });
    /* setBackColorDesc("#7198f79c"); */

    return () => {};
  }, []);

  function functionSetContent(variable, color) {
    setContentDescPizarron({
      titulo: variable.titulo,
      desc: variable.desc,
      linkRegistro: variable.linkRegistro,
      img: variable.img,
      backColorDesc: color,
    });
  }

  return (
    <div>
      <div className="grid">
        {items.map((item, index) => {
          return (
            <div
              className="item"
              key={"item: " + index}
              style={{ width: item.width }}
            >
              <div
                className="pelotita"
                style={{ background: item.background }}
              ></div>
              <p className="opcTitulo">{item.nombre}</p>
            </div>
          );
        })}
      </div>

      <div className="pizarron">
        {/* Slide Convocatorias */}
        <Swiper
          effect={"cards"}
          grabCursor={true}
          pagination={true}
          modules={[EffectCards, Pagination]}
          className="mySwiper"
        >
          {convocatorias.map((convocatoria, index) => {
            return (
              <SwiperSlide
                id="Swiper"
                key={"Convocatoria: " + index}
                onClick={() => functionSetContent(convocatoria, "#ecc2329c")}
              >
                {/* <a href="#Swiper"> */}
                  <img
                    className="imgOpc"
                    src={convocatoria.img}
                    alt={convocatoria.titulo}
                  />
                {/* </a> */}
              </SwiperSlide>
            );
          })}
        </Swiper>

        {/* Slide Talleres */}
        <Swiper
          effect={"cards"}
          grabCursor={true}
          pagination={true}
          modules={[EffectCards, Pagination]}
          className="mySwiper"
        >
          {convocatorias.map((convocatoria, index) => {
            return (
              <SwiperSlide
                key={"Convocatoria: " + index}
                onClick={() => functionSetContent(convocatoria, "#7198f79c")}
              >
                <img
                  className="imgOpc"
                  src={convocatoria.img}
                  alt={convocatoria.titulo}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>

        {/* Slide Asesorías */}
        <Swiper
          effect={"cards"}
          grabCursor={true}
          pagination={true}
          modules={[EffectCards, Pagination]}
          className="mySwiper"
        >
          {convocatorias.map((convocatoria, index) => {
            return (
              <SwiperSlide
                key={"Convocatoria: " + index}
                onClick={() => functionSetContent(convocatoria, "#dc85bf9c")}
              >
                <img
                  className="imgOpc"
                  src={convocatoria.img}
                  alt={convocatoria.titulo}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
      <div
        id="DescPizarron"
        className="descPizarron"
        style={{ backgroundColor: contentDescPizarron.backColorDesc }}
      >
        <img
          className="imgDescPizarron"
          src={contentDescPizarron.img}
          alt={contentDescPizarron.titulo}
        />
        <div className="containerDesc">
          <h1 className="titulo">{contentDescPizarron.titulo}</h1>
          <h3 className="desc">{contentDescPizarron.desc}</h3>
          <h3 className="link">
            Link registro:{" "}
            <a href={contentDescPizarron.linkRegistro}>
              {contentDescPizarron.linkRegistro}
            </a>
          </h3>
        </div>
      </div>
    </div>
  );
}

export default SeccPublicaciones;
