const RolMenuService = require('../services/rolesMenus.service');

const RolMenuController = {

    async createRolMenu(req, res) {
        try {
            const id = await RolMenuService.createRolMenu(req.body);
            res.json({
                message: "Rol Menu creado",
                id_permiso: id
            });
        } catch (error) {
            res.status(500).json({
                error: error.message
            });
        }
    },

    async getListRolMenu(req, res) {
        try {
            const permiso = await RolMenuService.getListRolMenu();
            res.json(permiso);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
    async getRolMenuById(req, res) {
        try {
            const permiso = await RolMenuService.getRolMenuById(req.params.id);
            res.json(permiso);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
    async updateRolMenu(req, res) {
        try {
            const permiso = await RolMenuService.updateRolMenu(req.params.id, req.body);
            res.json(permiso);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
    async removeRolMenu(req, res) {
        try {
            const permiso = await RolMenuService.removeRolMenu(req.params.id);
            res.json(permiso);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }


};

module.exports = RolMenuController;