import Footer from "../components/Footer/Footer";
import SeccionFiltro from "../components/Categoria/seccionFiltro/seccionFiltro";
import Mapa from "../components/Mapa/Mapa";
import ListaServicio from "../components/Categoria/ListaServicio/ListaServicio";
import { useEffect } from "react";
import UseServicio from "../hooks/UseServicio";
function Categoria() {
  const { setUsuarios,  setUsuariosFiltrados} = UseServicio();
  const backendUrl = import.meta.env.VITE_REACT_APP_BACKEND_URL;
  useEffect (() =>{
    fetch(`${backendUrl}/api/usuarios`)
            .then((response) => response.json())
            .then((responseData) => {
                setUsuarios(responseData);
                setUsuariosFiltrados(responseData);
            })
            .catch((error) => console.error(error));
  }, []);
    return (
      <>
  
        {/* SECCION FILTRO  */}
        <SeccionFiltro/>
  
        {/* SECCION MAPA  */}
        <Mapa/>
  
        {/* SECCION LISTA SERVICIOS  */}
        <ListaServicio/>
  
        {/* FOOTER  */}
        <Footer/>
  
      </>
    )
  }
  
  export default Categoria