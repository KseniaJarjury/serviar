import express from 'express';
import multer from 'multer';
import { createUsuario, deleteUsuario, filterUsuario, getAllUsuario, getUsuario, updateUsuario, cargarImagenPerfil, login } from '../controllers/UsuarioController.js';
import { getAllServicio, getServicio, createServicio, updateServicio, deleteServicio } from '../controllers/ServicioControllers.js';
import { getAllProvincia, getProvincia } from '../controllers/ProvinciaControllers.js';
import { getAllLocalidad } from '../controllers/LocalidadControllers.js';

const router = express.Router(); // Asegúrate de descomentar esta línea
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });



// Usuarios
router.get('/usuario', getAllUsuario);
router.get('/usuario/:Id_Usuario', getUsuario);
router.get('/usuario/:Id_Servicio/:Id_Localidad', filterUsuario);
// router.get('/imagen/:Id_Usuario', getImg);
router.post('/usuario', createUsuario);
router.put('/imagen/:Id_Usuario', cargarImagenPerfil);
router.post('/registrar', createUsuario);
router.post('/login', login);
router.put('/usuario/:Id_Usuario', updateUsuario);
router.delete('/usuario/:Id_Usuario', deleteUsuario);

// Servicios
router.get('/servicios', getAllServicio);
router.get('/servicios/:Id_Servicio', getServicio);
router.post('/servicios', createServicio);
router.put('/servicios/:Id_Servicio', updateUsuario);
router.delete('/servicios/:Id_Servicio', deleteUsuario);

// Provincias
router.get('/provincias', getAllProvincia);
router.get('/provincia', getProvincia);

// Localidades
router.get('/localidades', getAllLocalidad);

export default router;
