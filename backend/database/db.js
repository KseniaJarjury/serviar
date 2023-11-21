import { Sequelize } from "sequelize";
import dotenv from "dotenv";

// Cargar variables de entorno desde el archivo .env
dotenv.config();

const { DB_HOST, DB_PORT, DB_DATABASE, DB_USER, DB_PASSWORD, DB_CONNECTION } = process.env;

// Crear conexión a la base de datos
const db = new Sequelize(DB_DATABASE, DB_USER, DB_PASSWORD, {
    host: DB_HOST,
    port: DB_PORT,
    dialect: DB_CONNECTION,
});

export default db;