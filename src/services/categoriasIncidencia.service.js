const CategoriaIncidenciaModel = require('../models/categoriasIncidencia.model');

const CategoriaIncidenciaService = {

    async createCategoriaIncidencia(data) {
        return await CategoriaIncidenciaModel.createCategoriaIncidencia(data);
    },
    async getListCategoriaIncidencia() {
        return await CategoriaIncidenciaModel.getListCategoriaIncidencia();
    },
    async getCategoriaIncidenciaById(id) {
        return await CategoriaIncidenciaModel.getCategoriaIncidenciaById(id);
    },
    async updateCategoriaIncidencia(id,data){

        return await CategoriaIncidenciaModel.updateCategoriaIncidencia(id,data);
    },
    async removeCategoriaIncidencia(id){
        return await CategoriaIncidenciaModel.removeCategoriaIncidencia(id);
    }
};

module.exports = CategoriaIncidenciaService;