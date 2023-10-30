//Importamos el Model
import Localidad from "../models/Localidad.js";

//  Metodos para el CRUD

//Mostrar todos los Provincias
export const getAllLocalidad = async (req, res) => {
    try {
        const localidades = await Localidad.findAll()
        res.json(localidades)
    } catch (error) {
        res.json ( {message: error.message} )
    }
}