//Importamos el Model
import Provincia from "../models/Provincia.js";

//  Metodos para el CRUD

//Mostrar todos los Provincias
export const getAllProvincia = async (req, res) => {
    try {
        const provincias = await Provincia.findAll()
        res.json(provincias)
    } catch (error) {
        res.json ( {message: error.message} )
    }
}