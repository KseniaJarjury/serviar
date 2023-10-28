//Importamos la conexion a la DB
import db from "../database/db";
//Importamos sequelize
import { DataTypes } from "sequelize";

const Usuario = db.define('usuario',{
    Id_Usuario: {type: DataTypes.INTEGER},
    Descripcion: {type: DataTypes.STRING},
    Foto_Perfil: {type: DataTypes.BLOB},
    Foto_Portada: {type: DataTypes.BLOB},
    CUIT: {type: DataTypes.NUMBER},
    NombreApellido: {type: DataTypes.STRING},
    Telefono: {type: DataTypes.NUMBER},
    email: {type: DataTypes.STRING},
    password: {type: DataTypes.DATEONLY},
    Id_Localidad: {type: DataTypes.INTEGER},
    Id_Servicio: {type: DataTypes.INTEGER},
})

export default Usuario;