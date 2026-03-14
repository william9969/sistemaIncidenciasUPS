const RolPermisoService = require('../services/rolesPermisos.service');

const RolPermisoController = {

    async createRolPermiso(req, res) {
        try {
            const id = await RolPermisoService.createRolPermiso(req.body);
            res.json({
                message: "Rol Permiso creado",
                id_rol_permiso: id
            });
        } catch (error) {
            res.status(500).json({
                error: error.message
            });
        }
    },

    async getListRolPermiso(req, res) {
        try {
            const rolpermiso = await RolPermisoService.getListRolPermiso();
            res.json(rolpermiso);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
    async getRolPermisoById(req, res) {
        try {
            const rolpermiso = await RolPermisoService.getRolPermisoById(req.params.id);
            res.json(rolpermiso);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
    async updateRolPermiso(req, res) {
        try {
            const rolpermiso = await RolPermisoService.updateRolPermiso(req.params.id, req.body);
            res.json(rolpermiso);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
    async removeRolPermiso(req, res) {
        try {
            const rolpermiso = await RolPermisoService.removeRolPermiso(req.params.id);
            res.json(rolpermiso);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }


};

module.exports = RolPermisoController;