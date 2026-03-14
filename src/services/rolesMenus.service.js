const RolMenuModel = require('../models/rolesMenus.model');
const { now } = require('../utils/date.util');

const RolMenuService = {

    async createRolMenu(data) {
        const rolMenu = {
            ...data,
            fecha_asignacion: now()
        };

        return await RolMenuModel.cre(rolMenu);
    },
    async getListRolMenu() {
        return await RolMenuModel.getListRolMenu();
    },
    async getRolMenuById(id) {
        return await RolMenuModel.getRolMenuById(id);
    },
    async updateRolMenu(id,data){
         const rolMenu = {
            ...data,
            fecha_asignacion: now()
        };
        return await RolMenuModel.updateRolMenu(id,rolMenu);
    },
    async removeRolMenu(id){
        return await RolMenuModel.removeRolMenu(id);
    }
};

module.exports = RolMenuService;