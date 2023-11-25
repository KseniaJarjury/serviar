//Importamos el Model
import Usuario from "../models/Usuario.js";
import jwt from "jsonwebtoken";

//  Metodos para el CRUD

//Mostrar todos los Usuarios
export const getAllUsuario = async (req, res) => {
    try {
        const usuarios = await Usuario.findAll()
        res.json(usuarios)
    } catch (error) {
        res.json({ message: error.message })
    }
}

//Mostar un usuario
export const getUsuario = async (req, res) => {
    try {
        const usuario = await Usuario.findAll({
            where: { Id_Usuario: req.params.Id_Usuario }
        })
        res.json(usuario[0])
    } catch (error) {
        res.json({ message: error.message })
    }
}
// Crear un Usuario
export const createUsuario = async (req, res) => {
    try {
        // Verificar si el usuario ya existe en la base de datos
        const existingUser = await Usuario.findOne({ where: { email: req.body.email } });

        if (existingUser) {
            return res.status(400).json({
                message: 'El correo electrónico ya está registrado. Por favor, elige otro.'
            });
        }

        // Crear un nuevo usuario
        const nuevoUsuario = await Usuario.create({
            NombreApellido: req.body.NombreApellido,
            email: req.body.email,
            password: req.body.password,
            Id_Localidad: req.body.Id_Localidad,
            Id_Servicio: req.body.Id_Servicio
        });

        res.status(201).json({
            message: 'Usuario creado correctamente!',
            usuario: {
                Id_Usuario: nuevoUsuario.Id_Usuario,
                NombreApellido: nuevoUsuario.NombreApellido,
                email: nuevoUsuario.email,
                password: nuevoUsuario.password,
                Id_Localidad: nuevoUsuario.Id_Localidad,
                Id_Servicio: nuevoUsuario.Id_Servicio
            },
        });
    } catch (error) {
        console.error(error)
        res.status(500).json({ message: error.message });
    }
};

//Actualizar un Usuario
export const updateUsuario = async (req, res) => {
    try {
        await Usuario.update(req.body, {
            where: { Id_Usuario: req.params.Id_Usuario }
        })
        res.json({
            "message": "Usuario actualizado correctamente!"
        })
    } catch (error) {
        res.json({ message: error.message })
    }
}

//Delete un Usuario
export const deleteUsuario = async (req, res) => {
    try {
        await Usuario.destroy({
            where: { Id_Usuario: req.params.Id_Usuario }
        })
        res.json({
            "message": "Usuario eliminado correctamente!"
        })
    } catch (error) {
        res.json({ message: error.message })
    }
}

export const filterUsuario = async (req, res) => {
    try {
        const usuario = await Usuario.findAll({
            where: {
                Id_Servicio: req.params.Id_Servicio,
                Id_Localidad: req.params.Id_Localidad
            }
        })
        res.json(usuario[0])
    } catch (error) {
        res.json({ message: error.message })
    }
}


// Método para iniciar sesión
export const login = async (req, res) => {
    const { email, password } = req.body;
    try {
        // Busca al usuario por su correo electrónico
        const usuario = await Usuario.findOne({ where: { email } });
        if (usuario) {
            const isPasswordValid = await usuario.authenticate(password.toString().trim());

            if (isPasswordValid) {
                const token = jwt.sign({ Id_Usuario: usuario.Id_Usuario }, "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", {
                    expiresIn: 36000
                });

                res.json({
                    token: token,
                    expiresIn: 36000,
                    msg: '¡Bienvenido!',
                    usuario: usuario,
                    error: false,
                    auth: true
                });
            } else {
                res.status(401).json({
                    error: 'Credenciales incorrectas',
                    auth: false
                });
            }
        } else {
            res.status(401).json({
                error: 'Credenciales incorrectas',
                auth: false
            });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al iniciar sesión' });
    }
};