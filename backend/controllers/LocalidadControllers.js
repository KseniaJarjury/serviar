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
//Mostar una localidad
export const getLocalidad = async (req, res) => {
    try {
        const localidad = await Localidad.findAll({
            where: { Id_Localidad:req.params.Id_Localidad}
        })
        res.json(localidad[0])
    } catch (error) {
        res.json( {message: error.message} )
    }
}

//Crear una Localidad
export const createLocalidad = async (resq, res) => {
    try {
        await Localidad.create(req.body)
        res.json({
            "message": "Localidad creado correctamente!"
        })
    } catch (error) {
        res.json( {message: error.message} ) 
    }
}
//Actualizar una Localidad
export const updateLocalidad = async (req, res) => {
    try {
        await Localidad.update(req.body, {
            where: { Id_Localidad:req.params.Id_Localidad}
        })
        res.json({
            "message": "Localidad actualizado correctamente!"
        })
    } catch (error) {
        res.json( {message: error.message} )
    }
}

//Delete una Localidad
export const deleteLocalidad = async (req, res) => {
    try {
        await Localidad.destroy( {
            where: { Id_Usuario:req.params.Id_Usuario}
        })
        res.json({
            "message": "Localidad eliminado correctamente!"
        })
    } catch (error) {
        res.json( {message: error.message} )
    }
}