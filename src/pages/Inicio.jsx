import Navbar from "../components/Navbar/Navbar"
import SeccionPortada from "../components/Inicio/seccionPortada/SeccionPortada"
import SeccionPresentacion from "../components/Inicio/seccionPresentacion/SeccionPresentacion"
import SeccionCategoria from "../components/Inicio/seccionCategoria/SeccionCategoria"
import SeccionComentario from "../components/Inicio/seccionComentario/SeccionComentario"
function Inicio() {
  return (
    <>
      <Navbar/>

      {/* SECCION PORTADA  */}
      <SeccionPortada/>

      {/* SECCION PRESENTACION  */}
      <SeccionPresentacion/>

      {/* SECCION CATEGORIAS  */}
      <SeccionCategoria/>
      
      {/* SECCION COMENTARIOS  */}
      <SeccionComentario/>
      {/* FORMULARIO CONTACTO */}

      {/* FOOTER  */}

    </>
  )
}

export default Inicio