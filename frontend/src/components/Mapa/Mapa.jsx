import "./Mapa.css"
import {
  GoogleMap,
  useLoadScript,
  MarkerF as Marcador,
  InfoWindow,
} from "@react-google-maps/api";
import iconMaps from "../../assets/ubilogo2.png";
import UseServicio from "../../hooks/UseServicio";
import { useState } from "react";
import foto from "../../assets/fotoPerfil.png";
import { Link } from "react-router-dom";

function Mapa() {
  const { datosUsuariosFiltrados } = UseServicio();
  console.log(datosUsuariosFiltrados);
  const hayDatos = datosUsuariosFiltrados.length > 0;
  const API_KEY = import.meta.env.VITE_REACT_APP_GOOGLE_MAPS_API_KEY;
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: API_KEY,
  });

  const [selectedUsuario, setSelectedUsuario] = useState(null);
  if (!isLoaded) return <div>Loading...</div>;

  const center = { lat: -34.612181, lng: -58.441959 };

  return (
    <>
      {hayDatos ? (
        <>
          <GoogleMap
            zoom={12}
            center={center}
            mapContainerClassName="h-screen w-full"
          >
            {datosUsuariosFiltrados.map((usuario) => (
              <Marcador
                key={usuario.Id_Usuario}
                position={{
                  lat: usuario.Latitud,
                  lng: usuario.Longitud,
                }}
                icon={{
                  url: iconMaps,
                  scaledSize: new window.google.maps.Size(70, 70),
                }}
                onClick={() => setSelectedUsuario(usuario)}
              />
            ))}

            {selectedUsuario && (
              <InfoWindow
                position={{
                  lat: selectedUsuario.Latitud,
                  lng: selectedUsuario.Longitud,
                }}
                onCloseClick={() => setSelectedUsuario(null)}
              >
                <div className="w-44">
                  <h2 className="font-semibold mb-5">{selectedUsuario.NombreApellido}</h2>
                  <img
                    src={foto}
                    alt="imagen"
                    className="w-full h-32"
                  />

                  <Link to={`/perfil/${selectedUsuario.Id_Usuario}`} >
                    <p className="w-24 p-2 m-auto mt-3 border-solid border-2 border-[#00729A] hover:border-[#1f4d5e] text-center font-medium  rounded-lg text-[#00729A] hover:text-[#1f4d5e] duration-100">Ver detalles</p>
                  </Link>
                </div>
              </InfoWindow>
            )}
          </GoogleMap>
        </>
      ) : (
        <div>
          <h1 className="text-center m-8 text-2xl text-[#00729A]">
            No se encuentran Servicios
          </h1>

          <GoogleMap
            zoom={12}
            center={center}
            mapContainerClassName="h-screen w-full"
          >
            <Marcador
              position={center}
              icon={{
                url: iconMaps,
                scaledSize: new window.google.maps.Size(70, 70),
              }}
            />
          </GoogleMap>
        </div>
      )}
    </>
  );
}

export default Mapa;
