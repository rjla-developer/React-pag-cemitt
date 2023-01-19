import './App.css';
import SeccPublicaciones from './components/publicaciones/SeccPublicaciones';
import SeccModulos from './components/modulos/SeccModulos';

//Data:
/* import dataModulos from './json/dataModulos.json' */

function App() {
  return (
    <div className="container">
      <div className='section' id='Publicaciones'>
        <SeccPublicaciones />
      </div>
      <div className='section' id='Servicios'>

      </div>
      <div className='section' id='Modulos'>
        <p className="tituloSecc">Módulos</p>
        <p className="descriSecc">Aquí encontrarás los diferentes temas de aprendizajes</p>
          <SeccModulos />
      </div>
    </div>
  );
}

export default App;
