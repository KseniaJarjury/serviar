import React, { useState, useEffect } from "react";
import FondoPerfil from "../../../assets/fondoPerfil.png";
import FotoPerfil from "../../../assets/fotoPerfil.png";
import Start from "../../../assets/start.png";
import Start1 from "../../../assets/start1.png";
import "./seccionFoto.css"
import { useParams } from "react-router-dom";
import UseServicio from "../../../hooks/UseServicio";
import axios from "axios";
import "./seccionFoto.css";


function SeccionPerfil() {
  const [profileImageURL, setProfileImageURL] = useState('');

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
  const obtenerURLImagenUsuario = async () => {
    try {
      const storedProfileImageURL = localStorage.getItem('profileImageURL');
  
      if (storedProfileImageURL) {
        console.log('URL almacenada en localStorage:', storedProfileImageURL);
        setProfileImageURL(storedProfileImageURL);
      } else {
        const response = await axios.get(`http://localhost:3000/api/usuario/perfil/${Id_Usuario}`);
        if (response && response.data) {
          const imageURL = response.data.profileImageURL;
          console.log('Nueva URL obtenida:', imageURL);
          setProfileImageURL(imageURL || FotoPerfil); // Si no hay imagen, establece profileImageURL en foto predeterminada
          localStorage.setItem('profileImageURL', imageURL || FotoPerfil);
          console.log('profileImageURL después de la actualización:', imageURL);
        }
        console.log('Respuesta completa:', response);
      }
    } catch (error) {
      console.error('Error al obtener la URL de la imagen:', error);
    }
  };

useEffect(() => {
  console.log('Entrando en useEffect');
  obtenerURLImagenUsuario();
}, [Id_Usuario]);


  
//   // const cloudinaryBaseUrl = "https://res.cloudinary.com/dkf1japx9/image/upload/";
//   const cloudinaryCloudName = 'dkf1japx9'; // Reemplaza esto con tu cloud_name
//   const cloudinaryVersion = 'v1700575199'; // Reemplaza esto con la versión específica o etiqueta temporal
//   const cloudinaryPath = `serviar/usuarios/${Id_Usuario}/perfil`; // Estructura de carpetas en Cloudinary
  
// const imageURL = profileImageURL ? `https://res.cloudinary.com/${cloudinaryCloudName}/image/upload/${cloudinaryVersion}/${cloudinaryPath}/${profileImageURL}` : FotoPerfil;
  
  return (
    <>
      <div className="cont-foto text-[#001A29]">
        <div className="contenedor-perfil">
          <img src={FondoPerfil} alt="" className="fondo-perfil" />
          <div className="contenedor-foto-perfil">
          <img
              alt="..."
              src={profileImageURL}
              className="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-18 lg:-ml-24"
              style={{ maxWidth: "250px"}}
            />
            </div>
          <div className="flex flex-row justify-end items-center ml-16 md:mr-12">
            <p className="m-2 text-xl md:text-2xl">Reputacion: </p>
            <img src={Start} alt="" className="w-3 md:w-5 h-3 md:h-5 mr-2" />
            <img src={Start} alt="" className="w-3 md:w-5 h-3 md:h-5 mr-2" />
            <img src={Start} alt="" className="w-3 md:w-5 h-3 md:h-5 mr-2" />
            <img src={Start} alt="" className="w-3 md:w-5 h-3 md:h-5 mr-2" />
            <img src={Start1} alt="" className="w-3 md:w-5 h-3 md:h-5 mr-2" />
          </div>
          <div className="text-left ml-4 md:ml-16 -mb-22">
            {usuario ? ( // Verifica si usuario no es undefined
              <>
                <h3 className=" text-3xl md:text-4xl font-bold ">{usuario.NombreApellido}</h3>
                <p className="my-1 text-shadow text-gray-500 text-xl  md:text-2xl">#{servicio ? servicio.Servicio : "Servicio no encontrado"}</p>
              </>
            ) : (
              <p>Usuario no encontrado</p>
            )}
          </div>
        </div>
      </div>
      <div >
        <div className=" items-center h-30 mt-16 md:ml-12">
          <div className="bg-[#00B0E4] bg-opacity-20 rounded-full inline-block py-2 px-4">
            <h3 className="text-[#001A29] text-2xl font-bold md:text-3xl text-left">Descripcion: </h3>
          </div>
          <div className="w-90 h-50 bg-[#E5E7EB] mt-8 ml-6 mr-6 mb-8">
            <div className="text-center text-xl md:text-2xl">
              <p>
                {usuario && usuario.Descripcion ? usuario.Descripcion : "Descripción no disponible"}

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