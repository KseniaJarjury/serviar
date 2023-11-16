//Importamos la conexion a la DB
import db from "../database/db.js";
import bcrypt from 'bcrypt';
//Importamos sequelize
import { DataTypes } from "sequelize";

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
// Antes de crear un nuevo usuario, hashash la contraseña
Usuario.beforeCreate(async (usuario) => {
    const salt = await bcrypt.genSalt(10);
    usuario.password = await bcrypt.hash(usuario.password, salt);
});
export default Usuario;