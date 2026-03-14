const AdjuntoIncidenciaModel = require('../models/adjuntosIncidencia.model');
const { now } = require('../utils/date.util');

const AdjuntoIncidenciaService = {

    async createAdjuntoIncidencia(data) {
        const adjuntoIncidencia = {
            ...data,
            fecha_subida: now()
        };

        return await AdjuntoIncidenciaModel.createAdjuntoIncidencia(adjuntoIncidencia);
    },
    async getListAdjuntoIncidencia() {
        return await AdjuntoIncidenciaModel.getListAdjuntoIncidencia();
    },
    async getAdjuntoIncidenciaById(id) {
        return await AdjuntoIncidenciaModel.getAdjuntoIncidenciaById(id);
    },
    async updateAdjuntoIncidencia(id,data){
         const adjuntoIncidencia = {
            ...data,
            fecha_subida: now()
        };
        return await AdjuntoIncidenciaModel.updateAdjuntoIncidencia(id,adjuntoIncidencia);
    },
    async removeAdjuntoIncidencia(id){
        return await AdjuntoIncidenciaModel.removeAdjuntoIncidencia(id);
    }
};

module.exports = AdjuntoIncidenciaService;