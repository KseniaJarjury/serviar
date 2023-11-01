import express from 'express';
import { createUsuario, deleteUsuario, filterUsuario, getAllUsuario, getImg, getUsuario, updateUsuario } from '../controllers/UsuarioController.js';
import { getAllServicio, getServicio, createServicio} from '../controllers/ServicioControllers.js';
import { getAllProvincia, getProvincia} from '../controllers/ProvinciaControllers.js';
import { getAllLocalidad } from '../controllers/LocalidadControllers.js';

const router = express.Router();

//Usuarios
router.get('/usuario', getAllUsuario);
router.get('/usuario/:Id_Usuario', getUsuario);
router.get('/usuario/:Id_Servicio/:Id_Localidad', filterUsuario);
router.get('/imagen/:Id_Usuario', getImg);
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
router.get('/provincia', getProvincia);

//Localidades
router.get('/localidades', getAllLocalidad);

export default router