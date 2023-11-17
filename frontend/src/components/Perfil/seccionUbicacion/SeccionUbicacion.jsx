import React, { useState } from "react"
import { GoogleMap, MarkerF as Marcador } from "@react-google-maps/api";
import iconMaps from "./../../../assets/ubilogo2.png";
import UseServicio from "../../../hooks/UseServicio";
import ModalCalificar from "../modals/ModalCalificar";
import { useParams } from "react-router-dom";

function SeccionUbicacion() {
    window.scrollTo(0, 0);
    const [showModal, setShowModal] = useState(false);

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


    // Verificar si localidad es undefined antes de acceder a sus propiedades
    if (!localidad) {
        console.error("No se encontró la localidad para el usuario especificado.");
        return null;
    }

    // Acceder a las propiedades de localidad de manera segura
    const latitudL = parseFloat(localidad.LatitudL);
    const longitudL = parseFloat(localidad.LongitudL);
    const center = { lat: latitudL, lng: longitudL };
    return (
        <>
            <div className="flex flex-col lg:flex-row">
                {/* Sección de mapa y ubicación */}
                <div className="w-auto md:w-full lg:w-1/2 mb-12 md:ml-10 md:mr-10">
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
                        <Marcador
                            key={usuario.Id_Usuario}
                            position={{
                                lat: latitudL,
                                lng: longitudL,
                            }}
                            icon={{
                                url: iconMaps,
                                scaledSize: new window.google.maps.Size(80, 80),
                            }}
                        />
                    </GoogleMap>
                </div>

                {/* Sección de botones */}
                <div className="w-full lg:w-1/2 flex flex-col  items-center justify-center mt-6 space-y-4">
                    <div className="mb-4">
                        <button className="bg-blue-500 text-white text-2xl  hover:shadow-md shadow px-12 py-6 rounded-lg outline-none focus:outline-none">
                            Contactar
                        </button>
                    </div>
                    <div>
                        <button className="bg-blue-500 active:bg-[#001A29] text-white text-2xl px-12 py-6 rounded-lg" type="button"
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