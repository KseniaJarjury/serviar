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
        fetch('/api/usuario')
            .then((response) => response.json())
            .then((responseData) => setUsuario(responseData))
            .catch((error) => console.error(error));
        fetch('/api/servicios')
            .then((response) => response.json())
            .then((responseData) => setServicio(responseData))
            .catch((error) => console.error(error));
        fetch('/api/provincias')
            .then((response) => response.json())
            .then((responseData) => setProvincia(responseData))
            .catch((error) => console.error(error));
        fetch('/api/localidades')
            .then((response) => response.json())
            .then((responseData) => setLocalidad(responseData))
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
    const datosUsuariosFiltrados = Array.isArray(usuarios)
    ? usuarios.filter((usuario) => {
        return (
            (usuario.Id_Localidad === selectedLocalidad || selectedLocalidad === "") &&
            (Array.isArray(usuario.Id_Servicio) && usuario.Id_Servicio.includes(selectedServicio) || selectedServicio === "")
        );
    })
    : [];



    return (
        <ServicioContext.Provider
            value={{
                usuarios,
                servicios,
                provincias,
                localidades,
                datosUsuariosFiltrados,
                usuariosRecomendados,
                setSelectedProvincia,
                setSelectedServicio,
                setSelectedLocalidad
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