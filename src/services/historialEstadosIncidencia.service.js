const HistorialEstadoIncidenciaModel = require('../models/historialEstadosIncidencia.model');
const { now } = require('../utils/date.util');

const HistorialEstadoIncidenciaService = {

    async createHistorialEstadoIncidencia(data) {


        return await HistorialEstadoIncidenciaModel.createHistorialEstadoIncidencia(data);
    },
    async getListHistorialEstadoIncidencia() {
        return await HistorialEstadoIncidenciaModel.getListHistorialEstadoIncidencia();
    },
    async getHistorialEstadoIncidenciaById(id) {
        return await HistorialEstadoIncidenciaModel.getHistorialEstadoIncidenciaById(id);
    },
    async updateHistorialEstadoIncidencia(id,data){

        return await HistorialEstadoIncidenciaModel.updateHistorialEstadoIncidencia(id,data);
    },
    async removeHistorialEstadoIncidencia(id){
        return await HistorialEstadoIncidenciaModel.removeHistorialEstadoIncidencia(id);
    }
};

module.exports = HistorialEstadoIncidenciaService;