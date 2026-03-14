const UsuariosRolService = require('../services/usuariosRoles.service');

const UsuariosRolController = {

    async createUsuariosRol(req, res) {
        try {
            const id = await UsuariosRolService.createUsuariosRol(req.body);
            res.json({
                message: "Usuario Rol creado",
                id_usuario_rol: id
            });
        } catch (error) {
            res.status(500).json({
                error: error.message
            });
        }
    },

    async getListUsuariosRol(req, res) {
        try {
            const usuarios = await UsuariosRolService.getListUsuariosRol();
            res.json(usuarios);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
    async getUsuariosRolById(req, res) {
        try {
            const usuarios = await UsuariosRolService.getUsuariosRolById(req.params.id);
            res.json(usuarios);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
    async updateUsuariosRol(req, res) {
        try {
            const usuarios = await UsuariosRolService.updateUsuariosRol(req.params.id, req.body);
            res.json(usuarios);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
    async removeUsuariosRol(req, res) {
        try {
            const usuarios = await UsuariosRolService.removeUsuariosRol(req.params.id);
            res.json(usuarios);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }


};

module.exports = UsuariosRolController;