import { createContext, useState, useEffect } from "react";
import PropTypes from "prop-types";

const ServicioContext = createContext();

const ServicioProvider = ({ children }) => {

    const [usuarios, setUsuarios] = useState([]);
    const [usuariosFiltrados, setUsuariosFiltrados] = useState([]);
    const [servicios, setServicio] = useState([]);
    const [provincias, setProvincia] = useState([]);
    const [localidades, setLocalidad] = useState([]);
    const [center, setCenter] = useState({ lat: -32.966970, lng: -63.725497 });
    const [zoom, setZoom] = useState(5);


    useEffect(() => {
        // Realiza una solicitud a tu backend para obtener los datos y actualiza el estado del contexto.
        fetch('/api/usuarios')
            .then((response) => response.json())
            .then((responseData) => {
                setUsuarios(responseData);
                setUsuariosFiltrados(responseData);
            })
            .catch((error) => console.error(error));
        fetch('/api/servicios')
            .then((response) => response.json())
            .then((responseData) => setServicio(responseData))
            .catch((error) => console.error(error));
        fetch('/api/localidades')
            .then((response) => response.json())
            .then((responseData) => setLocalidad(responseData))
            .catch((error) => console.error(error));
        fetch('/api/provincias')
            .then((response) => response.json())
            .then((responseData) => setProvincia(responseData))
            .catch((error) => console.error(error));
    }, []);

    const login = async (email, password) => {
        // Aquí debes hacer la solicitud a tu API o base de datos para verificar las credenciales.
        // Si las credenciales son válidas, establece el usuario en el estado.
        try {
            const response = await fetch('/api/usuario', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });

            if (response.ok) {
                const userData = await response.json();
                setUsuarios(userData);
            } else {
                throw new Error('Credenciales incorrectas');
            }
        } catch (error) {
            console.error('Error al iniciar sesión:', error);
            throw error;
        }
    };

    const logout = () => {
        // Aquí puedes limpiar el estado del usuario al cerrar sesión.
        setUser(null);
    };
    return (
        <ServicioContext.Provider
            value={{
                usuarios,
                usuariosFiltrados,
                servicios,
                provincias,
                localidades,
                center,
                zoom,
                login,
                logout,
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