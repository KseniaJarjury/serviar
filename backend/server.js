import express from "express";
import cors from 'cors';
//Importamos la conexion de DB
import db from "./database/db.js"
//Importamos nuestro enrutador
import AppRoutes from './routes/Approutes.js';
import { config } from 'dotenv';
const app = express();
app.use(cors())
// Middleware para analizar datos de formulario
app.use(express.urlencoded({ extended: true }));
// Middleware para analizar datos JSON en el cuerpo de la solicitud
app.use(express.json())
app.use((req, res, next) => {
    console.log(`Solicitud recibida: ${req.method} ${req.url}`);
    next();
  });
app.use('/api', AppRoutes);
config();

try {
    await db.authenticate()
    console.log('Conexion exitosa a la DB')
} catch (error) {
    console.log(`El error de conexion es: ${error}`)
}

app.listen(3000, () => {
    console.log('Server UP running in http://localhost:3000/')
})