const CiudadanoService = require('../services/ciudadanos.service');

const CiudadanoController = {

    async createCiudadano(req, res) {
        try {
            const id = await CiudadanoService.createCiudadano(req.body);
            res.json({
                message: "Ciudadano creado",
                id_permiso: id
            });
        } catch (error) {
            res.status(500).json({
                error: error.message
            });
        }
    },

    async getListCiudadano(req, res) {
        try {
            const permiso = await CiudadanoService.getListCiudadano();
            res.json(permiso);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
    async getCiudadanoById(req, res) {
        try {
            const permiso = await CiudadanoService.getCiudadanoById(req.params.id);
            res.json(permiso);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
    async updateCiudadano(req, res) {
        try {
            const permiso = await CiudadanoService.updateCiudadano(req.params.id, req.body);
            res.json(permiso);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
    async removeCiudadano(req, res) {
        try {
            const permiso = await CiudadanoService.removeCiudadano(req.params.id);
            res.json(permiso);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }


};

module.exports = CiudadanoController;