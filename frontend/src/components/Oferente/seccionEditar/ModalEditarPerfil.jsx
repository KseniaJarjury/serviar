import React, { useState } from "react";
import UseServicio from "../../../hooks/UseServicio";

function ModalEditarPerfil({ showModal, setShowModal, handleApiCall }) {
    const { provincias, localidades, servicios, usuario, setUsuario } = UseServicio();
    const [updateExitoso, setUpdateExitoso] = useState(false);
    const [updateEnProceso, setUpdateEnProceso] = useState(false);
    const [errors, setErrors] = useState({});
    const [person, setPerson] = useState({
        NombreApellido: '',
        Descripcion: '',
        CUIT: '',
        Telefono: '',
        provincia: '',
        localidad: '',
        servicio: '',
    });
    const handleInputChange = (e) => {
        setPerson({
            ...person,
            [e.target.name]: e.target.value,
        });
        // Verificar si el campo actual es requerido y está vacío
        if (e.target.required) {
            setErrors({
                ...errors,
                [e.target.name]: 'Este campo es obligatorio',
            });
        } else {
            // Limpiar el error si el campo tiene un valor
            setErrors({
                ...errors,
                [e.target.name]: '',
            });
        }
    };

    const UpdatePerfil = async () => {
        try {

            // Verificar si hay errores en los campos requeridos
            const hasErrors = Object.values(errors).some((error) => error);
            if (hasErrors) {
                // Puedes mostrar un mensaje o realizar acciones adicionales
                return;
            }

            setUpdateEnProceso(true);
            const dataToUpdate = {
                NombreApellido: person.NombreApellido,
                Descripcion: person.Descripcion,
                CUIT: person.CUIT,
                Telefono: person.Telefono,
                Id_Localidad: person.localidad,
                Id_Servicio: person.servicio,
            };
            // Llamar a la función pasada como prop para realizar la solicitud a la API
            await handleApiCall(dataToUpdate);
            setUpdateExitoso(true);
            // Cerrar el modal después de una actualización exitosa
            setShowModal(false);
            // Recargar la página o realizar otras acciones necesarias para mostrar el perfil actualizado
            window.location.reload(); // Esto recarga la página, puedes usar otra lógica según tus necesidades
        } catch (error) {
            // Manejar errores según sea necesario
        } finally {
            setUpdateEnProceso(false);
        }
    };
    // Verificar si todos los campos requeridos están completos
    const isFormValid = () => {
        return (
            Object.values(person).every((value) => value.trim() !== '' || value === 0) &&
            !Object.values(errors).some((error) => error)
        );
    };
    const resetErrors = () => {
        setErrors({
            NombreApellido: '',
            Descripcion: '',
            CUIT: '',
            Telefono: '',
            provincia: '',
            localidad: '',
            servicio: '',
        });
    };

    return (
        <>
            {showModal ? (
                <>
                    {/* Código del modal aquí */}
                    <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                        {showModal ? (
                            <>
                                <div
                                    className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                                >
                                    <div className="relative w-auto my-6 mx-auto max-w-3xl">
                                        {/*content*/}
                                        <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full h-screen bg-white outline-none focus:outline-none">
                                            {/*header*/}
                                            <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                                                <h3 className="text-[#001A29] text-3xl font-bold">
                                                    Datos Personales
                                                </h3>
                                                <button
                                                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                                    onClick={() => {
                                                        setShowModal(false);
                                                        resetErrors(); // Reiniciar errores al cerrar el modal
                                                    }}

                                                >
                                                    <span className="text-black text-bold h-8 w-8 text-3xl block focus:outline-none">
                                                        ×
                                                    </span>
                                                </button>
                                            </div>
                                            {/*body*/}
                                            <div className="w-full relative overflow-y-auto max-w-screen-lg">
                                                <form className='flex flex-col text-left text-xl p-16' action=''>
                                                    <label htmlFor="NombreApellido">Nombre Completo:</label>
                                                    <input
                                                        type="text"
                                                        id="NombreApellido"
                                                        name="NombreApellido"
                                                        value={person.NombreApellido}
                                                        onChange={handleInputChange}
                                                        className="mb-4 p-2 max-w-full border border-gray-300"
                                                    />
                                                    <label htmlFor="Descripcion">Descripcion:</label>
                                                    <textarea name="Descripcion" id="Descripcion" cols="70" rows="6" className="mb-4 border border-gray-300" value={person.Descripcion}
                                                        onChange={handleInputChange} required></textarea>
                                                    <label htmlFor="cuit">CUIT:</label>
                                                    <input
                                                        type="text"
                                                        id="cuit"
                                                        name="CUIT"
                                                        value={person.CUIT}
                                                        onChange={handleInputChange}
                                                        required
                                                        className="mb-4 p-2 max-w-full border border-gray-300"
                                                    />
                                                    <label htmlFor="Telefono">Telefono:</label>
                                                    <input
                                                        type="text"
                                                        id="Telefono"
                                                        name="Telefono"
                                                        value={person.Telefono}
                                                        onChange={handleInputChange}
                                                        required
                                                        className="mb-4 p-2 max-w-full border border-gray-300"
                                                    />
                                                    <label htmlFor="provincia" className="block text-gray-600 text-xl">
                                                        Provincia:
                                                    </label>
                                                    {provincias && provincias.length > 0 && (
                                                        <select
                                                            name="provincia"
                                                            className="w-80 px-4 mb-4 py-2 pl-6 border border-gray-300 rounded-lg placeholder-gray-500"
                                                            onChange={handleInputChange}
                                                            value={person?.provincia}
                                                        >
                                                            <option value="">Seleccione</option>
                                                            {provincias.map((provincia) => (
                                                                <option key={provincia.Id_Provincia} value={provincia.Id_Provincia}>
                                                                    {provincia.Provincia}
                                                                </option>
                                                            ))}
                                                        </select>
                                                    )}
                                                    <label htmlFor="localidad" className="block text-gray-600 text-xl">
                                                        Localidad:
                                                    </label>
                                                    {localidades && localidades.length > 0 && provincias && provincias.length > 0 && (
                                                        <select
                                                            name="localidad"
                                                            className="w-80 px-4 py-2 pl-6 mb-4 border border-gray-300 rounded-lg placeholder-gray-500"
                                                            onChange={handleInputChange}
                                                            value={person.localidad}
                                                        >
                                                            <option value="">Seleccione</option>
                                                            {localidades
                                                                .filter((localidad) => localidad.Id_Provincia.toString() === person.provincia)
                                                                .map((localidad) => (
                                                                    <option key={localidad.Id_Localidad} value={localidad.Id_Localidad}>
                                                                        {localidad.Localidad}
                                                                    </option>
                                                                ))}
                                                        </select>
                                                    )}
                                                    <label htmlFor="servicio" className="block text-gray-600 text-xl">
                                                        Servicio:
                                                    </label>
                                                    {servicios && servicios.length > 0 && (
                                                        <select
                                                            name="servicio"
                                                            className="w-80 px-4 py-2 pl-6 border border-gray-300 rounded-lg placeholder-gray-500"
                                                            onChange={handleInputChange}
                                                            value={person?.servicio}
                                                        >
                                                            <option value="">Seleccione</option>
                                                            {servicios.map((servicio) => (
                                                                <option key={servicio.Id_Servicio} value={servicio.Id_Servicio}>
                                                                    {servicio.Servicio}
                                                                </option>
                                                            ))}
                                                        </select>
                                                    )}
                                                </form>
                                            </div>
                                            {/*footer*/}
                                            <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                                                <button
                                                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                                    type="button"
                                                    onClick={() => {
                                                        setShowModal(false);
                                                        resetErrors(); // Reiniciar errores al cerrar el modal
                                                    }}
                                                >
                                                    Cerrar
                                                </button>
                                                <button
                                                    className="bg-[#00B0E4] active:bg-[#001A29] text-white font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                                    type="button"
                                                    onClick={UpdatePerfil}
                                                    disabled={!isFormValid()}
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

export default ModalEditarPerfil;
