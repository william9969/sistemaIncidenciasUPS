const express = require('express');
const router = express.Router();

const AdjuntoIncidenciaController = require('../controllers/adjuntosIncidencia.controller');

router.get('/', AdjuntoIncidenciaController.getListAdjuntoIncidencia);
router.get('/:id', AdjuntoIncidenciaController.getAdjuntoIncidenciaById);
router.post('/', AdjuntoIncidenciaController.createAdjuntoIncidencia);
router.put('/:id', AdjuntoIncidenciaController.updateAdjuntoIncidencia);
router.delete('/:id', AdjuntoIncidenciaController.removeAdjuntoIncidencia);


module.exports = router;