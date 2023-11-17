import React from "react";
import fotoPerfil from "./../../../assets/fotoPerfil.png";
import Start from "./../../../assets/start.png";
import Start1 from "./../../../assets/start1.png";
import UseServicio from "../../../hooks/UseServicio";
import { Link, useParams } from "react-router-dom";
import { useEffect } from "react";

function ListaServicio() {
    window.scrollTo(0, 0);

    const { usuariosFiltrados, setUsuariosFiltrados ,localidades, provincias } = UseServicio();
    

    return (
        <section className="w-full mb-24">
            <h1 className="text-[#00405B] text-3xl m-5 font-medium lg:ml-20 ml-5 mb-6">
                Servicios en esta zona
            </h1>

            {(usuariosFiltrados &&  usuariosFiltrados.length > 0) ? (
                usuariosFiltrados.map((usuario) => {
                    // Buscar localidad relacionada
                    const localidad = localidades.find(
                        (loc) => loc.Id_Localidad === usuario.Id_Localidad
                    );

                    // Buscar provincia relacionada
                    const provincia = provincias.find(
                        (pro) => pro.Id_Provincia === localidad.Id_Provincia
                    );

                    // Buscar servicio relacionado
                    // const servicio = servicios.find(
                    //     (serv) => serv.Id_Servicio === usuario.Id_Servicio
                    // );

                    return (
                        <div
                            key={usuario.Id_Usuario}
                            className="w-[80%] h-auto m-auto mb-20 lg:h-80 shadow-md shadow-gray-700 bg-[#001A29] rounded-md flex flex-col lg:flex-row justify-around items-center"
                        >
                            <div>
                                {/* IMAGE */}
                                <div className="p-6 w-90">
                                    <img
                                        src={fotoPerfil}
                                        alt={"Imagen"}
                                        className="w-90 h-72 rounded-md"
                                    />
                                </div>
                            </div>
                            {/* INFORMACION */}
                            <div className="w-[90%] h-auto m-auto mt-5 mb-5 lg:h-80 bg-[#D4D4D5] rounded-md flex flex-col lg:flex-row justify-around items-center">
                                <div className="flex flex-col w-[85%] h-[90%] gap-2 lg:p-0 p-10">
                                    <h3 className="text-black text-left text-2xl font-bold mt-4">
                                        {usuario.NombreApellido}
                                    </h3>
                                    <div className="contenedor-info flex justify-start ">
                                        <p>Reputación: </p>
                                        <img src={Start} alt="" />
                                        <img src={Start} alt="" />
                                        <img src={Start} alt="" />
                                        <img src={Start} alt="" />
                                        <img src={Start1} alt="" />
                                    </div>
                                    <p>
                                        {localidad && provincia
                                            ? `${localidad.Localidad}, ${provincia.Provincia}`
                                            : "zona no encontrada"}
                                    </p>
                                    <p className="text-black text-left mt-5 text-sm font-medium w-full h-32 overflow-auto">
                                        {usuario.Descripcion}
                                    </p>
                                    <Link className="m-auto" to={`/perfil/${usuario.Id_Usuario}`}>
                                        <button className="mb-8 w-32 h-10 bg-[#00729A] hover:bg-[#165870] duration-200 text-white rounded-lg">
                                            VER
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    );
                })
            ) : (
                <div>
                    <h1 className="text-center text-xl m-5 text-[#00729A]">
                        No hay servicios en esta zona
                    </h1>
                </div>
            )}
        </section>
    );
}

export default ListaServicio;
