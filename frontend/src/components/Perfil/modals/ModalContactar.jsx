import React, { useState } from "react";
import "./ModalContactar.css";
import ubicacion from "./../../../assets/Contactar/Ubicacion.png";
import email from "./../../../assets/Contactar/email.png";
import telefono from "./../../../assets/Contactar/telefono.png";

function ModalContactar({ showModalContactar, setShowModalContactar }) {
    return (
        <>
            {showModalContactar ? (
                <>
                    <div className="md:max-h-[70rem] justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                        {showModalContactar ? (
                            <>
                                <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                                    <div className="relative w-full my-6 mx-auto w-[70vh] md:w-[90vh]">
                                        <div className="rounded-lg  relative flex flex-col md:flex-row md:max-h-[70rem] bg-white outline-none focus:outline-none">
                                            {/* Sección de información */}
                                            <div className="flex flex-col md:w-[90vh] md:max-h-[70rem] text-black md:gap-6  fondoFormulario">
                                                <div>
                                                    <h1 className="text-2xl md:text-4xl font-bold mt-20 ml-12">Nombre</h1>
                                                    <p className="ml-12">Electricita</p>
                                                </div>
                                                <div className="flex items-center ml-6 p-4">
                                                    <img src={ubicacion} alt="ubicacion" className="w-9 mb-2 mr-2" />
                                                    <p className="text-white w-52 md:text-[15px] text-xs">
                                                        Lavalle 648 Piso 8, C1047AAN CABA, Argentina
                                                    </p>
                                                </div>
                                                <div className="flex items-center ml-6 p-4">
                                                    <img src={telefono} alt="telefono" className="w-7 mb-1 mr-3" />
                                                    <p className="text-white w-52 md:text-[18px] text-xs">11-1234-5678</p>
                                                </div>
                                                <div className="flex items-center ml-6 p-4">
                                                    <img src={email} alt="mail" className="w-6 mb-1 mr-3" />
                                                    <p className="text-white w-52 md:text-[18px] text-xs">zonaeduca@gmail.com</p>
                                                </div>
                                            </div>
                                            {/* Sección del formulario */}
                                            <form
                                                action=""
                                                className="w-[32rem] md:max-h-[30rem] h-[900px] flex flex-col p-5 overflow-auto mx-[4rem] mt-[1rem] md:mt-[3rem] "
                                            >
                                                <h1 className="text-[#001A29] text-2xl md:text-[2.4rem] mb-4 mt-2 font-bold">Contactanos</h1>
                                                {/* nombre  */}
                                                <div className="flex flex-col mt-5">
                                                    <label htmlFor="nombre" className="text-[#666666]">Nombre</label>
                                                    <input id="nombre" className="w-52 bordes text-xs text-[#03ABE6] p-1" type="text" placeholder="Nombre" required />
                                                </div>
                                                {/* correo  */}
                                                <div className="flex flex-col mt-5">
                                                    <label htmlFor="correo" className="text-[#666666]">Correo</label>
                                                    <input id="correo" className="w-52 bordes text-xs text-[#03ABE6] p-1" type="email" placeholder="Correo" required />
                                                </div>

                                                {/* asunto  */}
                                                <div className="flex flex-col mt-5">
                                                    <label htmlFor="asunto" className="text-[#666666]">Asunto</label>
                                                    <input id="asunto" className="w-72 bordes text-xs text-[#03ABE6] p-1" type="text" placeholder="Asunto" required />
                                                </div>
                                                {/* mensaje  */}
                                                <div className="flex flex-col mt-5">
                                                    <label htmlFor="mensaje" className="text-[#666666]">Mensaje</label>
                                                    <textarea name="" id="mensaje" className="w-72 h-16 bordes text-xs text-[#03ABE6] p-1 resize-none" type="text" placeholder="Mensaje" cols="10" rows="10" required></textarea>
                                                </div>
                                                <div className="flex items-center p-6 border-solid border-blueGray-200 mt-16 rounded-b">
                                                    <button
                                                        className="text-2xl text-red-700 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                                        type="button"
                                                        onClick={() => setShowModalContactar(false)}
                                                    >
                                                        Cerrar
                                                    </button>
                                                    <button
                                                        className="text-2xl  bg-[#00B0E4] active:bg-[#001A29] text-white font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                                        type="button"
                                                        onClick={() => setShowModalContactar(false)}
                                                    >
                                                        Enviar
                                                    </button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                                <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                            </>
                        ) : null}
                    </div>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>
            ) : null}
        </>
    );
}

export default ModalContactar;
