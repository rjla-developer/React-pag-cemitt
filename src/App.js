import "./App.css";
import Navbar from "./components/menu/Navbar";
import SeccPublicaciones from "./components/publicaciones/SeccPublicaciones";
import SeccServicios from "./components/servicios/SeccServicios";
import SeccModulos from "./components/modulos/SeccModulos";
import PieDePag from "./components/pieDePagina/PieDePag";

//Data:
/* import dataModulos from './json/dataModulos.json' */

function App() {
  return (
    <div>
      <div className="menu" id="menu">
        <Navbar />
      </div>
      <div className="container">
        <div
          className="section"
          id="Publicaciones"
          /* style={{ height: "1150px" }} */
        >
          <SeccPublicaciones />
        </div>
        <div className="section" id="Servicios">
          <SeccServicios />
        </div>
        <div className="section" id="Modulos">
          <SeccModulos />
        </div>
        <PieDePag />
      </div>
    </div>
  );
}

export default App;
