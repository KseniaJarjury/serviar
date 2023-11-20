import React, { useState } from "react";
import axios from "axios";
import FondoPerfil from "../../../assets/fondoPerfil.png";
import FotoPerfil from "../../../assets/fotoPerfil.png";
 import "./seccionFoto.css";

function SeccionPerfil() {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageUpload = (event) => {
    console.log("Botón de carga de imagen presionado");
    const file = event.target.files[0];

    if (file) {
      // Actualiza la vista previa de la imagen
      setSelectedImage(URL.createObjectURL(file));

      // Crea un objeto FormData para enviar el archivo al servidor
      const formData = new FormData();
      formData.append("image", file);

      // Realiza una solicitud POST para cargar la imagen al servidor
      axios.post(`/usuario/perfil/${usuarioId}`, formData)
        .then((response) => {
          // Maneja la respuesta del servidor (por ejemplo, muestra un mensaje de éxito)
          console.log("Imagen cargada con éxito:", response.data);
        })
        .catch((error) => {
          // Maneja errores (por ejemplo, muestra un mensaje de error)
          console.error("Error al cargar la imagen:", error);
        });
    }
  };

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
              style={{ display: "block" }}
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
  );
}

export default SeccionPerfil;
