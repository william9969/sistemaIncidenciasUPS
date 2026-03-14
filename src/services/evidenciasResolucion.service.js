const EvidenciaResolucionModel = require('../models/evidenciasResolucion.model');
const { now } = require('../utils/date.util');

const EvidenciaResolucionService = {

    async createEvidenciaResolucion(data) {
        const evidenciaResolucion = {
            ...data,
            fecha_registro: now()
        };

        return await EvidenciaResolucionModel.createEvidenciaResolucion(evidenciaResolucion);
    },
    async getListEvidenciaResolucion() {
        return await EvidenciaResolucionModel.getListEvidenciaResolucion();
    },
    async getEvidenciaResolucionById(id) {
        return await EvidenciaResolucionModel.getEvidenciaResolucionById(id);
    },
    async updateEvidenciaResolucion(id,data){
         const evidenciaResolucion = {
            ...data,
            fecha_registro: now()
        };
        return await EvidenciaResolucionModel.updateEvidenciaResolucion(id,evidenciaResolucion);
    },
    async removeEvidenciaResolucion(id){
        return await EvidenciaResolucionModel.removeEvidenciaResolucion(id);
    }
};

module.exports = EvidenciaResolucionService;