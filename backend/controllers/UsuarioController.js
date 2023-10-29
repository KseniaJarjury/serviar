//Importamos el Model
import Usuario from "../models/Usuario.js";

//  Metodos para el CRUD

//Mostrar todos los Usuarios
export const getAllUsuario = async (req, res) => {
    try {
        const usuarios = await Usuario.findAll()
        res.json(usuarios)
    } catch (error) {
        res.json ( {message: error.message} )
    }
}

//Mostar un usuario
export const getUsuario = async (req, res) => {
    try {
        const usuario = await Usuario.findAll({
            where: { Id_Usuario:req.params.Id_Usuario}
        })
        res.json(usuario[0])
    } catch (error) {
        res.json( {message: error.message} )
    }
}

//Crear un Usuario
export const createUsuario = async (resq, res) => {
    try {
        await Usuario.create(req.body)
        res.json({
            "message": "Usuario creado correctamente!"
        })
    } catch (error) {
        res.json( {message: error.message} ) 
    }
}
//Actualizar un Usuario
export const updateUsuario = async (req, res) => {
    try {
        await Usuario.update(req.body, {
            where: { Id_Usuario:req.params.Id_Usuario}
        })
        res.json({
            "message": "Usuario actualizado correctamente!"
        })
    } catch (error) {
        res.json( {message: error.message} )
    }
}

//Delete un Usuario
export const deleteUsuario = async (req, res) => {
    try {
        await Usuario.destroy( {
            where: { Id_Usuario:req.params.Id_Usuario}
        })
        res.json({
            "message": "Usuario eliminado correctamente!"
        })
    } catch (error) {
        res.json( {message: error.message} )
    }
}