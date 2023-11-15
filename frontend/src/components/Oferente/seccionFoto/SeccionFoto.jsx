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
              <h3>Martin Romero</h3>
              <p>#ELECTRICISTA</p>
          </div> 
        </div>
      </div>
    </>
  )

}

export default SeccionPerfil