import React, { useState, useEffect } from "react";
import "../../styles/publicaciones/SeccPublicaciones.css";
import { saveConvocatoria, getConvocatorias } from "../../firebase/api";

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
    nombre: "convocatorias",
    background: "#ecc2329c",
    width: "365px",
  },
  {
    nombre: "talleres",
    background: "#7198f79c",
    width: "215px",
  },
  {
    nombre: "podcast",
    background: "#dc85bf9c",
    width: "225px",
  },
];

const inicialConvo={
    titulo: "¡Empieza el maratón!",
    desc: "Prepárate para solicitar el registro de tu marca con nosotros. Recibe asesorías personalizadas y hasta el 80% de reembolso una vez registrada tu marca ante el IMPI",
    link: "https://forms.gle/vJPC87RYujo1DKcf8",
    img: "https://hrdjumasol.com/wp-content/uploads/2013/12/500x500.gif",
  }

function SeccPublicaciones() {
  const [contentDescPizarron, setContentDescPizarron] = useState({});
  const [convocatorias, setConvocatorias] = useState([]);
  const [talleres, setTalleres] = useState([]);
  const [podcast, setPodcast] = useState([]);

  const handleSubmit = async (e) => {
    await saveConvocatoria(inicialConvo);
    console.log("Se guardo convocatoria");
  };

  //Pasar al context:
  const getLinks = async () => {
      items.map(async (item)=>{
        const querySnapshot = await getConvocatorias(item.nombre);
        const docs = [];
        querySnapshot.forEach((doc) => {
          docs.push({ ...doc.data(), id: doc.id });
        });
        if (item.nombre=="convocatorias") {
          setConvocatorias(docs);
        }
        if (item.nombre=="talleres") {
          setTalleres(docs);
        }
        if (item.nombre=="podcast") {
          setPodcast(docs);
        }
      })
      
  };

  //Pasar a l context:
  useEffect(() => {
    setContentDescPizarron({
      titulo: "Da clic a un cartel",
      desc: "Lorem Prepárate para solicitar el registro de tu marca con nosotros. Recibe asesorías personalizadas y hasta el 80% de reembolso una vez registrada tu marca ante el IMPI",
      link: "https://forms.gle/vJPC87RYujo1DKcf8",
      img: "https://hrdjumasol.com/wp-content/uploads/2013/12/500x500.gif",
      backColorDesc: "#7198f79c",
      categoria:"convocatoria"
    });
    getLinks();
    /* handleSubmit(); */

    return () => {};
  }, []);




  //Esta función sirve para pintar todo lo que irá adentro del pizarron
  function functionSetContent(variable, color) {
    setContentDescPizarron({
      titulo: variable.titulo,
      desc: variable.desc,
      link: variable.link,
      img: variable.img,
      backColorDesc: color,
      categoria: variable.categoria
    });
  }

  return (
    <>
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
          pagination={{
            clickable: true,
          }}
          modules={[EffectCards, Pagination]}
          className="mySwiper"
        >
          {convocatorias.map((convocatoria, index) => {
            return (
              <SwiperSlide
                id="Swiper"
                key={"Convocatoria: " + index}
                onClick={() => {
                  window.scroll(0, 550);
                  functionSetContent(convocatoria, "#ecc2329c");
                }}
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

        {/* Slide Talleres */}
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
                key={"Taller: " + index}
                onClick={() => {
                  window.scroll(0, 550);
                  functionSetContent(taller, "#7198f79c");
                }}
              >
                <img
                  className="imgOpc"
                  src={taller.img}
                  alt={taller.titulo}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>

        {/* Slide Asesorías */}
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
                key={"Podcast: " + index}
                onClick={() => {
                  window.scroll(0, 550);
                  functionSetContent(podcast, "#dc85bf9c");
                }}
              >
                <img
                  className="imgOpc"
                  src={podcast.img}
                  alt={podcast.titulo}
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
            {contentDescPizarron.categoria === "Podcast"?  "Escúchalo aquí: ": "Link registro: "}
            <a href={contentDescPizarron.link}>
              {contentDescPizarron.link}
            </a>
          </h3>
        </div>
      </div>
    </>
  );
}

export default SeccPublicaciones;
