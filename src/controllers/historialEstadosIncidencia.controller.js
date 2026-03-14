const HistorialEstadoIncidenciaService = require('../services/historialEstadosIncidencia.service');

const HistorialEstadoIncidenciaController = {

    async createHistorialEstadoIncidencia(req, res) {
        try {
            const id = await HistorialEstadoIncidenciaService.createHistorialEstadoIncidencia(req.body);
            res.json({
                message: "Historial Estado Incidencia creado",
                id_permiso: id
            });
        } catch (error) {
            res.status(500).json({
                error: error.message
            });
        }
    },

    async getListHistorialEstadoIncidencia(req, res) {
        try {
            const permiso = await HistorialEstadoIncidenciaService.getListHistorialEstadoIncidencia();
            res.json(permiso);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
    async getHistorialEstadoIncidenciaById(req, res) {
        try {
            const permiso = await HistorialEstadoIncidenciaService.getHistorialEstadoIncidenciaById(req.params.id);
            res.json(permiso);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
    async updateHistorialEstadoIncidencia(req, res) {
        try {
            const permiso = await HistorialEstadoIncidenciaService.updateHistorialEstadoIncidencia(req.params.id, req.body);
            res.json(permiso);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
    async removeHistorialEstadoIncidencia(req, res) {
        try {
            const permiso = await HistorialEstadoIncidenciaService.removeHistorialEstadoIncidencia(req.params.id);
            res.json(permiso);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }


};

module.exports = HistorialEstadoIncidenciaController;