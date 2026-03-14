const express = require('express');
const router = express.Router();

const TipoIncidenciaController = require('../controllers/tiposIncidencia.controller');

router.get('/', TipoIncidenciaController.getListTipoIncidencia);
router.get('/:id', TipoIncidenciaController.getTipoIncidenciaById);
router.post('/', TipoIncidenciaController.createTipoIncidencia);
router.put('/:id', TipoIncidenciaController.updateTipoIncidencia);
router.delete('/:id', TipoIncidenciaController.removeTipoIncidencia);


module.exports = router;