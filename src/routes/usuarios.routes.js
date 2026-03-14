const express = require('express');
const router = express.Router();

const UsuariosController = require('../controllers/usuarios.controller');

router.get('/', UsuariosController.getListUser);
router.get('/:id', UsuariosController.getUserById);
router.post('/', UsuariosController.createUser);
router.put('/:id', UsuariosController.updateUser);
router.delete('/:id', UsuariosController.removeUser);


module.exports = router;