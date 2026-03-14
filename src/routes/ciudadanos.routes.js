const express = require('express');
const router = express.Router();

const CiudadanoController = require('../controllers/ciudadanos.controller');

router.get('/', CiudadanoController.getListCiudadano);
router.get('/:id', CiudadanoController.getCiudadanoById);
router.post('/', CiudadanoController.createCiudadano);
router.put('/:id', CiudadanoController.updateCiudadano);
router.delete('/:id', CiudadanoController.removeCiudadano);


module.exports = router;