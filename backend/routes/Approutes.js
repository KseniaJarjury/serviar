import express from 'express';
import { createUsuario, deleteUsuario, filterUsuario, getAllUsuario, getImg, getUsuario, updateUsuario } from '../controllers/UsuarioController.js';
import { getAllServicio, getServicio, createServicio, updateServicio, deleteServicio} from '../controllers/ServicioControllers.js';
import { getAllProvincia, getProvincia} from '../controllers/ProvinciaControllers.js';
import { createLocalidad, deleteLocalidad, getAllLocalidad, getLocalidad, updateLocalidad } from '../controllers/LocalidadControllers.js';

const router = express.Router();

//Usuarios
router.get('/usuarios', getAllUsuario);
router.get('/usuario/:Id_Usuario', getUsuario);
router.get('/usuario/:Id_Servicio/:Id_Localidad', filterUsuario);
router.get('/imagen/:Id_Usuario', getImg);
router.post('/registrar', createUsuario);
router.put('/usuario/:Id_Usuario', updateUsuario);
router.delete('/usuario/:Id_Usuario', deleteUsuario);

//Servicios
router.get('/servicios', getAllServicio);
router.get('/servicios/:Id_Servicio', getServicio);
router.post('/servicios', createServicio);
router.put('/servicios/:Id_Servicio', updateServicio);
router.delete('/servicios/:Id_Servicio', deleteServicio);

//Provincias
router.get('/provincias', getAllProvincia);
router.get('/provincia', getProvincia);

//Localidades
router.get('/localidades', getAllLocalidad);
router.get('/localidades/:Id_Localidad', getLocalidad);
router.post('/localidades', createLocalidad);
router.put('/localidades/:Id_Localidad', updateLocalidad);
router.delete('/localidades/:Id_Localidad', deleteLocalidad);


export default router