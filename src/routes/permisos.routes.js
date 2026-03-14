const express = require('express');
const router = express.Router();

const PermisosController = require('../controllers/permisos.controller');

router.get('/', PermisosController.getListPermisos);
router.get('/:id', PermisosController.getPermisosById);
router.post('/', PermisosController.createPermisos);
router.put('/:id', PermisosController.updatePermisos);
router.delete('/:id', PermisosController.removePermisos);


module.exports = router;