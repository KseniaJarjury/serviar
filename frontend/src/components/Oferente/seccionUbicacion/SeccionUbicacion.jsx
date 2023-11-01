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
            

        </>
    )

}

export default SeccionUbicacion