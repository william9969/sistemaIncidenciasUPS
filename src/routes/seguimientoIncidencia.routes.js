const express = require('express');
const router = express.Router();

const SeguimientoIncidenciaController = require('../controllers/seguimientoIncidencia.controller');

router.get('/', SeguimientoIncidenciaController.getListSeguimientoIncidencia);
router.get('/:id', SeguimientoIncidenciaController.getSeguimientoIncidenciaById);
router.post('/', SeguimientoIncidenciaController.createSeguimientoIncidencia);
router.put('/:id', SeguimientoIncidenciaController.updateSeguimientoIncidencia);
router.delete('/:id', SeguimientoIncidenciaController.removeSeguimientoIncidencia);


module.exports = router;