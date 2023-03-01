import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ContextGeneralProvider } from "./context/ContextGeneral";

//Componente navegación:
import { BrowserRouter, Route, Routes } from "react-router-dom";

//Paginas:
import Nosotros from "./screens/Nosotros";
import Login from "./screens/Login";
import Administrador from "./screens/Administrador";

import './firebase/config'


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ContextGeneralProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}></Route>
          <Route path="/nosotros" element={<Nosotros />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/admin" element={<Administrador />}></Route>
        </Routes>
      </BrowserRouter>
    </ContextGeneralProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
