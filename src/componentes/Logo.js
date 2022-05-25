import React from "react";
import logo from "../imagenes/freecodecamp-logo.png";
import "../estilos/estiloLogo.css";
const Logo = () => {
  return (
    <div className="logo-contenedor">
      <img src={logo} alt="logo" className="freecodecamp-logo" />
    </div>
  );
};

export default Logo;
