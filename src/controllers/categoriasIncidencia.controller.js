const CategoriaIncidenciaService = require('../services/categoriasIncidencia.service');

const CategoriaIncidenciaController = {

    async createCategoriaIncidencia(req, res) {
        try {
            const id = await CategoriaIncidenciaService.createCategoriaIncidencia(req.body);
            res.json({
                message: "Categoria incidencia creado",
                id_permiso: id
            });
        } catch (error) {
            res.status(500).json({
                error: error.message
            });
        }
    },

    async getListCategoriaIncidencia(req, res) {
        try {
            const permiso = await CategoriaIncidenciaService.getListCategoriaIncidencia();
            res.json(permiso);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
    async getCategoriaIncidenciaById(req, res) {
        try {
            const permiso = await CategoriaIncidenciaService.getCategoriaIncidenciaById(req.params.id);
            res.json(permiso);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
    async updateCategoriaIncidencia(req, res) {
        try {
            const permiso = await CategoriaIncidenciaService.updateCategoriaIncidencia(req.params.id, req.body);
            res.json(permiso);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
    async removeCategoriaIncidencia(req, res) {
        try {
            const permiso = await CategoriaIncidenciaService.removeCategoriaIncidencia(req.params.id);
            res.json(permiso);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }


};

module.exports = CategoriaIncidenciaController;