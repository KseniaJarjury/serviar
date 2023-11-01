import React from "react"
import FondoPerfil from "../../../assets/fondoPerfil.png";
import FotoPerfil from "../../../assets/fotoPerfil.png";
import Start from "../../../assets/start.png";
import Start1 from "../../../assets/start1.png";
import circulo from "../../../assets/circulo.png";
import "./seccionFoto.css"
import { Link, useParams } from "react-router-dom";
import UseServicio from "../../../hooks/UseServicio";

function SeccionPerfil() {
  // Dirigirme a la parte superior de la vista
  window.scrollTo(0, 0);
  const { usuarios, servicios } = UseServicio();
  let { Id_Usuario } = useParams();
  const usuario = usuarios.find(
    (usuario) => usuario.Id_Usuario === Number.parseInt(Id_Usuario)
  );
  const servicio = servicios.find(
    (servicio) => servicio.Id_Servicio === usuario.Id_Servicio
  );

  return (
    <>
      <div className="cont-foto">
        <div className="contenedor-perfil">
          <img src={FondoPerfil} alt="" className="fondo-perfil" />
          <div className="contenedor-foto-perfil">
            <img src={FotoPerfil} alt="" className="foto-perfil" />
          </div>
          <div className="contenedor-info">
            <p>Reputacion: </p>
            <img src={Start} alt="" />
            <img src={Start} alt="" />
            <img src={Start} alt="" />
            <img src={Start} alt="" />
            <img src={Start1} alt="" />
          </div>
          <div className="contenedor-nombre">
          {usuario ? ( // Verifica si usuario no es undefined
            <>
            <h3>{usuario.NombreApellido}</h3>
            <p>#{servicio ? servicio.Servicio : "Servicio no encontrado"}</p>
            </>
          ) : (
            <p>Usuario no encontrado</p>
          )}
          </div>
        </div>
      </div>
      <div className="contenedor-descrip">
        <div className=" items-center h-20 ml-12 mt-4 mb-12">
          <div className="bg-[#00B0E4] bg-opacity-20 rounded-full inline-block py-2 px-4">
            <h3 className="subtitulo text-left">Descripcion: </h3>
          </div>
          <div className="contenedor-descrip-perfil">
            <div>
              <p className="descrip-perfil">
                {usuario.Descripcion}
              </p>
            </div>
            <div>
              <ul className="descrip-info">
                <li>
                  <img src={circulo} alt="IconoCirculo" className="icon-circulo" />
                  <p>Reparacion de toma corrientes domiciliario.</p>
                </li>
                <li>
                  <img src={circulo} alt="IconoCirculo" className="icon-circulo" />
                  <p>Armado de llaves termicas Industriales</p>
                </li>
                <li>
                  <img src={circulo} alt="IconoCirculo" className="icon-circulo" />
                  <p>Confeccion de planos de obra para la solicitud del servicio.</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="linea-divisoria"></div>
      </div>

    </>
  )

}

export default SeccionPerfil