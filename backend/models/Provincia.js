//Importamos la conexion a la DB
import db from "../database/db.js";
//Importamos sequelize
import { DataTypes } from "sequelize";

const Provincia = db.define('Provincia',{
    Id_Provincia: {
        type: DataTypes.INTEGER,
        primaryKey: true, // Esto define la columna Id_Usuario como clave primaria
    },
    Provincia: {type: DataTypes.STRING},
    LatitudP: {type: DataTypes.DECIMAL},
    LongitudP: {type: DataTypes.DECIMAL},
}, {
    timestamps: false,
    tableName: 'provincia'
});

export default Provincia;