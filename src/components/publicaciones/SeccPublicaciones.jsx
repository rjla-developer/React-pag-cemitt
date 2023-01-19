import React from "react";
import "../../styles/publicaciones/SeccPublicaciones.css";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";



// import required modules
import { Grid, Pagination } from "swiper";

const items = [
  {
    nombre: "Convocatorias",
    background: "#ECC232",
    width: "365px",
  },
  {
    nombre: "Talleres",
    background: "#7198F7",
    width: "215px",
  },
  {
    nombre: "Asesorías",
    background: "#DC85BF",
    width: "265px",
  },
];

function seccPublicaciones() {
  return (
    <div>
      <div className="grid">
        {items.map((item) => {
          return (
            <div className="item" style={{ width: item.width }}>
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
        <>
          <Swiper
            slidesPerView={3}
            grid={{
              rows: 2,
            }}
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            modules={[Grid, Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>Slide 1</SwiperSlide>
            <SwiperSlide>Slide 2</SwiperSlide>
            <SwiperSlide>Slide 3</SwiperSlide>
            <SwiperSlide>Slide 4</SwiperSlide>
            <SwiperSlide>Slide 5</SwiperSlide>
            <SwiperSlide>Slide 6</SwiperSlide>
            <SwiperSlide>Slide 7</SwiperSlide>
            <SwiperSlide>Slide 8</SwiperSlide>
            <SwiperSlide>Slide 9</SwiperSlide>
          </Swiper>
        </>
      </div>
    </div>
  );
}

export default seccPublicaciones;
