//Importamos la conexion a la DB
import db from "../database/db.js";
//Importamos sequelize
import { DataTypes } from "sequelize";

const Servicio = db.define('Servicio',{
    Id_Servicio: {
        type: DataTypes.INTEGER,
        primaryKey: true, // Esto define la columna Id_Usuario como clave primaria
    },
    Servicio: {type: DataTypes.STRING},
}, {
    timestamps: false,
    tableName: 'Servicio'
});

export default Servicio;