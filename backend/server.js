import express from "express";
import cors from 'cors';
//Importamos la conexion de DB
import db from "./database/db.js"
//Importamos nuestro enrutador
import AppRoutes from './routes/Approutes.js';
const app = express();
const PORT = process.env.PORT || 3000;
const corsOptions = {
    origin: 'https://serviar-i9zqm9zsq-ksenia-jarjurys-projects.vercel.app',
    // ... otras opciones según sea necesario
};

app.use(cors(corsOptions));
app.use(express.json())
app.use('/api', AppRoutes);

try {
    await db.authenticate()
    console.log('Conexion exitosa a la DB')
} catch (error) {
    console.log(`El error de conexion es: ${error}`)
}

app.listen(PORT, () => {
    console.log(`'Server UP running in: ${PORT}`)
})