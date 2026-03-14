const express = require('express');
const router = express.Router();

const UsuariosRolController = require('../controllers/usuariosRoles.controller');

router.get('/', UsuariosRolController.getListUsuariosRol);
router.get('/:id', UsuariosRolController.getUsuariosRolById);
router.post('/', UsuariosRolController.createUsuariosRol);
router.put('/:id', UsuariosRolController.updateUsuariosRol);
router.delete('/:id', UsuariosRolController.removeUsuariosRol);


module.exports = router;