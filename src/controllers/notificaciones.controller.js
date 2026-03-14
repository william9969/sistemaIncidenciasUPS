const NotificacionService = require('../services/notificaciones.service');

const NotificacionController = {

    async createNotificacion(req, res) {
        try {
            const id = await NotificacionService.createNotificacion(req.body);
            res.json({
                message: "Notificacion creado",
                id_permiso: id
            });
        } catch (error) {
            res.status(500).json({
                error: error.message
            });
        }
    },

    async getListNotificacion(req, res) {
        try {
            const permiso = await NotificacionService.getListNotificacion();
            res.json(permiso);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
    async getNotificacionById(req, res) {
        try {
            const permiso = await NotificacionService.getNotificacionById(req.params.id);
            res.json(permiso);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
    async updateNotificacion(req, res) {
        try {
            const permiso = await NotificacionService.updateNotificacion(req.params.id, req.body);
            res.json(permiso);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
    async removeNotificacion(req, res) {
        try {
            const permiso = await NotificacionService.removeNotificacion(req.params.id);
            res.json(permiso);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }


};

module.exports = NotificacionController;