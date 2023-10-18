import React from 'react';
import Footer from "../components/Footer/Footer"
import Navbar from '../components/Navbar/Navbar';
import '../styles/Registrar.css';
import SeccionFoto from '../components/Perfil/seccionFoto/SeccionFoto';
import SeccionDescripcion from '../components/Perfil/seccionDescripcion/SeccionDescripcion';
import SeccionGaleria from '../components/Perfil/seccionGaleria/SeccionGaleria';

function Perfil() {
  return (
    <>

      {/* NAVBAR  */}
      <Navbar />

      {/* SECCION FOTO */}
      <SeccionFoto/>

      {/* SECCION DESCRIPCION */}
      <SeccionDescripcion/>

      {/* SECCION GALERIA */}
      <SeccionGaleria/>

      {/* SECCION UBICACION*/}


      {/* FOOTER  */}
      <Footer />

    </>
  )

}

export default Perfil