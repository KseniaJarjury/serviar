import fotoPresentacion from "../../../assets/fotop.jpg"
import "./SeccionPresentacion.css"

export default function SeccionPresentacion() {
    return (
      <>
      <div className="container_presentacion">
        <div className="container_frase">
            <div >
            <p className="presentacion">
                Facilitamos tu vida en casa conectándote con profesionales de servicios domésticos cercanos y confiables. Desde limpieza hasta reparaciones, tenemos todo lo que necesitas en un solo lugar. Encuentra ayuda para tu hogar con facilidad en ServiAr. ¡Simplifica tu vida hoy!
            </p>
            </div>
        </div>
        <div className="container_imagen">
                <img src={fotoPresentacion} alt=""  className="imagen1"/>
        </div>
      </div>
      </>
    )
  }