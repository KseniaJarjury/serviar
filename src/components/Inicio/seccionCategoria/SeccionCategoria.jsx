import abogado from "../../../assets/categoria/abogado.svg"
import albañil from "../../../assets/categoria/albañil.svg"
import architect from "../../../assets/categoria/architect.svg"
import belleza from "../../../assets/categoria/belleza.svg"
import carpintero from "../../../assets/categoria/carpintero.svg"
import cocinero from "../../../assets/categoria/cocinero.svg"
import cuidador from "../../../assets/categoria/cuidador.svg"
import electricista from "../../../assets/categoria/electricista.svg"
import herrero from "../../../assets/categoria/herrero.svg"
import plomeria from "../../../assets/categoria/plomeria.svg"
import "./SeccionCategoria.css"

export default function SeccionCategoria() {
    return (
      <>
        <div class="flex justify-center items-center h-40">
          <div className="bg-[#00B0E4] bg-opacity-20 rounded-full inline-block py-2 px-4">
            <h3 className=" subtitulo text-center">Descubri todas las categorias: </h3>
          </div>
        </div>
        <div class="flex justify-center items-center h-90">
          <div class="m-3">
            <div className="grid grid-cols-5 gap-16">

              {/* Primera Fila */}

              <div className="text-center bg-gray-200 p-2 rounded-md">
                <img src={abogado} alt="Imagen 1" class="w-25 h-auto"/>
                <a href="" class="sub_categoria">Abogado</a>
              </div>
              <div className="text-center bg-gray-200 p-2 rounded-md">
                <img src={albañil} alt="Imagen 2" class="w-25 h-auto"/>
                <a href="" class="sub_categoria">Albañil</a>
              </div>
              <div className="text-center bg-gray-200 p-2 rounded-md">
                <img src={architect} alt="Imagen 3" class="w-25 h-auto"/>
                <a href="" class="sub_categoria">Arquitecto</a>
              </div>
              <div className="text-center bg-gray-200 p-2 rounded-md">
                <img src={belleza} alt="Imagen 4" class="w-25 h-auto"/>
                <a href="" class="sub_categoria">Belleza</a>
              </div>
              <div className="text-center bg-gray-200 p-2 rounded-md">
                <img src={carpintero} alt="Imagen 4" class="w-25 h-auto"/>
                <a href="" class="sub_categoria">Carpintero</a>
              </div>

              {/* Segunda fila */}

              <div className="text-center bg-gray-200 p-2 rounded-md">
                <img src={cocinero} alt="Imagen 6" class="w-25 h-auto" />
                <a href="" class="sub_categoria">Cocinero</a>
              </div>
              <div className="text-center bg-gray-200 p-2 rounded-md">
                <img src={electricista} alt="Imagen 8" class="w-25 h-auto" />
                <a href="" class="sub_categoria">Electricista</a>
              </div>
              <div className="text-center bg-gray-200 p-2 rounded-md">
                <img src={herrero} alt="Imagen 9" class="w-25 h-auto" />
                <a href="" class="sub_categoria">Herrero</a>
              </div>
              <div className="text-center bg-gray-200 p-2 rounded-md">
                <img src={cuidador} alt="Imagen 7" class="w-25 h-auto" />
                <a href="" class="sub_categoria">Paseador de perros</a>
              </div>
              <div className="text-center bg-gray-200 p-2 rounded-md">
                <img src={plomeria} alt="Imagen 10" class="w-25 h-auto" />
                <a href="" class="sub_categoria">Plomeria</a>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }