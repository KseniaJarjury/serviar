import React, {useEffect} from 'react';
import Footer from "../components/Footer/Footer"
import Navbar from '../components/Navbar/Navbar';
import UseServicio from '../hooks/UseServicio';
import SeccionGaleria from '../components/Oferente/seccionGaleria/SeccionGaleria';
import SeccionOferente from '../components/Oferente/seccionEditar/SeccionEditar';
function Oferente() {
  const { setUsuarios,  setUsuariosFiltrados} = UseServicio();
  useEffect (() =>{
    fetch('/api/usuarios')
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
      <SeccionOferente />

      {/* SECCION GALERIA */}
      <SeccionGaleria />

      {/* FOOTER  */}
      <Footer />

    </>
  )

}

export default Oferente