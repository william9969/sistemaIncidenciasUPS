const express = require('express');
const router = express.Router();

const EvidenciaResolucionController = require('../controllers/evidenciasResolucion.controller');

router.get('/', EvidenciaResolucionController.getListEvidenciaResolucion);
router.get('/:id', EvidenciaResolucionController.getEvidenciaResolucionById);
router.post('/', EvidenciaResolucionController.createEvidenciaResolucion);
router.put('/:id', EvidenciaResolucionController.updateEvidenciaResolucion);
router.delete('/:id', EvidenciaResolucionController.removeEvidenciaResolucion);


module.exports = router;