const express = require('express');
const router = express.Router();

const RolPermisoController = require('../controllers/rolesPermisos.controller');

router.get('/', RolPermisoController.getListRolPermiso);
router.get('/:id', RolPermisoController.getRolPermisoById);
router.post('/', RolPermisoController.createRolPermiso);
router.put('/:id', RolPermisoController.updateRolPermiso);
router.delete('/:id', RolPermisoController.removeRolPermiso);


module.exports = router;