const express = require('express');
const router = express.Router();

const EstadoIncidenciaController = require('../controllers/estadosIncidencia.controller');

router.get('/', EstadoIncidenciaController.getListEstadoIncidencia);
router.get('/:id', EstadoIncidenciaController.getEstadoIncidenciaById);
router.post('/', EstadoIncidenciaController.createEstadoIncidencia);
router.put('/:id', EstadoIncidenciaController.updateEstadoIncidencia);
router.delete('/:id', EstadoIncidenciaController.removeEstadoIncidencia);


module.exports = router;