//Importamos la conexion a la DB
import db from "../database/db.js";
import Provincia from './Provincia.js';
//Importamos sequelize
import { DataTypes } from "sequelize";

const Localidad = db.define('Localidad',{
    Id_Localidad: {
        type: DataTypes.INTEGER,
        primaryKey: true, // Esto define la columna Id_Usuario como clave primaria
    },
    Localidad: {type: DataTypes.STRING},
    CP: {type: DataTypes.INTEGER},
    Id_Provincia: { type: DataTypes.INTEGER },
}, {
    timestamps: false,
    tableName: 'localidad'
});
Provincia.hasMany(Localidad, { foreignKey: 'Id_Provincia' });
Localidad.belongsTo(Provincia, { foreignKey: 'Id_Provincia' });
export default Localidad;