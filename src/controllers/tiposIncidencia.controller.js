const TipoIncidenciaService = require('../services/tiposIncidencia.service');

const TipoIncidenciaController = {

    async createTipoIncidencia(req, res) {
        try {
            const id = await TipoIncidenciaService.createTipoIncidencia(req.body);
            res.json({
                message: "Tipo Incidencia creado",
                id_permiso: id
            });
        } catch (error) {
            res.status(500).json({
                error: error.message
            });
        }
    },

    async getListTipoIncidencia(req, res) {
        try {
            const permiso = await TipoIncidenciaService.getListTipoIncidencia();
            res.json(permiso);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
    async getTipoIncidenciaById(req, res) {
        try {
            const permiso = await TipoIncidenciaService.getTipoIncidenciaById(req.params.id);
            res.json(permiso);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
    async updateTipoIncidencia(req, res) {
        try {
            const permiso = await TipoIncidenciaService.updateTipoIncidencia(req.params.id, req.body);
            res.json(permiso);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
    async removeTipoIncidencia(req, res) {
        try {
            const permiso = await TipoIncidenciaService.removeTipoIncidencia(req.params.id);
            res.json(permiso);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }


};

module.exports = TipoIncidenciaController;