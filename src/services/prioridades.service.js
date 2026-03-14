const PrioridadModel = require('../models/prioridades.model');

const PrioridadService = {

    async createPrioridad(data) {
        return await PrioridadModel.createPrioridad(data);
    },
    async getListPrioridad() {
        return await PrioridadModel.getListPrioridad();
    },
    async getPrioridadById(id) {
        return await PrioridadModel.getPrioridadById(id);
    },
    async updatePrioridad(id,data){
        return await PrioridadModel.updatePrioridad(id,data);
    },
    async removePrioridad(id){
        return await PrioridadModel.removePrioridad(id);
    }
};

module.exports = PrioridadService;