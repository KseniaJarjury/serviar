import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import UseServicio from "../../../hooks/UseServicio";
import FondoPerfil from "../../../assets/fondoPerfil.png";
import FotoPerfil from "../../../assets/fotoPerfil.png";
import { FaLocationDot } from "react-icons/fa6";
import { MdAddAPhoto } from "react-icons/md";
import ModalEditarPerfil from "./ModalEditarPerfil";
import "./seccionEditar.css";
import axios from 'axios';

function SeccionEditar() {
  // Dirigirme a la parte superior de la vista
  window.scrollTo(0, 0);
  const [showModal, setShowModal] = useState(false);
  const { usuarios, servicios, localidades, provincias, setUsuario,setIconImg } = UseServicio();
  const { Id_Usuario } = useParams();
  const [selectedImage, setSelectedImage] = useState(null);
  const apiUrl =  import.meta.env.VITE_REACT_APP_BACKEND_URL;
  
  // Verificar si usuarios está definido y no está vacío
  useEffect(() => {
    if (usuarios && usuarios.length > 0) {
      const usuarioEncontrado = usuarios.find(
        (usuario) => usuario.Id_Usuario === Number.parseInt(Id_Usuario)
      );
      setUsuario(usuarioEncontrado);
      if(usuarioEncontrado?.Foto_Perfil){
        axios.get(`${apiUrl}/api/getImg/${usuarioEncontrado.Id_Usuario}`, { responseType: 'arraybuffer' })
          .then(response => {
            const blob = new Blob([response.data], { type: 'image/jpeg' });
            console.log(URL.createObjectURL(blob))
            setSelectedImage(URL.createObjectURL(blob));
          })
          .catch(error => {
              console.error('Error al obtener la imagen:', error);
            });
      }
    }
  }, [usuarios, Id_Usuario]);

  // Verificar si usuario está definido antes de intentar acceder a sus propiedades
  const usuario = usuarios.find(
    (usuario) => usuario.Id_Usuario === Number.parseInt(Id_Usuario)
  );

  const servicio = servicios.find(
    (servicio) => servicio.Id_Servicio === (usuario && usuario.Id_Servicio)
  );
  const localidadId = usuario && usuario.Id_Localidad;
  const localidad = localidadId
    ? localidades.find((l) => l.Id_Localidad === localidadId) || {}
    : {};

  const provinciaId = localidad && localidad.Id_Provincia;
  const provincia = provinciaId
    ? provincias.find((p) => p.Id_Provincia === provinciaId) || {}
    : {};
  // Función para actualizar el estado del usuario
  const updateUsuario = (updatedUsuario) => {
    setUsuario(updatedUsuario);
  };


  const handleImageUpload = async (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedImage(URL.createObjectURL(file));

      try {
        const datos = {
          Id_Usuario: Id_Usuario
        };
        const formData = new FormData();
        formData.append("image", file);
        formData.append('datos', JSON.stringify(datos)); // Agrega los datos en formato JSON
        //Guardo la imagen en una carpeta local temporalmente
        // fetch('http://localhost:3000/api/updateImgPerf',{
        //   method: 'POST',
        //   body: formData,
        // }).then(res => res.text())
        // .then(res => console.log(res))
        // .catch(err => console.error(err))

        const response = await axios.post(`${apiUrl}/api/updateImgPerf`, formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });
        console.log(response)
        setIconImg(URL.createObjectURL(file));
        // Maneja la respuesta del servidor (por ejemplo, muestra un mensaje de éxito)
        console.log("Imagen cargada con éxito");
      } catch (error) {
        // Maneja errores (por ejemplo, muestra un mensaje de error)
        console.error("Error al cargar la imagen:", error);
      }
    }
  };


  return (
    <>
      <main className="w-full">
        <section className="relative block" style={{ height: "400px" }}>
          <div>
            {usuario ? (
              <>
                <img
                  src={FondoPerfil}
                  alt=""
                  className="absolute top-0 w-full h-full bg-center bg-cover"
                />
                <span
                  id="blackOverlay"
                  className="w-full h-full absolute opacity-50 bg-black"
                ></span>
              </>
            ) : null}
            <div
              className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden"
              style={{ height: "70px" }}
            >
              <svg
                className="absolute bottom-0 overflow-hidden"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
                version="1.1"
                viewBox="0 0 2560 100"
                x="0"
                y="0"
              >
                <polygon
                  className="text-gray-300 fill-current"
                  points="2560 0 2560 100 0 100"
                ></polygon>
              </svg>
            </div>
          </div>
        </section>
        <section className="relative py-16 bg-gray-300">
          <div className="container mx-auto px-4">
            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64">
              <div className="px-6">
                <div className="flex flex-wrap justify-center">
                  <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
                    <div className="flex justify-center relative">
                      <label
                        htmlFor="fileInput"
                        className="text-2xl text-black-600 cursor-pointer"
                      >
                      <img
                        alt="..."
                        src={selectedImage ? selectedImage : FotoPerfil}
                        className="shadow-xl rounded-full h-auto w-auto align-middle border-none absolute -m-16 -ml-16 lg:-ml-[8rem]"
                        style={{ maxWidth: "200px", height:"auto", aspectRatio: "initial" }}
                      />
                        <input
                          type="file"
                          accept="image/*"
                          style={{ display: 'none' }}
                          id="fileInput"
                          name="image"
                          onChange={handleImageUpload}
                        />
                    </label>
                    </div>
                  </div>
                  <div className="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center">
                    <div className=" flex justify-center  lg:py-6 lg:px-3 lg:mt-32 lg:mt-0 lg:mr-16">
                      <button
                        className="mt-10 lg:mt-0 ml-18 lg:ml-20 bg-[#00B0E4] active:bg-[#001A29] uppercase text-white font-bold hover:shadow-md shadow text-lg px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1"
                        type="button"
                        onClick={() => setShowModal(true)}
                        style={{ transition: "all .15s ease" }}
                      >
                        Editar Perfil
                      </button>
                      <ModalEditarPerfil
                        showModal={showModal}
                        setShowModal={setShowModal}
                        localidad={localidad}
                        provincia={provincia}
                        servicio={servicio}
                        usuario={usuario}
                        setUsuario={setUsuario}
                        updateUsuario={updateUsuario}
                      />
                    </div>
                  </div>
                  <div className="w-full lg:w-4/12 px-4 lg:order-1">
                    <div className="flex justify-center py-4 lg:pt-4 pt-8">
                      <div className="mr-4 p-3 text-center">
                        {/* <span className="text-xl font-bold block uppercase tracking-wide text-gray-700">
                          10
                        </span>
                        <span className="text-sm md:text-lg text-gray-500">
                          Calificacion
                        </span>
                      </div>
                      <div className="lg:mr-4 p-3 text-center">
                        <span className="text-xl font-bold block uppercase tracking-wide text-gray-700">
                          89
                        </span>
                        <span className="text-sm md:text-lg text-gray-500">
                          Comentarios
                        </span> */}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-center mt-12 lg:mt-16 lg:mr-16">
                  <h3 className="text-4xl font-semibold leading-normal mb-2 text-gray-800 mb-2">
                    {usuario ? usuario.NombreApellido : "Usuario no encontrado"}
                  </h3>
                  <p className="text-shadow text-gray-500 text-lg mb-2 md:text-xl">
                    #{servicio ? servicio.Servicio : "Servicio no encontrado"}
                  </p>
                  <div className="flex justify-center text-sm leading-normal mt-0 mb-2 text-gray-500 font-bold uppercase">
                    <FaLocationDot className="mr-2 mb-2 text-lg text-gray-500" />
                    {localidad && provincia
                      ? `${localidad.Localidad}, ${provincia.Provincia}`
                      : "zona no encontrada"}
                  </div>
                  <div className="mb-2 text-xl md:text-2xl text-gray-700 mt-10">
                    <i className="fas fa-briefcase mr-2 text-lg text-gray-500"></i>
                    {servicio ? servicio.Servicio : "Servicio no encontrado"}
                  </div>
                </div>
                <div className="mt-10 py-10 border-t border-gray-300 text-center">
                  <div className="flex flex-wrap justify-center">
                    <div className="w-full lg:w-9/12 px-4">
                      <p className="mb-4 text-xl md:text-2xl leading-relaxed text-gray-800">
                        {usuario ? usuario.Descripcion : "Usuario no encontrado"}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main >
    </>
  );
}


export default SeccionEditar;
