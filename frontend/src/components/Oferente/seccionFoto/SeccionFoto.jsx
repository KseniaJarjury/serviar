import React, { useState } from "react";
import axios from "axios"; // Importa la biblioteca axios
import FondoPerfil from "../../../assets/fondoPerfil.png";
import FotoPerfil from "../../../assets/fotoPerfil.png";
import Start from "../../../assets/start.png";
import Start1 from "../../../assets/start1.png";
import "./seccionFoto.css";

function SeccionFoto() {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageUpload = async (event) => {
    const file = event.target.files[0];

    if (file) {
      setSelectedImage(URL.createObjectURL(file));

      try {
        const formData = new FormData();
        formData.append("image", file);

        const response = await axios.post("api/updateImgPerf", formData);

        // Maneja la respuesta del servidor (por ejemplo, muestra un mensaje de éxito)
        console.log("Imagen cargada con éxito:", response.data);
      } catch (error) {
        // Maneja errores (por ejemplo, muestra un mensaje de error)
        console.error("Error al cargar la imagen:", error);
      }
    }
  };

  return (
    <>
      <div className="cont-foto">
        <div className="contenedor-perfil">
          <img src={FondoPerfil} alt="" className="fondo-perfil" />
          <div className="contenedor-foto-perfil">
            <input
              type="file"
              accept="image/*"
              style={{ display: "none" }}
              id="fileInput"
              onChange={handleImageUpload}
            />
            <label htmlFor="fileInput" className="upload-button">
              <img src={selectedImage || FotoPerfil} alt="" className="foto-perfil" />
            </label>
          </div>
          
          <div className="contenedor-nombre">
            <h3>Martin Romero</h3>
            <p>#ELECTRICISTA</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default SeccionFoto;