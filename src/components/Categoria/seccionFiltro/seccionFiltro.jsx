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
            {/* Buscador de Departamentos */}
            <div className="relative">
                <label htmlFor="departamento" className="block text-gray-600 text-sm">Departamento</label>
                <img
                src={IconUbicacion} // Reemplaza con la ruta de tu imagen
                alt="Icono de Departamento"
                className="absolute h-6 w-4 mt-2 left-3"
                />
                <input
                type="text"
                placeholder="Departamento"
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
        {/* Agregar el div con el iframe de Google Maps */}
        <div className="mapa">
        <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3276.6526026708398!2d-58.52765181114503!3d-34.7895199!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcd03b1500e073%3A0x5d9d510150cbf7da!2sUniversidad%20Provincial%20de%20Ezeiza%20(UPE)!5e0!3m2!1ses!2sar!4v1695671552123!5m2!1ses!2sar"
            width="100%"
            height="450"
            style={{ border: '0' }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
        </div>


      </>
    )
  }