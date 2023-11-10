//Importamos la conexion a la DB
import db from "../database/db.js";
//Importamos sequelize
import { DataTypes } from "sequelize";
const express = require('express');
const multer = require('multer');

const app = express();


const storage = multer.memoryStorage();
const upload = multer({ storage: storage });


const Usuario = db.define('Usuario',{
    Id_Usuario: {
        type: DataTypes.INTEGER,
        primaryKey: true, // Esto define la columna Id_Usuario como clave primaria
    },
    Descripcion: {type: DataTypes.STRING},
    Foto_Perfil: {type: DataTypes.STRING},
    Foto_Portada: {type: DataTypes.STRING},
    CUIT: {type: DataTypes.NUMBER},
    NombreApellido: {type: DataTypes.STRING},
    Telefono: {type: DataTypes.NUMBER},
    email: {type: DataTypes.STRING},
    password: {type: DataTypes.DATEONLY},
    Latitud: {type: DataTypes.DECIMAL},
    Longitud: {type: DataTypes.DECIMAL},
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
  
  
export default Usuario;


