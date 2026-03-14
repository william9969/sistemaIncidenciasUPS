const MenuModel = require('../models/menus.model');

const MenuService = {

    async createMenu(data) {

        return await MenuModel.createMenu(data);
    },
    async getListMenu() {
        return await MenuModel.getListMenu();
    },
    async getMenuById(id) {
        return await MenuModel.getMenuById(id);
    },
    async updateMenu(id,data){

        return await MenuModel.updateMenu(id,data);
    },
    async removeMenu(id){
        return await MenuModel.removeMenu(id);
    }
};

module.exports = MenuService;