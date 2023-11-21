import express from "express";
import cors from 'cors';
//Importamos la conexion de DB
import db from "./database/db.js"
//Importamos nuestro enrutador
import AppRoutes from './routes/Approutes.js';
const app = express();
const PORT = process.env.PORT || 3000;
app.use(cors())
app.use(express.json())
app.use('/api', AppRoutes);

try {
    await db.authenticate()
    console.log('Conexion exitosa a la DB')
} catch (error) {
    console.log(`El error de conexion es: ${error}`)
}

app.listen(PORT, () => {
    console.log('Server UP running in http://localhost:3000/')
})