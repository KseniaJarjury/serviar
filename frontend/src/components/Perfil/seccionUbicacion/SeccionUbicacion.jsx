import React from "react"
import Mapa from "./../../Mapa/Mapa"
import "./seccionUbicacion.css"

function SeccionUbicacion() {
    return (
        <>
            <div className=" items-center h-20 ml-12 mb-4">
                <div className="bg-[#00B0E4] bg-opacity-20 rounded-full inline-block py-2 px-4">
                    <h3 className="subtitulo text-left">Ubicacion: </h3>
                </div>
            </div>
            <div>
                <Mapa/>
            </div>
            <div>
                <div className="flex justify-center mb-24">
                    <button className="btn-buscar bg-blue-500 text-white px-4 py-2 rounded-lg mr-16">Contactar</button>
                    <button className="btn-buscar bg-blue-500 text-white px-4 py-2 rounded-lg">Calificar</button>
                </div>
            </div>

        </>
    )

}

export default SeccionUbicacion