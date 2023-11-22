import express from 'express';
import multer from 'multer';
import { createUsuario, deleteUsuario, filterUsuario, getAllUsuario, getUsuario, updateUsuario, addImageToGallery, getGalleryImages,  login, uploadProfileImage, getImg, deleteImageFromGallery } from '../controllers/UsuarioController.js';
import { getAllServicio, getServicio, createServicio, updateServicio, deleteServicio } from '../controllers/ServicioControllers.js';
import { getAllProvincia, getProvincia } from '../controllers/ProvinciaControllers.js';
import { getAllLocalidad, getLocalidad, createLocalidad, updateLocalidad, deleteLocalidad } from '../controllers/LocalidadControllers.js';

const storage = multer.memoryStorage(); // Puedes ajustar esto según tus necesidades
const upload = multer({ storage: storage });


const router = express.Router();

//Usuarios
router.get('/usuarios', getAllUsuario);
router.get('/usuario/:Id_Usuario', getUsuario);
router.get('/usuario/:Id_Servicio/:Id_Localidad', filterUsuario);
router.post('/registrar', createUsuario);
router.put('/usuario/:Id_Usuario', updateUsuario);
router.delete('/usuario/:Id_Usuario', deleteUsuario);
router.post('/login', login);
router.post('/usuario/perfil/:Id_Usuario', upload.single('image'), uploadProfileImage);
router.get('/usuario/perfil/:Id_Usuario', getImg);
// Agregar imagen a la galería
router.post('/usuario/galeria/:Id_Usuario', upload.single('image'), addImageToGallery);
// Eliminar imagen de la galería
 router.delete('/usuario/galeria/:Id_Usuario', deleteImageFromGallery);
router.get('/usuario/galeria/:Id_Usuario',getGalleryImages );


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