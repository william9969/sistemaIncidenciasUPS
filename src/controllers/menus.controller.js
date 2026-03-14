const MenuService = require('../services/menus.service');

const MenuController = {

    async createMenu(req, res) {
        try {
            const id = await MenuService.createMenu(req.body);
            res.json({
                message: "Menu creado",
                id_menu: id
            });
        } catch (error) {
            res.status(500).json({
                error: error.message
            });
        }
    },

    async getListMenu(req, res) {
        try {
            const menu = await MenuService.getListMenu();
            res.json(menu);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
    async getMenuById(req, res) {
        try {
            const menu = await MenuService.getMenuById(req.params.id);
            res.json(menu);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
    async updateMenu(req, res) {
        try {
            const menu = await MenuService.updateMenu(req.params.id, req.body);
            res.json(menu);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
    async removeMenu(req, res) {
        try {
            const menu = await MenuService.removeMenu(req.params.id);
            res.json(menu);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }


};

module.exports = MenuController;