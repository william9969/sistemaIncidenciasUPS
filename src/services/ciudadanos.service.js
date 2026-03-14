const bcrypt = require('bcryptjs');
const CiudadanoModel = require('../models/ciudadanos.model');
const { now } = require('../utils/date.util');

const CiudadanoService = {

    async createCiudadano(data) {
        const passwordHash = await bcrypt.hash(data.password, 10);

        const ciudadano = {
            ...data,
            password_hash: passwordHash,
            estado: data.estado,
            fecha_creacion: now()
        };

        return await CiudadanoModel.createCiudadano(ciudadano);
    },
    async getListCiudadano() {
        return await CiudadanoModel.getListCiudadano();
    },
    async getCiudadanoById(id) {
        return await CiudadanoModel.getCiudadanoById(id);
    },
    async updateCiudadano(id,data){
        const ciudadano = {
            ...data,
            fecha_actualizacion                                                     : now()
        };
        return await CiudadanoModel.updateCiudadano(id,ciudadano);
    },
    async removeCiudadano(id){
        return await CiudadanoModel.removeCiudadano(id);
    }
};

module.exports = CiudadanoService;