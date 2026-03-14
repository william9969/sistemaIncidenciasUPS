const AdjuntoIncidenciaService = require('../services/adjuntosIncidencia.service');

const AdjuntoIncidenciaController = {

    async createAdjuntoIncidencia(req, res) {
        try {
            const id = await AdjuntoIncidenciaService.createAdjuntoIncidencia(req.body);
            res.json({
                message: "Adjunto Incidencia creado",
                id_permiso: id
            });
        } catch (error) {
            res.status(500).json({
                error: error.message
            });
        }
    },

    async getListAdjuntoIncidencia(req, res) {
        try {
            const permiso = await AdjuntoIncidenciaService.getListAdjuntoIncidencia();
            res.json(permiso);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
    async getAdjuntoIncidenciaById(req, res) {
        try {
            const permiso = await AdjuntoIncidenciaService.getAdjuntoIncidenciaById(req.params.id);
            res.json(permiso);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
    async updateAdjuntoIncidencia(req, res) {
        try {
            const permiso = await AdjuntoIncidenciaService.updateAdjuntoIncidencia(req.params.id, req.body);
            res.json(permiso);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
    async removeAdjuntoIncidencia(req, res) {
        try {
            const permiso = await AdjuntoIncidenciaService.removeAdjuntoIncidencia(req.params.id);
            res.json(permiso);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }


};

module.exports = AdjuntoIncidenciaController;