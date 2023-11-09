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
// Mostrar imagenes usuario
export const getImg = async (req, res) => {
    try {
        const usuario = await Usuario.findByPk(req.params.id); // Encuentra el usuario por ID o el identificador de imagen
        if (!usuario || !usuario.Foto_Perfil) {
            return res.status(404).json({ message: 'Imagen no encontrada' });
        }
        // Enviar la imagen al cliente
        res.setHeader('Content-Type', 'image/jpeg'); // Establecer el tipo de contenido como imagen JPEG
        res.end(usuario.Foto_Perfil); // Envía la imagen JPEG al cliente
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al servir la imagen' });
    }
}

//Crear un Usuario
export const createUsuario = async (req, res) => {
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

export const filterUsuario = async (req, res) => {
    try {
        const usuario = await Usuario.findAll({
            where: { 
                Id_Servicio:req.params.Id_Servicio,
                Id_Localidad: req.params.Id_Localidad
            }
        })
        res.json(usuario[0])
    } catch (error) {
        res.json( {message: error.message} )
    }
}