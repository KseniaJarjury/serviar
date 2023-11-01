import React, { useState, useEffect } from "react";
import fotoPerfil from "./../../../assets/fotoPerfil.png";
import Start from "./../../../assets/start.png";
import Start1 from "./../../../assets/start1.png";
import UseServicio from "../../../hooks/UseServicio";
import { Link } from "react-router-dom";
function ListaServicio() {
    const { datosUsuariosFiltrados } = UseServicio();

    const datos = datosUsuariosFiltrados.length > 0;
    const [imagenes, setImagenes] = useState([]);

    useEffect(() => {
        // Obtener las imágenes de los usuarios
        datosUsuariosFiltrados.forEach(async (usuario) => {
            try {
                const response = await fetch(`/imagen/${usuario.Id_Usuario}`);
                if (response.ok) {
                    const imagenData = await response.blob();
                    setImagenes((prev) => ({ ...prev, [usuario.Id_Usuario]: URL.createObjectURL(imagenData) }));
                }
            } catch (error) {
                console.error('Error al obtener la imagen:', error);
            }
        });
    }, [datosUsuariosFiltrados]);


    return (
        <section className="w-full mb-24">
            <h1 className="text-[#00405B] text-3xl  m-5 font-medium lg:ml-20 ml-5 mb-6">
                {/* {datosUsuariosFiltrados.length > 0 ? `Servicios de ${servicios[0].Servicio}` : `Servicios en esta zona`} */}
                Servicios en esta zona
            </h1>

            {datos ? (
                datosUsuariosFiltrados.map((usuario) => (
                    <div className="w-[75%] h-auto m-auto lg:h-80 shadow-md shadow-gray-700  bg-[#001A29] rounded-md flex flex-col lg:flex-row justify-around items-center">
                        <div key={usuario.Id_Usuario}>
                        {/* IMAGE  */}
                        <div className="p-6 w-90">
                            {imagenes[usuario.Id_Usuario] ? (
                                <img
                                    src={fotoPerfil}
                                    alt={"Imagen"}
                                    className="w-90 h-72 rounded-md"
                                />
                            ) : (
                                <div>Imagen no disponible</div>
                            )}
                        </div>
                        </div>
                        {/* INFORMACION  */}
                        <div className="w-[90%] h-auto m-auto mt-5 mb-5 lg:h-80 bg-[#D4D4D5] rounded-md flex flex-col lg:flex-row justify-around items-center">
                            <div className="flex flex-col w-96 lg:p-0 p-10">
                                <h3 className="text-black text-left text-2xl font-bold mt-12">
                                    {usuario.NombreApellido}
                                </h3>
                                <div className="contenedor-info flex justify-start ">
                                    <p>Reputacion: </p>
                                    <img src={Start} alt="" />
                                    <img src={Start} alt="" />
                                    <img src={Start} alt="" />
                                    <img src={Start} alt="" />
                                    <img src={Start1} alt="" />
                                </div>

                                <p>Monte Grande, Buenos Aires</p>

                                <p className="text-black text-left mt-5 text-sm font-medium w-full h-32 overflow-auto">
                                    {usuario.Descripcion}
                                </p>
                                <Link className="m-auto" to={`/perfil/${usuario.Id_Usuario}`}>
                                    <button className="mb-6 w-32 h-10 bg-[#00729A] hover:bg-[#165870] duration-200 text-white rounded-lg">
                                        VER
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                ))
            ) : (
                <div>
                    <h1 className="text-center text-xl m-5 text-[#00729A]">No hay servicios en esta zona</h1>
                </div>
            )
            }
        </section>
    );
}

export default ListaServicio;