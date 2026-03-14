const express = require('express');
const router = express.Router();

const NotificacionController = require('../controllers/notificaciones.controller');

router.get('/', NotificacionController.getListNotificacion);
router.get('/:id', NotificacionController.getNotificacionById);
router.post('/', NotificacionController.createNotificacion);
router.put('/:id', NotificacionController.updateNotificacion);
router.delete('/:id', NotificacionController.removeNotificacion);


module.exports = router;