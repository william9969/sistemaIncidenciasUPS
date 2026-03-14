const AuditoriaService = require('../services/auditoria.service');

const AuditoriaController = {

    async createAuditoria(req, res) {
        try {
            const id = await AuditoriaService.createAuditoria(req.body);
            res.json({
                message: "Permiso creado",
                id_permiso: id
            });
        } catch (error) {
            res.status(500).json({
                error: error.message
            });
        }
    },

    async getListAuditoria(req, res) {
        try {
            const auditoria = await AuditoriaService.getListAuditoria();
            res.json(auditoria);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
    async getAuditoriaById(req, res) {
        try {
            const auditoria = await AuditoriaService.getAuditoriaById(req.params.id);
            res.json(auditoria);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
    async updateAuditoria(req, res) {
        try {
            const auditoria = await AuditoriaService.updateAuditoria(req.params.id, req.body);
            res.json(auditoria);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
    async removeAuditoria(req, res) {
        try {
            const auditoria = await AuditoriaService.removeAuditoria(req.params.id);
            res.json(auditoria);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }


};

module.exports = AuditoriaController;