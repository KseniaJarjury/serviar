import React, { useState } from "react";
import axios from "axios"; // Importa la biblioteca axios
import FondoPerfil from "../../../assets/fondoPerfil.png";
import FotoPerfil from "../../../assets/fotoPerfil.png";
import Start from "../../../assets/start.png";
import Start1 from "../../../assets/start1.png";
import "./seccionFoto.css";

function SeccionPerfil() {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedImage(URL.createObjectURL(file));
      
       // Crea un objeto FormData para enviar la imagen al servidor
       const formData = new FormData();
       formData.append("image", file);
 
       // Realiza una solicitud POST para cargar la imagen al servidor
       axios.post("/cargar-imagen", formData)
         .then((response) => {
           // Maneja la respuesta del servidor (por ejemplo, muestra un mensaje de éxito)
           console.log("Imagen cargada con éxito:", response.data);
         })
         .catch((error) => {
           // Maneja errores (por ejemplo, muestra un mensaje de error)
           console.error("Error al cargar la imagen:", error);
         });

    }
  }

  return (
    <>
      <div className="cont-foto">
        <div className="contenedor-perfil">
          <img src={FondoPerfil} alt="" className="fondo-perfil" />
          <div className="contenedor-foto-perfil">
            <img src={selectedImage || FotoPerfil} alt="" className="foto-perfil" />
            <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            style={{ display: "none" }}
            id="fileInput"
          />
          
          </div>
          <label htmlFor="fileInput" className="upload-button">
            Cambiar Foto
          </label>

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
