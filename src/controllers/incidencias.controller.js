const IncidenciasService = require('../services/incidencias.service');

const IncidenciasController = {

    async createIncidencias(req, res) {
        try {
            const id = await IncidenciasService.createIncidencias(req.body);
            res.json({
                message: "incidencia creado",
                id_permiso: id
            });
        } catch (error) {
            res.status(500).json({
                error: error.message
            });
        }
    },

    async getListIncidencias(req, res) {
        try {
            const incidencia = await IncidenciasService.getListIncidencias();
            res.json(incidencia);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
    async getIncidenciasById(req, res) {
        try {
            const incidencia = await IncidenciasService.getIncidenciasById(req.params.id);
            res.json(incidencia);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
    async updateIncidencias(req, res) {
        try {
            const incidencia = await IncidenciasService.updateIncidencias(req.params.id, req.body);
            res.json(incidencia);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
    async removeIncidencias(req, res) {
        try {
            const incidencia = await IncidenciasService.removeIncidencias(req.params.id);
            res.json(incidencia);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }


};

module.exports = IncidenciasController;