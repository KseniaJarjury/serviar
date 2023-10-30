//Importamos el Model
import Servicio from "../models/Servicio.js";

//  Metodos para el CRUD

//Mostrar todos los Servicios
export const getAllServicio = async (req, res) => {
    try {
        const servicios = await Servicio.findAll()
        res.json(servicios)
    } catch (error) {
        res.json ( {message: error.message} )
    }
}

//Mostar un servicio
export const getServicio = async (req, res) => {
    try {
        const servicio = await Servicio.findAll({
            where: { Id_Servicio:req.params.Id_Servicio}
        })
        res.json(servicio[0])
    } catch (error) {
        res.json( {message: error.message} )
    }
}

//Crear un Servicio
export const createServicio = async (resq, res) => {
    try {
        await Servicio.create(req.body)
        res.json({
            "message": "Servicio creado correctamente!"
        })
    } catch (error) {
        res.json( {message: error.message} ) 
    }
}
//Actualizar un Servicio
export const updateServicio = async (req, res) => {
    try {
        await Servicio.update(req.body, {
            where: { Id_Servicio:req.params.Id_Servicio}
        })
        res.json({
            "message": "Servicio actualizado correctamente!"
        })
    } catch (error) {
        res.json( {message: error.message} )
    }
}

//Delete un Servicio
export const deleteServicio = async (req, res) => {
    try {
        await Servicio.destroy( {
            where: { Id_Usuario:req.params.Id_Usuario}
        })
        res.json({
            "message": "Servicio eliminado correctamente!"
        })
    } catch (error) {
        res.json( {message: error.message} )
    }
}