import React, { useState, useEffect } from "react";
import UseServicio from "../../../hooks/UseServicio";
import { IoClose } from "react-icons/io5";
import axios from "axios";

function ModalEditarPerfil({ showModal, setShowModal, provincia, servicio, updateUsuario, usuario, setUsuario }) {
    const { provincias, localidades, servicios } = UseServicio();
    const [updateExitoso, setUpdateExitoso] = useState(false);
    const [updateEnProceso, setUpdateEnProceso] = useState(false);
    const [errors, setErrors] = useState({});
    const [localidad, setLocalidad] = useState(usuario?.localidad || {});
    const [user, setUser] = useState({
        NombreApellido: usuario?.NombreApellido || '',
        Descripcion: usuario?.Descripcion || '',
        CUIT: usuario?.CUIT || '',
        Telefono: usuario?.Telefono || '',
        provincia: usuario?.provincia || '',  // Asegúrate de que los nombres coincidan con los campos en tu objeto usuario
        localidad: usuario?.localidad || '',
        servicio: usuario?.servicio || '',
    });

    async function actualizarUsuario(dataToUpdate) {
        try {
            const response = await axios.put(`http://localhost:3000/api/usuario/${usuario.Id_Usuario}`, dataToUpdate);
            // Verificar si la respuesta de la API contiene datos
            if (response && response.data) {
                console.log('Respuesta de la API:', response.data);
                // Puedes realizar acciones adicionales aquí según la respuesta de la API
            } else {
                console.error('Error al modificar el usuario: Respuesta de la API no contiene datos');
            }
        } catch (error) {
            console.error('Error al modificar el usuario:', error.response?.data || error.message || error);
            // Puedes manejar errores aquí
        }
    };

    const handleCloseModal = () => {
        // Restaurar los datos originales y cerrar el modal
        setUser({
            NombreApellido: usuario?.NombreApellido || '',
            Descripcion: usuario?.Descripcion || '',
            CUIT: usuario?.CUIT || '',
            Telefono: usuario?.Telefono || '',
            provincia: provincia?.Id_Provincia || '',
            localidad: localidad?.Id_Localidad || '',
            servicio: servicio?.Id_Servicio || '',
        });
        setShowModal(false);
        // Reiniciar errores al cerrar el modal
        resetErrors();
    };
    useEffect(() => {
        console.log('Usuario en useEffect:', usuario);

        if (usuario) {
            setUser({
                NombreApellido: usuario?.NombreApellido || '',
                Descripcion: usuario?.Descripcion || '',
                CUIT: usuario?.CUIT || '',
                Telefono: usuario?.Telefono || '',
                provincia: usuario?.provincia || '',
                localidad: usuario?.localidad || '',
                servicio: usuario?.servicio || '',
            });
        }
        setUpdateEnProceso(false);
        console.log('Usuario en SeccionEditar:', usuario);
    }, [usuario]);
    const handleInputChange = (e) => {
        const { name, value } = e.target;

        setUser((prevUser) => ({
            ...prevUser,
            [name]: value,
        }));

        if (e.target.required) {
            setErrors({
                ...errors,
                [e.target.name]: 'Este campo es obligatorio',
            });
        } else {
            setErrors({
                ...errors,
                [e.target.name]: '',
            });
        }

        if (e.target.name === 'provincia') {
            const provinciaSeleccionada = provincias.find(p => p.Id_Provincia === value);
            const localidadesDeProvincia = provinciaSeleccionada ? localidades.filter(local => local.Id_Provincia === provinciaSeleccionada.Id_Provincia) : [];

            // Limpiar la localidad al cambiar la provincia
            setUser((prevUser) => ({
                ...prevUser,
                localidad: '',
            }));

            // Limpiar la localidad en el estado
            setLocalidad('');
        }

        // Actualizar localidad cuando cambia
        if (e.target.name === 'localidad') {
            setLocalidad(e.target.value);
        }
    };
    async function UpdatePerfil() {
        try {
            setUpdateEnProceso(true);
            const dataToUpdate = {
                NombreApellido: user.NombreApellido,
                Descripcion: user.Descripcion,
                CUIT: user.CUIT,
                Telefono: user.Telefono,
                Id_Localidad: user.localidad,
                Id_Servicio: user.servicio,
            };

            Object.keys(dataToUpdate).forEach(key => {
                if (dataToUpdate[key] === '' || dataToUpdate[key] === null) {
                    delete dataToUpdate[key];
                }
            });

            await actualizarUsuario(dataToUpdate);
            setUpdateExitoso(true);

            // Actualizar los datos del usuario llamando a la función de actualización
            updateUsuario((prevUsuario) => ({
                ...prevUsuario,
                ...dataToUpdate,
            }));
        } catch (error) {
            console.error("Error al actualizar perfil:", error);
        } finally {
            setUpdateEnProceso(false);
        }
    }

    useEffect(() => {
        if (updateExitoso) {
            // Cerrar el modal después de una actualización exitosa
            setShowModal(false);
            // Recargar la página para reflejar los cambios
            window.location.reload();
        }
    }, [updateExitoso]);

    // Verificar si todos los campos requeridos están completos
    const isFormValid = () => {
        return (
            Object.values(user).every((value) => (typeof value === 'string' ? value.trim() !== '' : true) || value === 0) &&
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
                                                    Editar Datos Personales
                                                </h3>

                                                <IoClose className="ml-auto border-0 text-black  float-right text-3xl font-semibold "
                                                    onClick={() => {
                                                        setShowModal(false);
                                                        handleCloseModal();
                                                        resetErrors(); // Reiniciar errores al cerrar el modal
                                                    }} />
                                            </div>
                                            <p className="text-md text-left ml-8 mt-6">* El asterisco indica que es obligatorio</p>
                                            {/*body*/}
                                            <div className="w-full relative overflow-y-auto max-w-screen-lg">
                                                <form className='flex flex-col text-left text-xl p-12' action=''>
                                                    <h3 className="text-left text-[#001A29] text-3xl font-bold mb-4">
                                                        Información Básica
                                                    </h3>
                                                    <label htmlFor="NombreApellido">Nombre Completo*</label>
                                                    <input
                                                        type="text"
                                                        id="NombreApellido"
                                                        name="NombreApellido"
                                                        value={user.NombreApellido}
                                                        onChange={handleInputChange}
                                                        className="mb-4 mt-2 p-2 max-w-full text-black font-semibold border border-gray-300"
                                                    />
                                                    <label htmlFor="Descripcion">Descripcion*</label>
                                                    <textarea
                                                        name="Descripcion"
                                                        id="Descripcion"
                                                        value={user.Descripcion}
                                                        cols="70" rows="6"
                                                        className="mb-4 mt-2 text-black font-semibold border border-gray-300"
                                                        onChange={handleInputChange} required></textarea>
                                                    <label htmlFor="cuit">CUIT*</label>
                                                    <input
                                                        type="text"
                                                        id="cuit"
                                                        name="CUIT"
                                                        value={user.CUIT}
                                                        onChange={handleInputChange}
                                                        required
                                                        className="mb-4 mt-2 p-2 text-black font-semibold max-w-full border border-gray-300"
                                                    />
                                                    <label htmlFor="Telefono">Telefono*</label>
                                                    <input
                                                        type="text"
                                                        id="Telefono"
                                                        name="Telefono"
                                                        value={user.Telefono}
                                                        onChange={handleInputChange}
                                                        required
                                                        className="mb-4 mt-2 p-2 text-black font-semibold max-w-full border border-gray-300"
                                                    />
                                                    {/* {provincias && provincias.length > 0 && (
                                                        <select
                                                            name="provincia"
                                                            className="w-80 px-4 mb-4 mt-2 py-2 pl-6 text-black font-semibold border border-gray-300 rounded-lg placeholder-gray-500"
                                                            onChange={handleInputChange}
                                                            defaultValue={provincia?.Id_Provincia}
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
                                                        Localidad*
                                                    </label>
                                                    {localidades && localidades.length > 0 && provincias && provincias.length > 0 && (
                                                        <select
                                                            name="localidad"
                                                            className="w-80 px-4 py-2 mt-2 pl-6 text-black font-semibold mb-4 border border-gray-300 rounded-lg placeholder-gray-500"
                                                            onChange={handleInputChange}
                                                            value={user.localidad}
                                                        >
                                                            <option value="">Seleccione</option>
                                                            {localidades
                                                                .filter((localidad) => user?.provincia ? localidad.Id_Provincia === user?.provincia : false)
                                                                .map((localidad) => (
                                                                    <option key={localidad.Id_Localidad} value={localidad.Id_Localidad}>
                                                                        {localidad.Localidad}
                                                                    </option>
                                                                ))}
                                                        </select>
                                                    )} */}
                                                    <label htmlFor="servicio" className="block text-gray-600 text-xl">
                                                        Servicio*
                                                    </label>
                                                    {servicios && servicios.length > 0 && (
                                                        <select
                                                            name="servicio"
                                                            className="w-80 px-4 py-2 mt-2 pl-6 text-black font-semibold border border-gray-300 rounded-lg placeholder-gray-500"
                                                            onChange={handleInputChange}
                                                            defaultValue={servicio?.Id_Servicio}
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
                                                        handleCloseModal();
                                                        resetErrors(); // Reiniciar errores al cerrar el modal
                                                    }}
                                                >
                                                    Cerrar
                                                </button>
                                                <button
                                                    className="bg-[#00B0E4] active:bg-[#001A29] text-white font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                                    type="button"
                                                    onClick={() => UpdatePerfil()}
                                                    disabled={updateEnProceso}
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
