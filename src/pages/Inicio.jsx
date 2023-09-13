import Navbar from "../components/Navbar/Navbar"
import SeccionPortada from "../components/Inicio/seccionPortada/SeccionPortada"
import SeccionPresentacion from "../components/Inicio/seccionPresentacion/SeccionPresentacion"
import SeccionCategoria from "../components/Inicio/seccionCategoria/SeccionCategoria"
function Inicio() {
  return (
    <>
      <Navbar/>

      {/* SECCION PORTADA  */}
      <SeccionPortada/>

      {/* SECCION PRESENTACION  */}
      <SeccionPresentacion/>

      {/* SECCION RECOMENDACIONES  */}
      <SeccionCategoria/>
      
      {/* SECCION COMENTARIOS  */}

      {/* FORMULARIO CONTACTO */}

      {/* FOOTER  */}

    </>
  )
}

export default Inicio