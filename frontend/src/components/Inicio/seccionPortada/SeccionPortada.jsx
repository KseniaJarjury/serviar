import fondo from "../../../assets/fondo.png"
import "./SeccionPortada.css"

export default function SeccionPortada() {
  return (
    <>
    <div className="contenedor">
        <img src={fondo} alt="" className="imagen"/>
        <h2 className="titulo">Bienvenidos a ServiAr</h2>
        <p className="texto">Aca encontraras todo lo que necesitas en materia de servicios para el hogar, aprovecha nuestra gran variedad de profesionales....</p>
      </div>
    </>
  )
}