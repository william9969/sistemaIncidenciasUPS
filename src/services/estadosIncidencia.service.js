const EstadoIncidenciaModel = require('../models/estadosIncidencia.model');

const EstadoIncidenciaService = {

    async createEstadoIncidencia(data) {
        return await EstadoIncidenciaModel.createEstadoIncidencia(data);
    },
    async getListEstadoIncidencia() {
        return await EstadoIncidenciaModel.getListEstadoIncidencia();
    },
    async getEstadoIncidenciaById(id) {
        return await EstadoIncidenciaModel.getEstadoIncidenciaById(id);
    },
    async updateEstadoIncidencia(id,data){
        return await EstadoIncidenciaModel.updateEstadoIncidencia(id,data);
    },
    async removeEstadoIncidencia(id){
        return await EstadoIncidenciaModel.removeEstadoIncidencia(id);
    }
};

module.exports = EstadoIncidenciaService;