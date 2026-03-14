const AuditoriaModel = require('../models/auditoria.model');
const { now } = require('../utils/date.util');

const AuditoriaService = {

    async createAuditoria(data) {
        const permiso = {
            ...data,
            fecha_asifecha_eventognacion: now()
        };

        return await AuditoriaModel.createAuditoria(permiso);
    },
    async getListAuditoria() {
        return await AuditoriaModel.getListAuditoria();
    },
    async getAuditoriaById(id) {
        return await AuditoriaModel.getAuditoriaById(id);
    },
    async updateAuditoria(id,data){
         const permiso = {
            ...data,
            fecha_evento: now()
        };
        return await AuditoriaModel.updateAuditoria(id,permiso);
    },
    async removeAuditoria(id){
        return await AuditoriaModel.removeAuditoria(id);
    }
};

module.exports = AuditoriaService;