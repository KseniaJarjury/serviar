//Importamos el Model
import multer from 'multer';
import Usuario from "../models/Usuario.js";
import bcrypt from 'bcrypt';

//Cloudinary API Externa para imagenes
import {v2 as cloudinary} from 'cloudinary';
          
// Configura multer para manejar la carga de archivos
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });


cloudinary.config({ 
  cloud_name: 'dkf1japx9', 
  api_key: '571633349329286', 
  api_secret: 'jStoOWVFO8P4fW61fkNA9kfBjJI' 
});

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

        // Hashear la contraseña antes de almacenarla en la base de datos
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password, salt);

        // Crear un nuevo usuario
        const nuevoUsuario = await Usuario.create({
            NombreApellido: req.body.NombreApellido,
            email: req.body.email,
            password: hashedPassword,
            Id_Localidad: req.body.Id_Localidad,
            Id_Servicio: req.body.Id_Servicio
        });

        res.status(201).json({
            message: 'Usuario creado correctamente!',
            usuario: {
                Id_Usuario: nuevoUsuario.Id_Usuario,
                email: nuevoUsuario.email,
                password: nuevoUsuario.password,
                Id_Localidad: nuevoUsuario.Id_Localidad,
                Id_Servicio: nuevoUsuario.Id_Servicio
            },
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


// // Mostrar imagenes usuario
// export const getImg = async (req, res) => {
//     try {
//         const usuario = await Usuario.findByPk(req.params.id); // Encuentra el usuario por ID o el identificador de imagen
//         if (!usuario || !usuario.Foto_Perfil) {
//             return res.status(404).json({ message: 'Imagen no encontrada' });
//         }
//         // Enviar la imagen al cliente
//         res.setHeader('Content-Type', 'image/jpeg'); // Establecer el tipo de contenido como imagen JPEG
//         res.end(usuario.Foto_Perfil); // Envía la imagen JPEG al cliente
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ message: 'Error al servir la imagen' });
//     }
// }

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
      const usuario = await Usuario.findOne({ where: { email, password } });
      // Verifica si el usuario existe y si la contraseña es correcta
  
      if (usuario && password) {
        res.json({ message: 'Inicio de sesión exitoso' });
      } else {
        res.status(401).json({ message: 'Credenciales incorrectas' });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error al iniciar sesión' });
    }
  }  


  import { writeFileSync } from 'fs';



// Método para subir imagen de perfil
export const uploadProfileImage = async (req, res, next) => {
    const usuarioId = req.params.Id_Usuario;

    try {
        const usuario = await Usuario.findByPk(usuarioId);

        if (!usuario) {
            return res.status(404).json({ message: 'Usuario no encontrado' });
        }

        if (!req.file) {
            return res.status(400).json({ message: 'No se proporcionó ninguna imagen' });
        }

        // Sube la imagen a Cloudinary
        const result = await cloudinary.uploader.upload_stream(
            { folder: `serviar/usuarios/${usuarioId}/perfil` },
            async (error, result) => {
                if (error) {
                    console.error(error);
                    return res.status(500).json({ message: 'Error al cargar la foto de perfil', error: error.message });
                }

                // Actualiza la URL de la foto de perfil en la base de datos
                usuario.Foto_Perfil = result.secure_url;

                // Guarda los cambios en la base de datos
                await usuario.save();

                res.status(201).json({
                    message: 'Foto de perfil cargada correctamente',
                    profileImageURL: result.secure_url,
                });
            }
        ).end(req.file.buffer);
    } catch (error) {
        console.error(error);
        console.log('URL de retorno:', result.secure_url);
        return res.status(500).json({ message: 'Error al cargar la foto de perfil', error: error.message });
    }
};