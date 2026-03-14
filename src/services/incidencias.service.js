const IncidenciasModel = require('../models/incidencias.model');
const { now } = require('../utils/date.util');

const IncidenciasService = {

    async createIncidencias(data) {
        const incidencia = {
            ...data,
            fecha_reporte: now()
        };

        return await IncidenciasModel.createIncidencias(incidencia);
    },
    async getListIncidencias() {
        return await IncidenciasModel.getListIncidencias();
    },
    async getIncidenciasById(id) {
        return await IncidenciasModel.getIncidenciasById(id);
    },
    async updateIncidencias(id,data){
         const incidencia = {
            ...data,
            fecha_ultima_actualizacion: now()
        };
        return await IncidenciasModel.updateIncidencias(id,incidencia);
    },
    async removeIncidencias(id){
        return await IncidenciasModel.removeIncidencias(id);
    }
};

module.exports = IncidenciasService;