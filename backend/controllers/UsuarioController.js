//Importamos el Model
import multer from 'multer';
import Usuario from "../models/Usuario.js";
import Usuario_Imagenes from "../models/Usuario.js";
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

//Mostar un usuarioa
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
export const uploadProfileImage = async (req, res) => {
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
        cloudinary.uploader.upload_stream(
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
        return res.status(500).json({ message: 'Error al cargar la foto de perfil', error: error.message });
    }
};


export const getImg = async (req, res) => {
    const usuarioId = req.params.Id_Usuario;

    try {
        const usuario = await Usuario.findByPk(usuarioId);

        if (!usuario || !usuario.Foto_Perfil) {
            return res.status(404).json({ message: 'Imagen no encontrada' });
        }

        // En lugar de leer directamente desde la base de datos, devuelve la URL de Cloudinary
        const profileImageURL = usuario.Foto_Perfil;

        res.json({
            profileImageURL,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al obtener la imagen' });
    }
};


// Método para agregar imagen a la galería
export const addImageToGallery = async (req, res) => {
    const usuarioId = req.params.Id_Usuario;

    try {
        const usuario = await Usuario.findByPk(usuarioId);

        if (!usuario) {
            return res.status(404).json({ message: 'Usuario no encontrado' });
        }

        if (!req.file) {
            return res.status(400).json({ message: 'No se proporcionó ninguna imagen' });
        }

        // Convertir la imagen a base64
        const base64Image = req.file.buffer.toString('base64');

        // Obtener las imágenes de la galería desde localStorage
        const galleryImages = JSON.parse(localStorage.getItem(`galleryImages_${usuarioId}`)) || [];

        // Agregar la imagen al array
        galleryImages.push(base64Image);

        // Actualizar localStorage
        localStorage.setItem(`galleryImages_${usuarioId}`, JSON.stringify(galleryImages));

        res.status(201).json({
            message: 'Imagen agregada a la galería correctamente',
            galleryImageURL: base64Image, // Puedes devolver la URL o el objeto base64 según tus necesidades
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al agregar imagen a la galería', error: error.message });
    }
};

// Método para obtener las imágenes de la galería
export const getGalleryImages = async (req, res) => {
    const usuarioId = req.params.Id_Usuario;

    try {
        // Obtener las imágenes de localStorage
        const galleryImages = JSON.parse(localStorage.getItem(`galleryImages_${usuarioId}`)) || [];

        res.json({
            galleryImages: galleryImages,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al obtener las imágenes de la galería', error: error.message });
    }
};

// Método para eliminar imagen de la galería
export const deleteImageFromGallery = async (req, res) => {
    const usuarioId = req.params.Id_Usuario;
    const { imageIndex } = req.body;

    try {
        // Obtener las imágenes de localStorage
        let galleryImages = JSON.parse(localStorage.getItem(`galleryImages_${usuarioId}`)) || [];

        // Verificar si la imagen existe en la galería
        if (imageIndex >= 0 && imageIndex < galleryImages.length) {
            // Eliminar la imagen del array
            galleryImages.splice(imageIndex, 1);

            // Actualizar localStorage
            localStorage.setItem(`galleryImages_${usuarioId}`, JSON.stringify(galleryImages));

            res.json({
                message: 'Imagen eliminada de la galería correctamente',
                galleryImages: galleryImages,
            });
        } else {
            res.status(404).json({ message: 'Índice de imagen no válido' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al eliminar imagen de la galería', error: error.message });
    }
};