import React, {useEffect} from 'react';
import Footer from "../components/Footer/Footer"
import Navbar from '../components/Navbar/Navbar';
import '../styles/Registrar.css';
import SeccionFoto from '../components/Perfil/seccionFoto/SeccionFoto';
import SeccionGaleria from '../components/Perfil/seccionGaleria/SeccionGaleria';
import SeccionUbicacion from '../components/Perfil/seccionUbicacion/SeccionUbicacion';
import UseServicio from '../hooks/UseServicio';

function Perfil() {
  const { setUsuarios,  setUsuariosFiltrados} = UseServicio();
  const apiUrl =  import.meta.env.VITE_REACT_APP_BACKEND_URL;
  useEffect (() =>{
    fetch(`${apiUrl}/api/usuarios`)
            .then((response) => response.json())
            .then((responseData) => {
                setUsuarios(responseData);
                setUsuariosFiltrados(responseData);
            })
            .catch((error) => console.error(error));
  }, []);
  return (
    <>

      {/* NAVBAR  */}
      <Navbar />

      {/* SECCION FOTO */}
      <SeccionFoto/>

      {/* SECCION GALERIA */}
      <SeccionGaleria/>

      {/* SECCION UBICACION */}
      <SeccionUbicacion/>

      {/* FOOTER  */}
      <Footer />

    </>
  )

}

export default Perfil