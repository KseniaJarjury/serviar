import express from 'express';
// Importamos la conexion a la DB
import db from "../database/db.js";
import bcrypt from 'bcrypt';
//Importamos sequelize
import { DataTypes } from "sequelize";
import express from 'express';
import multer from 'multer';


const router = express.Router();

// const multer = require('multer');

// const storage = multer.memoryStorage();
// const upload = multer({ storage: storage });


const Usuario = db.define('Usuario',{
    Id_Usuario: {
        type: DataTypes.INTEGER,
        primaryKey: true, // Esto define la columna Id_Usuario como clave primaria
        autoIncrement: true,
    },
    Descripcion: {type: DataTypes.STRING},
    Foto_Perfil: {type: DataTypes.STRING},
    Foto_Portada: {type: DataTypes.STRING},
    CUIT: {type: DataTypes.NUMBER},
    NombreApellido: {type: DataTypes.STRING},
    Telefono: {type: DataTypes.NUMBER},
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    Id_Localidad: {type: DataTypes.INTEGER},
    Id_Servicio: {type: DataTypes.INTEGER},
}, {
    timestamps: false,
    tableName: 'usuario'
});

app.post('/cargar-imagen', upload.single('image'), async (req, res) => {
    const imageBuffer = req.file.buffer;
  
    try {
      // Guarda la imagen en la tabla Usuario
      const usuarioId = req.body.usuarioId; // Asegúrate de pasar el ID del usuario desde el cliente
      const usuario = await Usuario.findByPk(usuarioId);
  
      if (!usuario) {
        return res.status(404).json({ message: 'Usuario no encontrado' });
      }
  
      usuario.Foto_Perfil = imageBuffer;
      await usuario.save();
      console.log('Imagen guardada en la base de datos');
      res.status(201).json({ message: 'Imagen de perfil actualizada con éxito' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error al cargar la imagen en la base de datos' });
    }
  });

// Antes de crear un nuevo usuario, hashash la contraseña
Usuario.beforeCreate(async (usuario) => {
    const salt = await bcrypt.genSalt(10);
    usuario.password = await bcrypt.hash(usuario.password, salt);
});
export default Usuario;
