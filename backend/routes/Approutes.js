import express from 'express';
import { createUsuario, deleteUsuario, getAllUsuario, getUsuario, updateUsuario } from '../controllers/UsuarioController.js';
import { getAllServicio, getServicio, createServicio} from '../controllers/ServicioControllers.js';
import { getAllProvincia } from '../controllers/ProvinciaControllers.js';
import { getAllLocalidad } from '../controllers/LocalidadControllers.js';

const router = express.Router();

//Usuarios
router.get('/usuario', getAllUsuario);
router.get('/usuario/:Id_Usuario', getUsuario);
router.post('/usuario', createUsuario);
router.put('/usuario/:Id_Usuario', updateUsuario);
router.delete('/usuario/:Id_Usuario', deleteUsuario);

//Servicios
router.get('/servicios', getAllServicio);
router.get('/servicios/:Id_Servicio', getServicio);
router.post('/servicios', createServicio);
router.put('/servicios/:Id_Servicio', updateUsuario);
router.delete('/servicios/:Id_Servicio', deleteUsuario);

//Provincias
router.get('/provincias', getAllProvincia);

//Localidades
router.get('/localidades', getAllLocalidad);

export default router