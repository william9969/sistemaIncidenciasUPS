const PermisosService = require('../services/permisos.service');

const PermisosController = {

    async createPermisos(req, res) {
        try {
            const id = await PermisosService.createPermisos(req.body);
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

    async getListPermisos(req, res) {
        try {
            const permiso = await PermisosService.getListPermisos();
            res.json(permiso);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
    async getPermisosById(req, res) {
        try {
            const permiso = await PermisosService.getPermisosById(req.params.id);
            res.json(permiso);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
    async updatePermisos(req, res) {
        try {
            const permiso = await PermisosService.updatePermisos(req.params.id, req.body);
            res.json(permiso);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
    async removePermisos(req, res) {
        try {
            const permiso = await PermisosService.removePermisos(req.params.id);
            res.json(permiso);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }


};

module.exports = PermisosController;