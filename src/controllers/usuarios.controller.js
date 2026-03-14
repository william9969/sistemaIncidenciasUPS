const UsuariosService = require('../services/usuarios.service');

const UsuariosController = {

    async createUser(req, res) {
        try {
            const id = await UsuariosService.createUser(req.body);
            res.json({
                message: "Usuario creado",
                id_usuario: id
            });
        } catch (error) {
            res.status(500).json({
                error: error.message
            });
        }
    },

    async getListUser(req, res) {
        try {
            const usuarios = await UsuariosService.getListUser();
            res.json(usuarios);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
    async getUserById(req, res) {
        try {
            const usuarios = await UsuariosService.getUserById(req.params.id);
            res.json(usuarios);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
    async updateUser(req, res) {
        try {
            const usuarios = await UsuariosService.updateUser(req.params.id, req.body);
            res.json(usuarios);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
    async removeUser(req, res) {
        try {
            const usuarios = await UsuariosService.removeUser(req.params.id);
            res.json(usuarios);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }


};

module.exports = UsuariosController;