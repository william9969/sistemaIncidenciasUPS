const express = require('express');
const router = express.Router();

const CategoriaIncidenciaController = require('../controllers/categoriasIncidencia.controller');

router.get('/', CategoriaIncidenciaController.getListCategoriaIncidencia);
router.get('/:id', CategoriaIncidenciaController.getCategoriaIncidenciaById);
router.post('/', CategoriaIncidenciaController.createCategoriaIncidencia);
router.put('/:id', CategoriaIncidenciaController.updateCategoriaIncidencia);
router.delete('/:id', CategoriaIncidenciaController.removeCategoriaIncidencia);


module.exports = router;