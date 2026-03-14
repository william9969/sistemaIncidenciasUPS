const AsignacionIncidenciaService = require('../services/asignacionesIncidencia.service');

const AsignacionIncidenciaController = {

    async createAsignacionIncidencia(req, res) {
        try {
            const id = await AsignacionIncidenciaService.createAsignacionIncidencia(req.body);
            res.json({
                message: "Asignacion Incidencia creado",
                id_permiso: id
            });
        } catch (error) {
            res.status(500).json({
                error: error.message
            });
        }
    },

    async getListAsignacionIncidencia(req, res) {
        try {
            const permiso = await AsignacionIncidenciaService.getListAsignacionIncidencia();
            res.json(permiso);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
    async getAsignacionIncidenciaById(req, res) {
        try {
            const permiso = await AsignacionIncidenciaService.getAsignacionIncidenciaById(req.params.id);
            res.json(permiso);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
    async updateAsignacionIncidencia(req, res) {
        try {
            const permiso = await AsignacionIncidenciaService.updateAsignacionIncidencia(req.params.id, req.body);
            res.json(permiso);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
    async removeAsignacionIncidencia(req, res) {
        try {
            const permiso = await AsignacionIncidenciaService.removeAsignacionIncidencia(req.params.id);
            res.json(permiso);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }


};

module.exports = AsignacionIncidenciaController;