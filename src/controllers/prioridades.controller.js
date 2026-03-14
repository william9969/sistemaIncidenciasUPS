const PrioridadService = require('../services/prioridades.service');

const PrioridadController = {

    async createPrioridad(req, res) {
        try {
            const id = await PrioridadService.createPrioridad(req.body);
            res.json({
                message: "Prioridad creado",
                id_permiso: id
            });
        } catch (error) {
            res.status(500).json({
                error: error.message
            });
        }
    },

    async getListPrioridad(req, res) {
        try {
            const prioridades = await PrioridadService.getListPrioridad();
            res.json(prioridades);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
    async getPrioridadById(req, res) {
        try {
            const prioridad = await PrioridadService.getPrioridadById(req.params.id);
            res.json(prioridad);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
    async updatePrioridad(req, res) {
        try {
            const prioridad = await PrioridadService.updatePrioridad(req.params.id, req.body);
            res.json(prioridad);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
    async removePrioridad(req, res) {
        try {
            const prioridad = await PrioridadService.removePrioridad(req.params.id);
            res.json(prioridad);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }


};

module.exports = PrioridadController;