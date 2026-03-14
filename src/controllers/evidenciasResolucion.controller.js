const EvidenciaResolucionService = require('../services/evidenciasResolucion.service');

const EvidenciaResolucionController = {

    async createEvidenciaResolucion(req, res) {
        try {
            const id = await EvidenciaResolucionService.createEvidenciaResolucion(req.body);
            res.json({
                message: "Evidencia Resolucion creado",
                id_permiso: id
            });
        } catch (error) {
            res.status(500).json({
                error: error.message
            });
        }
    },

    async getListEvidenciaResolucion(req, res) {
        try {
            const permiso = await EvidenciaResolucionService.getListEvidenciaResolucion();
            res.json(permiso);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
    async getEvidenciaResolucionById(req, res) {
        try {
            const permiso = await EvidenciaResolucionService.getEvidenciaResolucionById(req.params.id);
            res.json(permiso);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
    async updateEvidenciaResolucion(req, res) {
        try {
            const permiso = await EvidenciaResolucionService.updateEvidenciaResolucion(req.params.id, req.body);
            res.json(permiso);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
    async removeEvidenciaResolucion(req, res) {
        try {
            const permiso = await EvidenciaResolucionService.removeEvidenciaResolucion(req.params.id);
            res.json(permiso);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }


};

module.exports = EvidenciaResolucionController;