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
                                The printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever sinceLorem Ipsum is simply dummy ext of the printing. Lorem Ipsum has been the industry's standard dummy text ever since.
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