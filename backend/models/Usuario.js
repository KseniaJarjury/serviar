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
    Foto_Perfil: {type: DataTypes.BLOB('long')},
    Foto_Portada: {type: DataTypes.BLOB('long')},
    CUIT: {type: DataTypes.NUMBER},
    NombreApellido: {type: DataTypes.STRING},
    Telefono: {type: DataTypes.NUMBER},
    email: {type: DataTypes.STRING},
    password: {type: DataTypes.DATEONLY},
    Id_Localidad: {type: DataTypes.INTEGER},
    Id_Servicio: {type: DataTypes.INTEGER},
}, {
    timestamps: false,
    tableName: 'usuario'
});



  
export default Usuario;


