import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import Validation from '../validators/LoginValidation.js';
import UseServicio from '../hooks/UseServicio.js';
import axios from 'axios';

function Registrar() {
    window.scrollTo(0, 0);

    const { provincias, localidades, servicios, setUsuario, login } = UseServicio();
    const navigate = useNavigate();

    const [registroExitoso, setRegistroExitoso] = useState(false);
    const [registroEnProceso, setRegistroEnProceso] = useState(false);
    const [errors, setErrors] = useState({});
    const [person, setPerson] = useState({
        NombreApellido: '',
        provincia: '',
        localidad: '',
        servicio: '',
        email: '',
        password: '',
    });

    const handleInputChange = (e) => {
        setPerson({
            ...person,
            [e.target.name]: e.target.value,
        });
    };

    const registrar = async () => {
        try {
            setRegistroEnProceso(true);
            const response = await axios.post('api/registrar', {
                email: person.email,
                password: person.password,
                NombreApellido: person.NombreApellido,
                Id_Localidad: person.localidad,
                Id_Servicio: person.servicio,
            });

            if (response.status === 201) {
                setPerson({
                    NombreApellido: '',
                    provincia: '',
                    localidad: '',
                    servicio: '',
                    email: '',
                    password: '',
                });
                setRegistroExitoso(true);
            }
        } catch (error) {
            console.error('Error al registrar el usuario:', error.response?.data);

            if (error.response?.data?.message) {
                setErrors({ email: error.response.data.message });
            } else {
                setErrors({ message: 'Error al registrar el usuario' });
            }
        } finally {
            // Habilitar el botón después de completar el registro (éxito o error)
            setRegistroEnProceso(false);
        }
    };

    useEffect(() => {
        if (registroExitoso) {
            navigate('/oferente');
        }
    }, [registroExitoso, navigate]);

    return (
        <>
            <Navbar />
            <div className="bg-cover bg-center h-[60rem] flex flex-col items-center justify-center" style={{ backgroundImage: `url('/src/assets/fondopixe.png')` }}>
                <h1 className="text-[#001A29] text-center text-[65px] font-bold mt-2 p-8">Registrate</h1>
                <div className='bg-[#e6e6e6c7] rounded-5 shadow-lg shadow-gray-300 w-[30%] h-[70%]'>
                    <form className='flex flex-col justify-center mb-8 p-12' action=''>
                        <label htmlFor="NombreApellido">Nombre Completo:</label>
                        <input
                            type="text"
                            id="NombreApellido"
                            name="NombreApellido"
                            value={person.NombreApellido}
                            onChange={handleInputChange}
                            required
                            className="mb-4 p-2"
                        />
                        <label htmlFor="provincia" className="block text-gray-600 text-base">
                            Provincia:
                        </label>
                        {provincias && provincias.length > 0 && (
                            <select
                                name="provincia"
                                className="w-40 px-4 py-2 pl-6 border border-gray-300 rounded-lg placeholder-gray-500"
                                required
                                onChange={handleInputChange}
                                value={person.provincia}
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
                                className="w-40 px-4 py-2 pl-6 border border-gray-300 rounded-lg placeholder-gray-500"
                                required
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
                        <label htmlFor="servicio" className="block text-gray-600 text-base">
                            Servicio:
                        </label>
                        {servicios && servicios.length > 0 && (
                            <select
                                name="servicio"
                                className="w-40 px-4 py-2 pl-6 border border-gray-300 rounded-lg placeholder-gray-500"
                                required
                                onChange={handleInputChange}
                                value={person.servicio}
                            >
                                <option value="">Seleccione</option>
                                {servicios.map((servicio) => (
                                    <option key={servicio.Id_Servicio} value={servicio.Id_Servicio}>
                                        {servicio.Servicio}
                                    </option>
                                ))}
                            </select>
                        )}
                        <label htmlFor="email">Email: </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Email"
                            value={person.email}
                            onChange={handleInputChange}
                            required
                            className="mb-4 p-2"
                        />
                        <div className="error-message text-center" style={{ color: 'red' }}>
                            {errors.email}
                        </div>
                        <label htmlFor="password">Password: </label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Password"
                            value={person.password}
                            onChange={handleInputChange}
                            required
                            className="mb-4 p-2"
                        />
                        <div className="error-message text-center" style={{ color: 'red' }}>
                            {errors.password && <div className="error-message">{errors.password}</div>}
                        </div>
                        <div className="text-center mt-8 text-26 font-semibold text-[#0A66C2]">
                            <a href="">¿Olvidó su contraseña?</a>
                        </div>
                        <div className="w-12rem flex items-center justify-center bg-[#001A29] bg-opacity-85 text-white font-bold text-20 mt-10 mb-4 p-4 rounded-25 cursor-pointer">
                            <button type="button" onClick={registrar}
                                disabled={registroEnProceso || registroExitoso}  // Deshabilitar el botón si el registro está en proceso o ya se ha completado
                                className={`w-12rem flex items-center justify-center bg-[#001A29] bg-opacity-85 text-white font-bold text-20 mt-10 mb-4 p-4 rounded-25 cursor-pointer ${registroEnProceso || registroExitoso ? 'opacity-50 cursor-not-allowed' : ''}`}
                            >Registrate</button>
                        </div>
                    </form>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Registrar;
