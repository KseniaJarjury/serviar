import express from 'express';
import { createUsuario, deleteUsuario, getAllUsuario, getUsuario, updateUsuario } from '../controllers/UsuarioController.js';

const router = express.Router();

router.get('/', getAllUsuario);
router.get('/:Id_Usuario', getUsuario);
router.post('/', createUsuario);
router.put('/:Id_Usuario', updateUsuario);
router.delete('/:Id_Usuario', deleteUsuario);

export default router