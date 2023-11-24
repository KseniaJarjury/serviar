import { createContext, useState, useEffect } from "react";
import PropTypes from "prop-types";
import axios from 'axios';

const ServicioContext = createContext();

const ServicioProvider = ({ children }) => {

    const backendUrl = import.meta.env.VITE_REACT_APP_BACKEND_URL;


    const [usuario, setUsuario] = useState(null);
    const [usuarios, setUsuarios] = useState([]);
    const [usuariosFiltrados, setUsuariosFiltrados] = useState([]);
    const [servicios, setServicio] = useState([]);
    const [provincias, setProvincia] = useState([]);
    const [localidades, setLocalidad] = useState([]);
    const [center, setCenter] = useState({ lat: -32.966970, lng: -63.725497 });
    const [zoom, setZoom] = useState(5);




    useEffect(() => {
        // Realiza una solicitud a tu backend para obtener los datos y actualiza el estado del contexto.
        fetch(`${backendUrl}/api/usuarios`)
            .then((response) => response.json())
            .then((responseData) => {
                setUsuarios(responseData);
                setUsuariosFiltrados(responseData);
            })
            .catch((error) => console.error(error));
        fetch(`${backendUrl}/api/servicios`)
            .then((response) => response.json())
            .then((responseData) => setServicio(responseData))
            .catch((error) => console.error(error));
        fetch(`${backendUrl}/api/localidades`)
            .then((response) => response.json())
            .then((responseData) => setLocalidad(responseData))
            .catch((error) => console.error(error));
        fetch(`${backendUrl}/api/provincias`)
            .then((response) => response.json())
            .then((responseData) => setProvincia(responseData))
            .catch((error) => console.error(error));
    }, []);
    const login = (usuario) => {
        // Lógica para iniciar sesión
        setUsuario(usuario);
    };

    const logout = () => {
        // Lógica para cerrar sesión
        setUsuario(null);
    };

    // const login = async (email, password) => {
    //     try {
    //         // Lógica para iniciar sesión y obtener la información del usuario
    //         const response = await fetch('/api/usuario', {
    //             method: 'POST',
    //             headers: {
    //                 'Content-Type': 'application/json',
    //             },
    //             body: JSON.stringify({ email, password }),
    //         });

    //         if (response.ok) {
    //             const userData = await response.json();
    //             setUsuario(userData);
    //         } else {
    //             throw new Error('Credenciales incorrectas');
    //         }
    //     } catch (error) {
    //         console.error('Error al iniciar sesión:', error);
    //         throw error;
    //     }
    // };

    // const logout = () => {
    //     // Lógica para cerrar sesión y actualizar el estado del usuario
    //     setUsuario(null);
    // };

    // Función para registrar un nuevo usuario
    return (
        <ServicioContext.Provider
            value={{
                usuarios,
                usuario,
                usuariosFiltrados,
                servicios,
                provincias,
                localidades,
                center,
                zoom,
                login,
                logout,
                setUsuario,
                setUsuarios,
                setUsuariosFiltrados,
                setCenter,
                setZoom,
            }}>
            {children}
        </ServicioContext.Provider>
    );
};
ServicioProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export { ServicioProvider };

export default ServicioContext;