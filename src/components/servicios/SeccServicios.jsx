import React from "react";
import "../../styles/servicios/SeccServicios.css";

//Data:
import dataServicios from '../../json/dataServicios.json'

function SeccServicios() {
  return (
    <div className="container my-5">
      <div className="row mb-0 mb-lg-3">
        <div className="col">
          <p className="tituloSecc fw-bold fs-1 mb-0">Servicios</p>
          <p className="text-white fs-6 d-block d-md-none">
            Áreas del cemiTT con lo que respectivamente se ofrece:
          </p>
          <p className="text-white fs-3 d-none d-md-block">
            Áreas del cemiTT con lo que respectivamente se ofrece:
          </p>
        </div>
      </div>

      {dataServicios.map((servicio)=>{
        return(
          <div className="mb-0 mb-lg-5 pb-2" key={servicio.area}>
            <div className="row d-flex justify-content-center mb-0 mb-lg-5">
              <div className="col-auto">
                <p className="h2 text-white mt-3 text-center px-5 border-bottom">{servicio.area}</p>
              </div>
            </div>
            <div className="row d-flex align-items-center justify-content-center mt-4 mb-2 mb-lg-5">
              <div className="col-12 col-lg-6">
                <div className="d-flex align-items-end justify-content-center">
                  <a type="button" className="btn btn-light shadow-lg btn-lg position-absolute mb-1 md-lg-3 rounded-1rem" href="https://calendar.google.com/calendar/u/0?cid=ZjhmY2UwYjk3ZjBjMGMzYWI1ZGMwZWJhZDY0ZWY3YWZiZjc4M2FmN2U4NDU2NDgzNzc5NTM2YjJhNTI4NjI4ZEBncm91cC5jYWxlbmRhci5nb29nbGUuY29t"  target="_blank" rel="noreferrer">Agendar cita</a>
                  <img
                    className="rounded-2rem img-fluid"
                    src={servicio.img}
                    alt={servicio.area}
                  />
                </div>
                
              </div>
              <div className="col-12 col-lg-4 p-4 ">
                <p className="text-white">{servicio.descripcion}</p>
                <div className="accordion accordion-flush" id="accordionFlushExample">
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingOne">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={"#" + servicio.id + "collaps_item1"} aria-expanded="false" aria-controls={servicio.id + "collaps_item1"}>
                        {servicio.servicio1}
                      </button>
                    </h2>
                    <div id={servicio.id + "collaps_item1"} className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                      <div className="accordion-body">{servicio.descServicio1}</div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingTwo">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={"#" + servicio.id + "collaps_item2"} aria-expanded="false" aria-controls={servicio.id + "collaps_item2"}>
                        {servicio.servicio2}
                      </button>
                    </h2>
                    <div id={servicio.id + "collaps_item2"} className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                      <div className="accordion-body">{servicio.descServicio2}</div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingThree">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={"#" + servicio.id + "collaps_item3"} aria-expanded="false" aria-controls={servicio.id + "collaps_item3"}>
                        {servicio.servicio3}
                      </button>
                    </h2>
                    <div id={servicio.id + "collaps_item3"} className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                      <div className="accordion-body">{servicio.descServicio3}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default SeccServicios;
