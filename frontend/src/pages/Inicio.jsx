import SeccionPortada from "../components/Inicio/seccionPortada/SeccionPortada"
import SeccionPresentacion from "../components/Inicio/seccionPresentacion/SeccionPresentacion"
import SeccionCategoria from "../components/Inicio/seccionCategoria/SeccionCategoria"
import SeccionComentario from "../components/Inicio/seccionComentario/SeccionComentario"
import Footer from "../components/Footer/Footer"
function Inicio() {
  return (
    <>

      {/* SECCION PORTADA  */}
      <SeccionPortada/>

      {/* SECCION PRESENTACION  */}
      <SeccionPresentacion/>

      {/* SECCION CATEGORIAS  */}
      <SeccionCategoria/>
      
      {/* SECCION COMENTARIOS  */}
      <SeccionComentario/>

      {/* FOOTER  */}
      <Footer />

    </>
  )
}

export default Inicio