const RolesModel = require("../models/roles.model");
const { now } = require('../utils/date.util');

const RolesService = {
    async createRol(data){
        const rol = {
            ...data,
            fecha_creacion: now()
        }
        return await RolesModel.createRol(rol);
    },
    async getListRol(){
        return await RolesModel.getListRol();
    },
    async getRolById(id){
        return await RolesModel.getRolById(id);
    },
    async updateRol(id, data){
        const rol = {
            ...data,
            fecha_actualizacion: now()
        }
        return await RolesModel.updateRol(id,rol);
    },
    async removeRol(id){
        return await RolesModel.removeRol(id);
    }
}

module.exports = RolesService;