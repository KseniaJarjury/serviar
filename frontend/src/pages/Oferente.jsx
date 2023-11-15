import React from 'react';
import Footer from "../components/Footer/Footer"
import Navbar from '../components/Navbar/Navbar';
import '../styles/Registrar.css';
import SeccionFoto from '../components/Oferente/seccionFoto/SeccionFoto';
import SeccionDescripcion from '../components/Oferente/seccionDescripcion/SeccionDescripcion';
import SeccionGaleria from '../components/Oferente/seccionGaleria/SeccionGaleria';
function Oferente() {
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

      {/* FOOTER  */}
      <Footer />

    </>
  )

}

export default Oferente