const express = require('express');
const router = express.Router();

const IncidenciasController = require('../controllers/incidencias.controller');

router.get('/', IncidenciasController.getListIncidencias);
router.get('/:id', IncidenciasController.getIncidenciasById);
router.post('/', IncidenciasController.createIncidencias);
router.put('/:id', IncidenciasController.updateIncidencias);
router.delete('/:id', IncidenciasController.removeIncidencias);


module.exports = router;