
const RolesService = require('../services/roles.service')

const RolesController = {
    async createRol(req, res) {
        try {
            const id = await RolesService.createUser(req.body);
            res.json({
                message: "Rol creado",
                id_usuario: id
            });
        } catch (error) {
            res.status(500).json({
                error: error.message
            });
        }
    },
    async getListRol(req,res){
        try{
            const roles = await RolesService.getListRol();
            res.json(roles);
        }catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
    async getRolById(req,res){
        try {
            const rol = await RolesService.getRolById(req.params.id);
            res.json(rol);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
    async updateRol(req, res) {
        try {
            const rol = await RolesService.updateRol(req.params.id, req.body);
            res.json(rol);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
    async removeRol(req, res) {
        try {
            const estatus = await RolesService.removeRol(req.params.id);
            res.json(estatus);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
}

module.exports = RolesController