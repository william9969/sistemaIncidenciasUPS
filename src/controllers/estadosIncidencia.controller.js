const EstadoIncidenciaService = require('../services/estadosIncidencia.service');

const EstadoIncidenciaController = {

    async createEstadoIncidencia(req, res) {
        try {
            const id = await EstadoIncidenciaService.createEstadoIncidencia(req.body);
            res.json({
                message: "Estado Incidencia creado",
                id_permiso: id
            });
        } catch (error) {
            res.status(500).json({
                error: error.message
            });
        }
    },

    async getListEstadoIncidencia(req, res) {
        try {
            const permiso = await EstadoIncidenciaService.getListEstadoIncidencia();
            res.json(permiso);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
    async getEstadoIncidenciaById(req, res) {
        try {
            const permiso = await EstadoIncidenciaService.getEstadoIncidenciaById(req.params.id);
            res.json(permiso);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
    async updateEstadoIncidencia(req, res) {
        try {
            const permiso = await EstadoIncidenciaService.updateEstadoIncidencia(req.params.id, req.body);
            res.json(permiso);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
    async removeEstadoIncidencia(req, res) {
        try {
            const permiso = await EstadoIncidenciaService.removeEstadoIncidencia(req.params.id);
            res.json(permiso);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }


};

module.exports = EstadoIncidenciaController;