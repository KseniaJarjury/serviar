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
  const { usuarios, center, localidades, zoom,usuariosFiltrados } = UseServicio();
  const hayDatos = usuarios.length > 0;
  const API_KEY = import.meta.env.VITE_REACT_APP_GOOGLE_MAPS_API_KEY;
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: API_KEY,
  });

  const [selectedUsuario, setSelectedUsuario] = useState(null);
  const [selectedLatLng, setSelectedLatLng] = useState({lat:null,lng:null});

  function setUserInfo(usuario, localidad){
    setSelectedUsuario(usuario);
    setSelectedLatLng({lat: parseFloat(localidad.LatitudL),lng:parseFloat(localidad.LongitudL)})
  }

  if (loadError) return <div>Error al cargar el mapa</div>;
  if (!isLoaded) return <div>Cargando...</div>;

  return (
    <>
      {hayDatos ? (
        <GoogleMap zoom={zoom} center={center} mapContainerClassName="h-screen w-full mb-20">
          {usuariosFiltrados.map((usuario) => {
            const localidad = localidades.find(
              (loc) => loc.Id_Localidad === usuario.Id_Localidad
              );
            return(<Marcador
              key={usuario.Id_Usuario}
              position={{
                lat: parseFloat(localidad.LatitudL),
                lng: parseFloat(localidad.LongitudL),
              }}
              icon={{
                url: iconMaps,
                scaledSize: new window.google.maps.Size(80, 80),
              }}
              onClick={() => setUserInfo(usuario,localidad)}
            />
          )})}

          {selectedUsuario && (
            <InfoWindow
              position={{
                lat: parseFloat(selectedLatLng.lat),
                lng: parseFloat(selectedLatLng.lng),
              }}
              onCloseClick={() => setSelectedUsuario(null)}
            >
              <div className="w-50">
                <h2 className="text-sm font-semibold mb-5">{selectedUsuario.NombreApellido}</h2>
                <img src={foto} alt="imagen" className="w-50 h-32" />
                <Link to={`/perfil/${selectedUsuario.Id_Usuario}`}>
                  <p className="w-24 p-2 m-auto mt-3 border-solid border-2 border-[#00729A] hover:border-[#1f4d5e] text-center font-medium  rounded-lg text-[#00729A] hover:text-[#1f4d5e] duration-100">Ver detalles</p>
                </Link>
              </div>
            </InfoWindow>
          )}
        </GoogleMap>
      ) : (
        <div>
          <h1 className="text-center m-8 text-2xl text-[#00729A]">
            No se encuentran Servicios
          </h1>
          <GoogleMap zoom={zoom} center={center} mapContainerClassName="h-screen w-full">
            <Marcador
              position={center}
              icon={{
                url: iconMaps,
                scaledSize: new window.google.maps.Size(80, 80),
              }}
            />
          </GoogleMap>
        </div>
      )}
    </>
  );
}

export default Mapa;
