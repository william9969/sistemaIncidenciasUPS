const express = require('express');
const router = express.Router();

const IncidenciaSectorController = require('../controllers/incidenciasSectores.controller');

router.get('/', IncidenciaSectorController.getListIncidenciaSector);
router.get('/:id', IncidenciaSectorController.getIncidenciaSectorById);
router.post('/', IncidenciaSectorController.createIncidenciaSector);
router.put('/:id', IncidenciaSectorController.updateIncidenciaSector);
router.delete('/:id', IncidenciaSectorController.removeIncidenciaSector);


module.exports = router;