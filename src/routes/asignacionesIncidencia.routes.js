const express = require('express');
const router = express.Router();

const AsignacionIncidenciaController = require('../controllers/asignacionesIncidencia.controller');

router.get('/', AsignacionIncidenciaController.getListAsignacionIncidencia);
router.get('/:id', AsignacionIncidenciaController.getAsignacionIncidenciaById);
router.post('/', AsignacionIncidenciaController.createAsignacionIncidencia);
router.put('/:id', AsignacionIncidenciaController.updateAsignacionIncidencia);
router.delete('/:id', AsignacionIncidenciaController.removeAsignacionIncidencia);


module.exports = router;