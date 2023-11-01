import React, { useState, useEffect } from "react";
import "./seccionDescripcion.css";
import circulo from "./../../../assets/circulo.png";

function SeccionDescripcion() {
  const [isEditing, setIsEditing] = useState(false);
  const [descripcion, setDescripcion] = useState("Hola");

  // Función para habilitar la edición
  const startEditing = () => {
    setIsEditing(true);
  };

  // Función para guardar los cambios en la base de datos
  const saveChanges = () => {
    // Aquí debes enviar 'descripcion' al servidor para guardarlo en la base de datos.
    // Asegúrate de implementar la lógica del servidor para actualizar la descripción del usuario.

    // Después de guardar, desactiva la edición.
    setIsEditing(false);
  };

  // Escucha cambios en la descripción y guarda automáticamente (puedes ajustar esto según tus necesidades)
  useEffect(() => {
    if (!isEditing) {
      saveChanges();
    }
  }, [descripcion]);

  return (
    <>
      <div className="contenedor-descrip">
        <div className=" items-center h-20 ml-12 mt-4 mb-12">
          <div className="bg-[#00B0E4] bg-opacity-20 rounded-full inline-block py-2 px-4">
            <h3 className="subtitulo text-left">Descripcion: </h3>
          </div>
          <div className="contenedor-descrip-perfil">
            {isEditing ? (
              <textarea
                value={descripcion}
                onChange={(e) => setDescripcion(e.target.value)}
              />
            ) : (
              <div>
                <p className="descrip-perfil">{descripcion}</p>
              </div>
            )}
          </div>
        </div>
        {isEditing ? (
          <div className="flex justify-center mb-24">
            <button className="btn-buscar bg-blue-500 text-white px-4 py-2 rounded-lg" onClick={saveChanges}>Guardar</button>
          </div>
        ) : (
          <div div className="flex justify-center mb-24">
            <button className="btn-buscar bg-blue-500 text-white px-4 py-2 rounded-lg" onClick={startEditing}>Editar</button>
          </div>
        )}
       
      </div>
    </>
  );
}

export default SeccionDescripcion;
