const PermisosModel = require('../models/permisos.model');
const { now } = require('../utils/date.util');

const PermisosService = {

    async createPermisos(data) {
        const permiso = {
            ...data,
            fecha_asignacion: now()
        };

        return await PermisosModel.createPermisos(permiso);
    },
    async getListPermisos() {
        return await PermisosModel.getListPermisos();
    },
    async getPermisosById(id) {
        return await PermisosModel.getPermisosById(id);
    },
    async updatePermisos(id,data){
         const permiso = {
            ...data,
            fecha_asignacion: now()
        };
        return await PermisosModel.updatePermisos(id,permiso);
    },
    async removePermisos(id){
        return await PermisosModel.removePermisos(id);
    }
};

module.exports = PermisosService;