const SectorService = require('../services/sectores.service');

const SectorController = {

    async createSector(req, res) {
        try {
            const id = await SectorService.createSector(req.body);
            res.json({
                message: "Sector creado",
                id_sector: id
            });
        } catch (error) {
            res.status(500).json({
                error: error.message
            });
        }
    },

    async getListSector(req, res) {
        try {
            const sector = await SectorService.getListSector();
            res.json(sector);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
    async getSectorById(req, res) {
        try {
            const sector = await SectorService.getSectorById(req.params.id);
            res.json(sector);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
    async updateSector(req, res) {
        try {
            const sector = await SectorService.updateSector(req.params.id, req.body);
            res.json(sector);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
    async removeSector(req, res) {
        try {
            const sector = await SectorService.removeSector(req.params.id);
            res.json(sector);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }


};

module.exports = SectorController;