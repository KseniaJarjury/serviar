import albañil from "../../../assets/categoria/albañil.svg"
import architect from "../../../assets/categoria/architect.svg"
import carpintero from "../../../assets/categoria/carpintero.svg"
import electricista from "../../../assets/categoria/electricista.svg"
import plomeria from "../../../assets/categoria/plomeria.svg"
import { Link } from "react-router-dom"
import "./SeccionCategoria.css"

export default function SeccionCategoria() {
    return (
      <>
        <div class="flex justify-center items-center h-40">
          <div className="bg-[#00B0E4] bg-opacity-20 rounded-full inline-block py-2 px-4">
            <h3 className=" subtitulo text-center">Categorias mas solicitadas</h3>
          </div>
        </div>
        <div class="flex justify-center items-center h-90">
          <div class="m-3">
            <div className="container-grid">
              {/* Primera Fila */}
              <div className="text-center bg-gray-200 p-2 rounded-md">
                <img src={albañil} alt="Imagen 2" class="w-auto h-auto"/>
                <a href="" class="sub_categoria">Albañil</a>
              </div>
              <div className="text-center bg-gray-200 p-2 rounded-md">
                <img src={architect} alt="Imagen 3" class="w-25 h-auto"/>
                <a href="" class="sub_categoria">Arquitecto</a>
              </div>
              <div className="text-center bg-gray-200 p-2 rounded-md">
                <img src={carpintero} alt="Imagen 4" class="w-25 h-auto"/>
                <a href="" class="sub_categoria">Carpintero</a>
              </div>
              <div className="text-center bg-gray-200 p-2 rounded-md">
                <img src={electricista} alt="Imagen 8" class="w-25 h-auto" />
                <a href="" class="sub_categoria">Electricista</a>
              </div>
              <div className="text-center bg-gray-200 p-2 rounded-md">
                <img src={plomeria} alt="Imagen 10" class="w-25 h-auto" />
                <a href="" class="sub_categoria">Plomeria</a>
              </div>
            </div>
            <div className="container-btn">
              <Link to="/categoria">
                <button className="btn-servicio">MAS SERVICIOS</button>
              </Link>
                
            </div>
          </div>
        </div>
      </>
    )
  }