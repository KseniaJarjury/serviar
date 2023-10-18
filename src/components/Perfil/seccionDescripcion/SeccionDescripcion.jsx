import React from "react"
import "./seccionDescripcion.css";
import circulo from "./../../../assets/circulo.png";
function SeccionDescripcion() {
    return (
        <>
            <div className="contenedor-descrip">
                <div class=" items-center h-20 ml-12 mt-4 mb-12">
                    <div class="bg-[#00B0E4] bg-opacity-20 rounded-full inline-block py-2 px-4">
                        <h3 class="subtitulo text-left">Descripcion: </h3>
                    </div>
                    <div class="contenedor-descrip-perfil">
                        <div>
                            <p class="descrip-perfil">
                            Soy un electricista con experiencia dedicado a brindar soluciones eléctricas seguras y eficientes para satisfacer las necesidades de mis clientes. Mi objetivo es garantizar que sus instalaciones eléctricas funcionen de manera óptima y cumplan con los más altos estándares de calidad y seguridad.
                            </p>
                        </div>
                        <div>
                            <ul class="descrip-info">
                                <li>
                                    <img src={circulo} alt="IconoCirculo" class="icon-circulo" />
                                    <p>Reparacion de toma corrientes domiciliario.</p>
                                </li>
                                <li>
                                    <img src={circulo} alt="IconoCirculo" class="icon-circulo" />
                                    <p>Armado de llaves termicas Industriales</p>
                                </li>
                                <li>
                                    <img src={circulo} alt="IconoCirculo" class="icon-circulo" />
                                    <p>Confeccion de planos de obra para la solicitud del servicio.</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="linea-divisoria"></div>
            </div>

        </>
    )

}

export default SeccionDescripcion