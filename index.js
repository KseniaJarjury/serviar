require('dotenv').config(); 
const mysql = require('mysql2');

const conexion = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
});

conexion.connect((error) => {
    if (error) {
        console.error('Error de conexión: ' + error.message);
        return;
    }
    console.log('Conexión a MySQL establecida.');
    // Realizar consultas y operaciones en la base de datos aquí...
    conexion.query
    conexion.end();
});