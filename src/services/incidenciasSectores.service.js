const IncidenciaSectorModel = require('../models/incidenciasSectores.model');
const { now } = require('../utils/date.util');

const IncidenciaSectorService = {

    async createIncidenciaSector(data) {
        const incidenciasector = {
            ...data,
            fecha_asignacion: now()
        };

        return await IncidenciaSectorModel.createIncidenciaSector(incidenciasector);
    },
    async getListIncidenciaSector() {
        return await IncidenciaSectorModel.getListIncidenciaSector();
    },
    async getIncidenciaSectorById(id) {
        return await IncidenciaSectorModel.getIncidenciaSectorById(id);
    },
    async updateIncidenciaSector(id,data){
         const incidenciasector = {
            ...data,
            fecha_asignacion: now()
        };
        return await IncidenciaSectorModel.updateIncidenciaSector(id,incidenciasector);
    },
    async removeIncidenciaSector(id){
        return await IncidenciaSectorModel.removeIncidenciaSector(id);
    }
};

module.exports = IncidenciaSectorService;