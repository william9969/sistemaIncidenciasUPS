const SeguimientoIncidenciaService = require('../services/seguimientoIncidencia.service');

const SeguimientoIncidenciaController = {

    async createSeguimientoIncidencia(req, res) {
        try {
            const id = await SeguimientoIncidenciaService.createSeguimientoIncidencia(req.body);
            res.json({
                message: "Seguimiento Incidencia creado",
                id_permiso: id
            });
        } catch (error) {
            res.status(500).json({
                error: error.message
            });
        }
    },

    async getListSeguimientoIncidencia(req, res) {
        try {
            const permiso = await SeguimientoIncidenciaService.getListSeguimientoIncidencia();
            res.json(permiso);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
    async getSeguimientoIncidenciaById(req, res) {
        try {
            const permiso = await SeguimientoIncidenciaService.getSeguimientoIncidenciaById(req.params.id);
            res.json(permiso);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
    async updateSeguimientoIncidencia(req, res) {
        try {
            const permiso = await SeguimientoIncidenciaService.updateSeguimientoIncidencia(req.params.id, req.body);
            res.json(permiso);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
    async removeSeguimientoIncidencia(req, res) {
        try {
            const permiso = await SeguimientoIncidenciaService.removeSeguimientoIncidencia(req.params.id);
            res.json(permiso);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }


};

module.exports = SeguimientoIncidenciaController;