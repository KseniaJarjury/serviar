import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import SeccionFiltro from "../components/Categoria/seccionFiltro/seccionFiltro";
import Mapa from "../components/Mapa/Mapa";
function Categoria() {
    return (
      <>
        {/* NAVBAR  */}
        <Navbar/>
  
        {/* SECCION FILTRO  */}
        <SeccionFiltro/>
  
        {/* SECCION MAPA  */}
        <Mapa/>
  
        {/* SECCION LISTA SERVICIOS  */}
        
  
        {/* FOOTER  */}
        <Footer/>
  
      </>
    )
  }
  
  export default Categoria