const bcrypt = require('bcryptjs');
const UsuariosModel = require('../models/usuarios.model');
const { now } = require('../utils/date.util');

const UsuariosService = {

    async createUser(data) {
        const passwordHash = await bcrypt.hash(data.password, 10);

        const usuario = {
            ...data,
            password_hash: passwordHash,
            estado: data.estado,
            fecha_creacion: now()
        };

        return await UsuariosModel.createUser(usuario);
    },
    async getListUser() {
        return await UsuariosModel.getListUser();
    },
    async getUserById(id) {
        return await UsuariosModel.getUserById(id);
    },
    async updateUser(id,data){
        return await UsuariosModel.updateUser(id,data);
    },
    async removeUser(id){
        return await UsuariosModel.removeUser(id);
    }
};

module.exports = UsuariosService;