import React from "react"
import FondoPerfil from "../../../assets/fondoPerfil.png";
import FotoPerfil from "../../../assets/fotoPerfil.png";
import Start from "../../../assets/start.png";
import Start1 from "../../../assets/start1.png";
import "./seccionFoto.css"

function SeccionPerfil() {
  return (
    <>
      <div className="cont-foto">
        <div className="contenedor-perfil">
          <img src={FondoPerfil} alt="" className="fondo-perfil" />
          <div className="contenedor-foto-perfil">
            <img src={FotoPerfil} alt="" className="foto-perfil" />
          </div>
          <div className="contenedor-info">
            <p>Reputación: </p>
            <img src={Start} alt="" />
            <img src={Start} alt="" />
            <img src={Start} alt="" />
            <img src={Start} alt="" />
            <img src={Start1} alt="" />
          </div>
          <div className="contenedor-nombre">
            <div className="nombre-header">
              <h3>Martin Romero</h3>
            </div>
            <p>#ELECTRICISTA</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default SeccionPerfil;
