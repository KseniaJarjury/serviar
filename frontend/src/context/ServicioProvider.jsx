import { createContext, useState, useEffect } from "react";
import PropTypes from "prop-types";

const ServicioContext = createContext();

const ServicioProvider = ({ children }) => {

    const [usuarios, setUsuario] = useState([]);
    const [usuariosRecomendados, setUsuariosRecomendados] = useState([]);
    const [servicios, setServicio] = useState([]);
    const [provincias, setProvincia] = useState([]);
    const [localidades, setLocalidad] = useState([]);
    const defaultSelect = "";
    const [selectedProvincia, setSelectedProvincia] = useState(defaultSelect);
    const [selectedLocalidad, setSelectedLocalidad] = useState(defaultSelect);
    const [selectedServicio, setSelectedServicio] = useState(defaultSelect);


    useEffect(() => {
        // Realiza una solicitud a tu backend para obtener los datos y actualiza el estado del contexto.
        fetch('/api/usuarios')
            .then((response) => response.json())
            .then((responseData) => setUsuario(responseData))
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

    useEffect(() => {
        // Actualiza los usuarios recomendados aleatorios cuando los datos de usuarios se cargan o cambian.
        if (usuarios.length > 0) {
            const randomUsers = usuarios.sort(() => Math.random() - 0.5).slice(0, 10);
            setUsuariosRecomendados(randomUsers);
        }
    }, [usuarios]);

    // Realiza el filtrado de usuarios según la selección del usuario.
    const datosUsuariosFiltrados = usuarios.filter((usuario) => {
        const localidad = localidades.find((loc) => loc.Id_Localidad === usuario.Id_Localidad);

        return (
            (localidad && localidad.Id_Provincia.toString() === selectedProvincia || selectedProvincia === "") &&
            (usuario.Id_Localidad.toString() === selectedLocalidad || selectedLocalidad === "") &&
            (usuario.Id_Servicio.toString() === selectedServicio || selectedServicio === "")
        );
    });

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
                setUsuario(userData);
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
                servicios,
                provincias,
                localidades,
                datosUsuariosFiltrados,
                usuariosRecomendados,
                login,
                logout,
                setSelectedProvincia,
                setSelectedLocalidad,
                setSelectedServicio
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