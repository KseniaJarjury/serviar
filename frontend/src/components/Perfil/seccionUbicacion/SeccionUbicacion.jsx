import React, { useState } from "react"
import { GoogleMap, MarkerF as Marcador } from "@react-google-maps/api";
import iconMaps from "./../../../assets/ubilogo2.png";
import UseServicio from "../../../hooks/UseServicio";
import { useParams } from "react-router-dom";

function SeccionUbicacion() {

    const { usuarios, localidades, provincias } = UseServicio();

    let { Id_Usuario } = useParams();
    const usuario = usuarios.find(
        (usuario) => usuario.Id_Usuario === Number.parseInt(Id_Usuario)
    );
    // Buscar localidad relacionada
    const localidad = localidades.find(
        (loc) => loc.Id_Localidad === usuario.Id_Localidad
    );

    // Buscar provincia relacionada
    const provincia = provincias.find(
        (pro) => pro.Id_Provincia === localidad.Id_Provincia
    );
    const center = { lat: -31.423746, lng: -63.373935 };
    return (
        <>
            <div className="flex flex-column md:flex-row">
                <div className="w-full mb-24 ml-10 mr-10 md:w-1/2">
                    <div className="bg-[#00B0E4] bg-opacity-20 rounded-full inline-block py-2 px-4 ml-8 mb-2">
                        <h3 className="subtitulo text-left ">Ubicacion: </h3>
                    </div>
                    <p className="text-xl md:text-2xl mt-6 mb-6 ml-12">{localidad && provincia
                        ? `${localidad.Localidad}, ${provincia.Provincia}`
                        : "zona no encontrada"}</p>
                    <GoogleMap
                        zoom={4}
                        center={center}
                        mapContainerStyle={{ height: '320px', width: '100%' }}
                    >
                        <Marcador
                            key={usuario.Id_Usuario}
                            position={{
                                lat: parseFloat(usuario.Latitud),
                                lng: parseFloat(usuario.Longitud),
                            }}
                            icon={{
                                url: iconMaps,
                                scaledSize: new window.google.maps.Size(80, 80),
                            }}
                        />
                    </GoogleMap>
                </div>

                <div className="w-full md:w-1/2 flex flex-col md:flex-row items-center justify-center mt-6 md:mt-0">
                    <div className="mb-14 md:mr-4">
                        <button className="bg-blue-500 text-white text-2xl px-16 py-4 rounded-lg">
                            Contactar
                        </button>
                    </div>
                    <div>
                        <button className="bg-blue-500 text-white text-2xl px-16 py-4 rounded-lg">Calificar</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default SeccionUbicacion;