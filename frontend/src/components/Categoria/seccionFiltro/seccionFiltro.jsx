import iconservicio from "../../../assets/iconServicio.png"
import IconUbicacion from "../../../assets/IconUbi.png"
import "./seccionFiltro.css"

export default function SeccionFiltro() {
    return (
      <>
        <div class="flex items-center h-40 mt-16 ml-12">
          <div className="bg-[#00B0E4] bg-opacity-20 rounded-full inline-block py-2 px-4">
            <h3 className=" subtitulo text-left">Encuentre su servicio</h3>
          </div>
        </div>
        <div className="flex items-center space-x-16 ml-12">
            {/* Buscador de Provincia */}
            <div className="relative">
                <label htmlFor="provincia" className="block text-gray-600 text-sm">Provincia</label>
                <img
                src={IconUbicacion} // Reemplaza con la ruta de tu imagen
                alt="Icono de Provincia"
                className="absolute h-6 w-4 mt-2 left-3"
                />
                <input
                type="text"
                placeholder="Provincia"
                className="w-40 px-3 py-2 pl-10 border border-gray-300 rounded-lg placeholder-gray-500"
                />
            </div>
            {/* Buscador de Localidad*/}
            <div className="relative">
                <label htmlFor="localidad" className="block text-gray-600 text-sm">Localidad</label>
                <img
                src={IconUbicacion} // Reemplaza con la ruta de tu imagen
                alt="Icono de Provincia"
                className="absolute h-6 w-4 mt-2 left-3"
                />
                <input
                type="text"
                placeholder="Localidad"
                className="w-40 px-3 py-2 pl-10 border border-gray-300 rounded-lg placeholder-gray-500"
                />
            </div>

            {/* Buscador de Servicios */}
            <div className="relative">
                <label htmlFor="servicio" className="block text-gray-600 text-sm">Servicio</label>
                <img
                    src={iconservicio} // Reemplaza con la ruta de tu imagen
                    alt="Icono de Servicio"
                    className="absolute h-6 w-6 left-3 mt-2"
                />
                <input
                    type="text"
                    placeholder="Servicio"
                    className="w-40 px-3 py-2 pl-10 border border-gray-300 rounded-lg placeholder-gray-500"
                />
            </div>

            <button className="btn-buscar bg-blue-500 text-white px-4 py-2 rounded-lg mt-4">Buscar</button>
        </div>
      </>
    )
  }