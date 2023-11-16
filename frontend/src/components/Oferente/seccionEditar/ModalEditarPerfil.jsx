import React from "react";
import UseServicio from "../../../hooks/UseServicio";

function ModalEditarPerfil({  showModal, setShowModal, person = {}, handleInputChange  }) {
    const { provincias, localidades, servicios, usuario, setUsuario } = UseServicio();

    // Tu lógica para manejar los cambios en los datos del usuario y realizar actualizaciones
    const handleUpdateProfile = async (nuevosDatos) => {
        try {
            // Lógica para enviar los nuevos datos del usuario al backend y actualizar el contexto
            const response = await fetch('/api/actualizar-usuario', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ id: usuario.id, ...nuevosDatos }), // Ajusta según la estructura de tu backend
            });

            if (response.ok) {
                // Actualiza el contexto con los nuevos datos del usuario
                setUsuario({ ...usuario, ...nuevosDatos });
            } else {
                throw new Error('Error al actualizar el perfil');
            }
        } catch (error) {
            console.error('Error al actualizar el perfil:', error);
            // Maneja el error según tus necesidades (por ejemplo, muestra un mensaje al usuario)
        }
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
                                                <h3 className="text-3xl font-semibold">
                                                    Datos Personales
                                                </h3>
                                                <button
                                                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                                    onClick={() => setShowModal(false)}
                                                >
                                                    <span className=" text-black h-6 w-6 text-2xl block outline-none focus:outline-none">
                                                        ×
                                                    </span>
                                                </button>
                                            </div>
                                            {/*body*/}
                                            <div className="w-full relative overflow-y-auto max-w-screen-lg">
                                                <form className='flex flex-col text-left p-16' action='' onSubmit={(e) => {
                                                    e.preventDefault(); // Evitar que el formulario se envíe de forma predeterminada
                                                    handleUpdateProfile(/* Pasa aquí los nuevos datos del usuario */);
                                                    setShowModal(false);
                                                }}>
                                                    <label htmlFor="NombreApellido">Nombre Completo:</label>
                                                    <input
                                                        type="text"
                                                        id="NombreApellido"
                                                        name="NombreApellido"
                                                        value={person?.NombreApellido}
                                                        onChange={handleInputChange}
                                                        required
                                                        className="mb-4 p-2 max-w-full"
                                                    />
                                                    <label htmlFor="Descripcion">Descripcion:</label>
                                                    <textarea name="Descripcion" id="Descripcion" cols="70" rows="6"></textarea>
                                                    <label htmlFor="cuit">CUIT:</label>
                                                    <input
                                                        type="text"
                                                        id="cuit"
                                                        name="cuit"
                                                        value={person?.CUIT}
                                                        onChange={handleInputChange}
                                                        required
                                                        className="mb-4 p-2 max-w-full"
                                                    />
                                                    <label htmlFor="Telefono">Telefono:</label>
                                                    <input
                                                        type="text"
                                                        id="Telefono"
                                                        name="Telefono"
                                                        value={person?.Telefono}
                                                        onChange={handleInputChange}
                                                        required
                                                        className="mb-4 p-2 max-w-full"
                                                    />
                                                    <label htmlFor="provincia" className="block text-gray-600 text-base">
                                                        Provincia:
                                                    </label>
                                                    {provincias && provincias.length > 0 && (
                                                        <select
                                                            name="provincia"
                                                            className="w-60 px-4 py-2 pl-6 border border-gray-300 rounded-lg placeholder-gray-500"
                                                            required
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
                                                    <label htmlFor="localidad" className="block text-gray-600 text-base">
                                                        Localidad:
                                                    </label>
                                                    {localidades && localidades.length > 0 && provincias && provincias.length > 0 && (
                                                        <select
                                                            name="localidad"
                                                            className="w-60 px-4 py-2 pl-6 border border-gray-300 rounded-lg placeholder-gray-500"
                                                            required
                                                            onChange={handleInputChange}
                                                            value={person?.localidad}
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
                                                    <label htmlFor="servicio" className="block text-gray-600 text-base">
                                                        Servicio:
                                                    </label>
                                                    {servicios && servicios.length > 0 && (
                                                        <select
                                                            name="servicio"
                                                            className="w-60 px-4 py-2 pl-6 border border-gray-300 rounded-lg placeholder-gray-500"
                                                            required
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
                                                    onClick={() => setShowModal(false)}
                                                >
                                                    Cerrar
                                                </button>
                                                <button
                                                    className="bg-[#00B0E4] active:bg-[#001A29] text-white font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                                    type="button"
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
