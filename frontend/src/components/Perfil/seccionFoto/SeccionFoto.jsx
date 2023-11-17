import React from "react"
import FondoPerfil from "../../../assets/fondoPerfil.png";
import FotoPerfil from "../../../assets/fotoPerfil.png";
import Start from "../../../assets/start.png";
import Start1 from "../../../assets/start1.png";
import "./seccionFoto.css"
import { useParams } from "react-router-dom";
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
      <div className="cont-foto text-[#001A29]">
        <div className="contenedor-perfil">
          <img src={FondoPerfil} alt="" className="fondo-perfil" />
          <div className="contenedor-foto-perfil">
            <img src={FotoPerfil} alt="" className="foto-perfil" />
          </div>
          <div className="flex flex-row justify-end items-center ml-16">
            <p className="m-2 sm:text-xl">Reputacion: </p>
            <img src={Start} alt="" className="w-3 sm:w-5 h-3 sm:h-5 mr-2"/>
            <img src={Start} alt="" className="w-3 h-3 sm:w-5 h-5 mr-2"/>
            <img src={Start} alt="" className="w-3 h-3 sm:w-5 h-5 mr-2"/>
            <img src={Start} alt="" className="w-3 h-3 sm:w-5 h-5 mr-2"/>
            <img src={Start1} alt="" className="w-3 h-3 sm:w-5 h-5 mr-2"/>
          </div>
          <div className="text-left mt-24 ml-16 mb-8">
            {usuario ? ( // Verifica si usuario no es undefined
              <>
                <h3 className=" text-3xl md:text-4xl font-bold mb-2 mt-4">{usuario.NombreApellido}</h3>
                <p className="my-1 text-shadow text-gray-500 text-xl  md:text-2xl">#{servicio ? servicio.Servicio : "Servicio no encontrado"}</p>
              </>
            ) : (
              <p>Usuario no encontrado</p>
            )}
          </div>
        </div>
      </div>
      <div >
        <div className=" items-center h-30 ml-12 mr-12 mt-12 mb-12">
          <div className="bg-[#00B0E4] bg-opacity-20 rounded-full inline-block py-2 px-4">
            <h3 className="text-2xl text-left font-bold">Descripcion: </h3>
          </div>
          <div className="w-90 h-50 bg-[#E5E7EB] mt-8 ml-6 mr-6 mb-8">
            <div className="text-center text-2xl">
              <p>
              {usuario ? (
                  usuario.Descripcion || "Sin descripción"
                ) : (
                  "Usuario no encontrado"
                )}
              </p>
            </div>
          </div>
        </div>
        <div className="w-90 bg-[#001A29] h-px ml-8 mr-8 mb-12"></div>
      </div>

    </>
  )

}

export default SeccionPerfil