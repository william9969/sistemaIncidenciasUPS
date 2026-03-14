const express = require('express');
const router = express.Router();

const RolesController = require('../controllers/roles.controller');

router.get('/', RolesController.getListRol);
router.get('/:id', RolesController.getRolById);
router.post('/', RolesController.createRol);
router.put('/:id', RolesController.updateRol);
router.delete('/:id', RolesController.removeRol);


module.exports = router;