const TipoIncidenciaModel = require('../models/tiposIncidencia.model');


const TipoIncidenciaService = {

    async createTipoIncidencia(data) {

        return await TipoIncidenciaModel.createTipoIncidencia(data);
    },
    async getListTipoIncidencia() {
        return await TipoIncidenciaModel.getListTipoIncidencia();
    },
    async getTipoIncidenciaById(id) {
        return await TipoIncidenciaModel.getTipoIncidenciaById(id);
    },
    async updateTipoIncidencia(id,data){
        return await TipoIncidenciaModel.updateTipoIncidencia(id,data);
    },
    async removeTipoIncidencia(id){
        return await TipoIncidenciaModel.removeTipoIncidencia(id);
    }
};

module.exports = TipoIncidenciaService;