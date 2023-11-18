import React, { useState } from "react";
import { GoogleMap, useLoadScript, Marker as Marcador } from "@react-google-maps/api";
import iconMaps from "./../../../assets/ubilogo2.png";
import UseServicio from "../../../hooks/UseServicio";
import ModalCalificar from "../modals/ModalCalificar";
import { useParams } from "react-router-dom";
import ModalContactar from "../modals/ModalContactar";

function SeccionUbicacion() {
    window.scrollTo(0, 0);
    const [showModal, setShowModal] = useState(false);
    const [showModalContactar, setShowModalContactar] = useState(false);

    const { usuarios, localidades, provincias } = UseServicio();

    let { Id_Usuario } = useParams();
    const usuario = usuarios.find(
        (usuario) => usuario.Id_Usuario === Number.parseInt(Id_Usuario)
    );

    const localidad = usuario && localidades.find((loc) => loc.Id_Localidad === usuario.Id_Localidad);
    const provincia = localidad && provincias.find((pro) => pro.Id_Provincia === localidad.Id_Provincia);

    // Acceder a las propiedades de localidad de manera segura
    const latitudL = localidad ? parseFloat(localidad.LatitudL) : 0;
    const longitudL = localidad ? parseFloat(localidad.LongitudL) : 0;

    const API_KEY = import.meta.env.VITE_REACT_APP_GOOGLE_MAPS_API_KEY;
    const { isLoaded, loadError } = useLoadScript({
        googleMapsApiKey: API_KEY,
    });

    const center = { lat: latitudL, lng: longitudL };

    if (loadError) return <div>Error al cargar el mapa</div>;
    if (!isLoaded) return <div>Cargando...</div>;

    return (
        <>
            <div className="flex flex-col lg:flex-row">
                {/* Sección de mapa y ubicación */}
                <div className="w-auto lg:w-1/2 mb-12 md:ml-10 md:mr-10">
                    <div className="bg-[#00B0E4] bg-opacity-20 rounded-full inline-block py-2 px-4 ml-2 md:ml-8 mb-2">
                        <h3 className="text-[#001A29] text-2xl font-bold md:text-3xl text-left">Ubicacion: </h3>
                    </div>
                    <p className="text-2xl  mt-6 mb-6 ml-4 md:ml-12">{localidad && provincia
                        ? `${localidad.Localidad}, ${provincia.Provincia}`
                        : "zona no encontrada"}</p>
                    <GoogleMap
                        zoom={12}
                        center={center}
                        mapContainerStyle={{ height: '320px', width: '100%' }}
                    >
                        {usuarios.map((usuario) => {
                            const localidad = localidades.find(
                                (loc) => loc.Id_Localidad === usuario.Id_Localidad
                            );

                            // Agrega una verificación de la existencia de localidad
                            if (localidad) {
                                return (
                                    <Marcador
                                        key={usuario.Id_Usuario}
                                        position={{
                                            lat: parseFloat(localidad.LatitudL),
                                            lng: parseFloat(localidad.LongitudL),
                                        }}
                                        icon={{
                                            url: iconMaps,
                                            scaledSize: new window.google.maps.Size(80, 80),
                                        }}
                                    />
                                );
                            }

                            return null; // Omite este usuario si no se encuentra localidad
                        })}
                    </GoogleMap>
                </div>

                {/* Sección de botones */}
                <div className="w-full lg:w-1/2 flex flex-col items-center justify-center mt-6 space-y-4">
                    <div className="mb-4">
                        <button className="bg-blue-500 text-white text-2xl hover:shadow-md shadow px-10 py-6 rounded-lg outline-none focus:outline-none"
                            onClick={() => setShowModalContactar(true)}
                            style={{ transition: "all .15s ease" }}
                        >
                            Contactar
                        </button>
                        <ModalContactar
                            showModalContactar={showModalContactar}
                            setShowModalContactar={setShowModalContactar}
                        />
                    </div>
                    <div>
                        <button className="bg-blue-500 active:bg-[#001A29] text-white text-2xl px-12 py-6 rounded-lg outline-none focus:outline-none" type="button"
                            onClick={() => setShowModal(true)}
                            style={{ transition: "all .15s ease" }}
                        >
                            Calificar
                        </button>
                        <ModalCalificar
                            showModal={showModal}
                            setShowModal={setShowModal}
                        />
                    </div>
                </div>
            </div>
            <div className="mb-16"></div>
        </>
    );
}

export default SeccionUbicacion;
