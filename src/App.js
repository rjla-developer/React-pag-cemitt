import SeccPublicaciones from "./components/publicaciones/SeccPublicaciones";
import SeccModulos from "./components/modulos/SeccModulos";
import PieDePag from "./components/pieDePagina/PieDePag";

//Data:
/* import dataModulos from './json/dataModulos.json' */

function App() {
  return (
      </div>
      <div className="container">
        <div
          className="section"
          id="Publicaciones"
          style={{ height: "1150px" }}
        >
          <SeccPublicaciones />
        </div>
        <div className="section" id="Servicios">
        <SeccModulos />
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
