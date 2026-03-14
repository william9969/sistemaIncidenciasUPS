const express = require('express');
const router = express.Router();

const PrioridadController = require('../controllers/prioridades.controller');

router.get('/', PrioridadController.getListPrioridad);
router.get('/:id', PrioridadController.getPrioridadById);
router.post('/', PrioridadController.createPrioridad);
router.put('/:id', PrioridadController.updatePrioridad);
router.delete('/:id', PrioridadController.removePrioridad);


module.exports = router;