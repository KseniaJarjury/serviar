import React from 'react';
import Footer from "../components/Footer/Footer"
import Navbar from '../components/Navbar/Navbar';
import '../styles/Registrar.css';
import SeccionPerfil from '../components/Perfil/SeccionPerfil';

function Perfil() {
  return (
    <>

      {/* NAVBAR  */}
      <Navbar />

      {/* SECCION PERFIL */}
      <SeccionPerfil/>


      {/* FOOTER  */}
      <Footer />

    </>
  )

}

export default Perfil