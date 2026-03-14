const SeguimientoIncidenciaModel = require('../models/seguimientoIncidencia.model');
const { now } = require('../utils/date.util');

const SeguimientoIncidenciaService = {

    async createSeguimientoIncidencia(data) {
        return await SeguimientoIncidenciaModel.createSeguimientoIncidencia(data);
    },
    async getListSeguimientoIncidencia() {
        return await SeguimientoIncidenciaModel.getListSeguimientoIncidencia();
    },
    async getSeguimientoIncidenciaById(id) {
        return await SeguimientoIncidenciaModel.getSeguimientoIncidenciaById(id);
    },
    async updateSeguimientoIncidencia(id,data){
        return await SeguimientoIncidenciaModel.updateSeguimientoIncidencia(id,data);
    },
    async removeSeguimientoIncidencia(id){
        return await SeguimientoIncidenciaModel.removeSeguimientoIncidencia(id);
    }
};

module.exports = SeguimientoIncidenciaService;