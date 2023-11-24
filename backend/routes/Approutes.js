import express from 'express';
import { createUsuario, deleteUsuario, filterUsuario, getAllUsuario, getUsuario, updateUsuario, login } from '../controllers/UsuarioController.js';
import { getAllServicio, getServicio, createServicio, updateServicio, deleteServicio } from '../controllers/ServicioControllers.js';
import { getAllProvincia, getProvincia } from '../controllers/ProvinciaControllers.js';
import { getAllLocalidad, getLocalidad, createLocalidad, updateLocalidad, deleteLocalidad } from '../controllers/LocalidadControllers.js';
import multer from 'multer'
import Usuario from "../models/Usuario.js";

const router = express.Router();


const storage = multer.memoryStorage();
const fileUpload = multer({ storage: storage });

//Usuarios
router.get('/usuarios', getAllUsuario);
router.get('/usuario/:Id_Usuario', getUsuario);
router.get('/usuario/:Id_Servicio/:Id_Localidad', filterUsuario);
router.post('/registrar', createUsuario);
router.put('/usuario/:Id_Usuario', updateUsuario);
router.delete('/usuario/:Id_Usuario', deleteUsuario);
router.post('/login', login);
router.get('/getImg/:Id_Usuario', async (req,res) =>{
    try {
        const usuario = await Usuario.findByPk(req.params.Id_Usuario); // Encuentra el usuario por ID o el identificador de imagen
        if (!usuario || !usuario.Foto_Perfil) {
            return res.status(404).json({ message: 'Imagen no encontrada' });
        }
        console.log(usuario.Foto_Perfil)
        // Enviar la imagen al cliente
        res.type('image/jpeg');
        res.send(usuario.Foto_Perfil); // Envía la imagen JPEG al cliente
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al servir la imagen' });
    }
});
router.post('/updateImgPerf', fileUpload.single('image'), async (req,res) =>{
    console.log(req.file)
    const datos = JSON.parse(req.body.datos);
    console.log(datos.Id_Usuario)
    await Usuario.update(
        { Foto_Perfil: req.file.buffer },
        { where: { Id_Usuario: datos.Id_Usuario } }
      );
    res.json({
    message: 'Imagen actualizada correctamente.',
    });
});

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