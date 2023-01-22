import React from "react";
import NavbarNosotros from "../components/menu/NavbarNosotros";
import PieDePag from "../components/pieDePagina/PieDePag";
import "../styles/Nosotros.css";

function Nosotros() {
  return (
    <div>
      <div className="menuNosotros" id="menu">
        <NavbarNosotros />
      </div>
      <div className="containerNosotros">
        <div className="somos" id="Somos">
          <div className="contenido" style={{width:"788px"}}>
            <p className="tituloSecc ">¿Quiénes somos?</p>
            <p className="descriSecc descriNos">
              El CemiTT se creó en el 2007 y desde sus orígenes se ha
              constituido como una institución vanguardista con respecto a temas
              de ciencia, tecnología e innovación. Contamos con la
              infraestructura, el personal calificado y la actitud necesaria
              para convertir este proyecto en una realidad. Formamos parte de
              una importante red que integra universidades y centros de
              investigación-empresas –gobierno y emprendedores. Hemos celebrado
              convenios de colaboración con importantes instituciones de
              educación superior y centros de investigación del estado con el
              objetivo de integrar portafolios de oferta tecnológica y facilitar
              la transferencia y comercialización de tecnología. Así mismo,
              apoyamos a las empresas de base tecnológica que han sido incubadas
              en el CemiTT en la identificación de estrategias de aceleramiento
              y comercialización.
            </p>
            <div className="contImg">
              <img
                className="imgDescNos"
                src={require("../img/cemitt.png")}
                alt="logo"
              />
            </div>
          </div>
        </div>
        <div className="proyecto" id="Proyecto">
          <div className="contenido" style={{width:"851px"}}>
            <p className="tituloSecc">Proyecto</p>
            <p className="descriSecc descriNos">
              El objetivo de nuestro proyecto es consolidarnos como un aliado
              valioso para el sector académico e industrial del país y el mundo.
              Incubación de empresas de alto impacto. Llamada así como parte de
              la alineación a las políticas del Gobierno Federal con el
              Instituto Nacional del Emprendedor-Secretaría de Economía.
            </p>
            <p className="descriSecc descriNos">
              Nuestra incubadora está en medio de una transición hacia un nuevo
              modelo de incubación que nos permita maximizar resultados y
              acortar tiempos de estancia por parte de las empresas. Buscamos
              reducir la carga de trabajo hacia los emprendedores y dirigir los
              esfuerzos a lo que verdaderamente sea prioritario para el
              desarrollo del proyecto.
            </p>
            <p className="descriSecc descriNos">
              Protección de la propiedad intelectual. Como continuación de la
              reestructuración que se plantea al interior del CemiTT, se busca
              crear un Centro de patentamiento que nos permita gestionar y
              agilizar los trámites hacia el IMPI para la protección de la
              propiedad intelectual. La protección de la propiedad intelectual
              es uno de nuestros pilares más importantes, pero tenemos claro que
              sólo buscaremos patentar aquellas invenciones que cuenten con
              potencial de comercialización y de alto impacto.
            </p>
          </div>
        </div>
        <PieDePag />
      </div>
    </div>
  );
}

export default Nosotros;
