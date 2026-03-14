const RolPermisoModel = require('../models/rolesPermisos.model');
const { now } = require('../utils/date.util');

const RolPermisoService = {

    async createRolPermiso(data) {
        const rolpermiso = {
            ...data,
            fecha_asignacion: now()
        };

        return await RolPermisoModel.createRolPermiso(rolpermiso);
    },
    async getListRolPermiso() {
        return await RolPermisoModel.getListRolPermiso();
    },
    async getRolPermisoById(id) {
        return await RolPermisoModel.getRolPermisoById(id);
    },
    async updateRolPermiso(id,data){
         const rolpermiso = {
            ...data,
            fecha_asignacion: now()
        };
        return await RolPermisoModel.updateRolPermiso(id,rolpermiso);
    },
    async removeRolPermiso(id){
        return await RolPermisoModel.removeRolPermiso(id);
    }
};

module.exports = RolPermisoService;