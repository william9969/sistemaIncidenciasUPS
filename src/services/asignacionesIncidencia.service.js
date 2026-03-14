const AsignacionIncidenciaModel = require('../models/asignacionesIncidencia.model');
const { now } = require('../utils/date.util');

const AsignacionIncidenciaService = {

    async createAsignacionIncidencia(data) {
        const asignacionIncidencia = {
            ...data,
            fecha_asignacion: now()
        };

        return await AsignacionIncidenciaModel.createAsignacionIncidencia(asignacionIncidencia);
    },
    async getListAsignacionIncidencia() {
        return await AsignacionIncidenciaModel.getListAsignacionIncidencia();
    },
    async getAsignacionIncidenciaById(id) {
        return await AsignacionIncidenciaModel.getAsignacionIncidenciaById(id);
    },
    async updateAsignacionIncidencia(id,data){
         const asignacionIncidencia = {
            ...data,
            fecha_reasignacion: now()
        };
        return await AsignacionIncidenciaModel.updateAsignacionIncidencia(id,asignacionIncidencia);
    },
    async removeAsignacionIncidencia(id){
        return await AsignacionIncidenciaModel.removeAsignacionIncidencia(id);
    }
};

module.exports = AsignacionIncidenciaService;