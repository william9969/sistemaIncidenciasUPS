const express = require('express');
const router = express.Router();

const AuditoriaController = require('../controllers/auditoria.controller');

router.get('/', AuditoriaController.getListAuditoria);
router.get('/:id', AuditoriaController.getAuditoriaById);
router.post('/', AuditoriaController.createAuditoria);
router.put('/:id', AuditoriaController.updateAuditoria);
router.delete('/:id', AuditoriaController.removeAuditoria);


module.exports = router;