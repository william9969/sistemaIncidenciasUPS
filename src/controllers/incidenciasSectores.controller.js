const IncidenciaSectorService = require('../services/incidenciasSectores.service');

const IncidenciaSectorController = {

    async createIncidenciaSector(req, res) {
        try {
            const id = await IncidenciaSectorService.createIncidenciaSector(req.body);
            res.json({
                message: "Incidencia sector creado",
                id_permiso: id
            });
        } catch (error) {
            res.status(500).json({
                error: error.message
            });
        }
    },

    async getListIncidenciaSector(req, res) {
        try {
            const permiso = await IncidenciaSectorService.getListIncidenciaSector();
            res.json(permiso);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
    async getIncidenciaSectorById(req, res) {
        try {
            const permiso = await IncidenciaSectorService.getIncidenciaSectorById(req.params.id);
            res.json(permiso);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
    async updateIncidenciaSector(req, res) {
        try {
            const permiso = await IncidenciaSectorService.updateIncidenciaSector(req.params.id, req.body);
            res.json(permiso);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
    async removeIncidenciaSector(req, res) {
        try {
            const permiso = await IncidenciaSectorService.removeIncidenciaSector(req.params.id);
            res.json(permiso);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }


};

module.exports = IncidenciaSectorController;