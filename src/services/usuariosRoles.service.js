const UsuariosRolModel = require('../models/usuariosRoles.model');
const { now } = require('../utils/date.util');

const UsuariosRolService = {

    async createUsuariosRol(data) {
        const usuarioRol = {
            ...data,
            fecha_asignacion: now()
        };

        return await UsuariosRolModel.createUsuariosRol(usuarioRol);
    },
    async getListUsuariosRol() {
        return await UsuariosRolModel.getListUsuariosRol();
    },
    async getUsuariosRolById(id) {
        return await UsuariosRolModel.getUsuariosRolById(id);
    },
    async updateUsuariosRol(id,data){
        return await UsuariosRolModel.updateUsuariosRol(id,data);
    },
    async removeUsuariosRol(id){
        return await UsuariosRolModel.removeUsuariosRol(id);
    }
};

module.exports = UsuariosRolService;