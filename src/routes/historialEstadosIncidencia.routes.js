const express = require('express');
const router = express.Router();

const HistorialEstadoIncidenciaController = require('../controllers/historialEstadosIncidencia.controller');

router.get('/', HistorialEstadoIncidenciaController.getListHistorialEstadoIncidencia);
router.get('/:id', HistorialEstadoIncidenciaController.getHistorialEstadoIncidenciaById);
router.post('/', HistorialEstadoIncidenciaController.createHistorialEstadoIncidencia);
router.put('/:id', HistorialEstadoIncidenciaController.updateHistorialEstadoIncidencia);
router.delete('/:id', HistorialEstadoIncidenciaController.removeHistorialEstadoIncidencia);


module.exports = router;