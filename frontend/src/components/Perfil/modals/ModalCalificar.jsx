import React, { useState } from "react";
import FotoPerfil from "./../../../assets/fotoPerfil.png";
import { FaStar } from 'react-icons/fa';
import "./ModalCalificar.css";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function ModalCalificar({ showModal, setShowModal }) {
    const [rating, setRating] = useState(null);
    const [hover, setHover] = useState(null);
    function enviarCalificacion(){
        setShowModal(false);
        toast.success('¡Gracias por calificar!', {
            position: "top-right",
            autoClose: 3000, // Se cerrará automáticamente después de 3 segundos
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,});
        showToast();
    }
    return (
        <>
            {showModal ? (
                <>
                    <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                        {showModal ? (
                            <>
                                <div
                                    className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                                >
                                    <div className="relative w-full my-6 mx-auto w-[70vh] md:w-[130vh]">
                                        {/*content*/}
                                        <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full h-auto bg-white outline-none focus:outline-none">
                                            {/*header*/}
                                            <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                                                <h1 className="text-[#001A29] text-2xl md:text-4xl font-bold">
                                                    Calificacion
                                                </h1>
                                                <button
                                                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                                    onClick={() => {
                                                        setShowModal(false);
                                                    }}
                                                >
                                                    <span className="text-black text-bold h-8 w-8 text-3xl block focus:outline-none">
                                                        ×
                                                    </span>
                                                </button>
                                            </div>
                                            {/*body*/}
                                            <div className="flex flex-col md:flex-row h-[35vh]">
                                                <div className="mx-2">
                                                    <img
                                                        alt="..."
                                                        src={FotoPerfil}
                                                        className="shadow-2xl rounded-full h-auto border-none ml-[12rem] md:ml-24 md:mt-[6rem] w-[15vh] max-h-90 md:w-[260px]"
                                                        style={{ maxWidth: "300px" }}
                                                    />
                                                </div>
                                                <div className="flex flex-col items-center mx-2 md:mx-[4rem] mt-[1rem] md:mt-[2rem]">
                                                    <div className="flex flex-row items-center space-x-3 md:space-x-10 mb-8">
                                                        {[...Array(5)].map((star, index) => {
                                                            const currentRating = index + 1;
                                                            return (
                                                                <label>
                                                                <input
                                                                    type="radio"
                                                                    name="rating"
                                                                    value={currentRating}
                                                                    onClick={() => setRating(currentRating)}
                                                                />
                                                                < FaStar 
                                                                    className="cursor-pointer w-6 md:w-12" 
                                                                    key = { index } 
                                                                    size = { 50} 
                                                                    color={currentRating <= (hover || rating) ? "#ffc107" : "#e4e5e9"}
                                                                    onMouseEnter={() => setHover(currentRating)}
                                                                    onMouseLeave={() => setHover(null)}
                                                                    />
                                                                </label>
                                                            );              
                                                        })}
                                                        
                                                    </div>
                                                    <p className="text-lg md:text-xl">Tu calificacion es: {rating}</p>
                                                    <textarea
                                                        name="Comentario"
                                                        id="Comentario"
                                                        cols="40"
                                                        rows="7"
                                                        placeholder="Me parece un profesional......."
                                                        className="bg-gray-300 mt-2 md:mt-8 text-sm md:text-2xl md:resize-none"
                                                    ></textarea>
                                                </div>
                                            </div>
                                            {/*footer*/}
                                            <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b space-x-10">
                                                <button
                                                    className="text-4xl text-red-700 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                                    type="button"
                                                    onClick={() => setShowModal(false)}
                                                >
                                                    Cerrar
                                                </button>
                                                <button
                                                    className="text-4xl bg-[#00B0E4] active:bg-[#001A29] text-white font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                                    type="button"
                                                    onClick={() => enviarCalificacion()}
                                                >
                                                    Guardar
                                                </button>
                                            </div>
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

export default ModalCalificar;
