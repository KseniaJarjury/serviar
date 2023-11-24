//Importamos la conexion a la DB
import db from "../database/db.js";
import bcrypt from 'bcrypt';
//Importamos sequelize
import { DataTypes } from "sequelize";
import Localidad from "./Localidad.js";


// const storage = multer.memoryStorage();
// const upload = multer({ storage: storage });


const Usuario = db.define('Usuario', {
    Id_Usuario: {
        type: DataTypes.INTEGER,
        primaryKey: true, // Esto define la columna Id_Usuario como clave primaria
        autoIncrement: true,
    },
    Descripcion: { type: DataTypes.STRING },
    Foto_Perfil: { type: DataTypes.STRING },
    Foto_Portada: { type: DataTypes.STRING },
    CUIT: { type: DataTypes.NUMBER },
    NombreApellido: { type: DataTypes.STRING },
    Telefono: { type: DataTypes.NUMBER },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
            len: [0,60],
        }
    },
    Id_Localidad: { type: DataTypes.INTEGER },
    Id_Servicio: { type: DataTypes.INTEGER },
}, {
    timestamps: false,
    tableName: 'usuario'
});

Usuario.belongsTo(Localidad, { foreignKey: 'Id_Localidad' });
// Antes de crear un nuevo usuario, hashash la contraseña
Usuario.beforeCreate(async (usuario) => {
    try {
        usuario.password = usuario.password.trim();
        const salt = await bcrypt.genSalt(10);
        usuario.password = await bcrypt.hash(usuario.password, salt);
    } catch (error) {
        console.error('Error al hashear la contraseña:', error);
        throw error;
    }
});
// Método para que los usuarios verifiquen la contraseña
Usuario.prototype.authenticate = async function (password) {
    try {
        console.log('Comparando contraseñas:', password, this.password);
        const isMatch = await bcrypt.compare(password, this.password);
        console.log('Resultado de la comparación:', isMatch);
        return isMatch;
    } catch (error) {
        console.error('Error al autenticar:', error);
        throw error;
    }
};

export default Usuario;
