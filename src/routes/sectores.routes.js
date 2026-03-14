const express = require('express');
const router = express.Router();

const SectorController = require('../controllers/sectores.controller');

router.get('/', SectorController.getListSector);
router.get('/:id', SectorController.getSectorById);
router.post('/', SectorController.createSector);
router.put('/:id', SectorController.updateSector);
router.delete('/:id', SectorController.removeSector);


module.exports = router;