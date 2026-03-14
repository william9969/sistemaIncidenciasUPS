const SectorModel = require('../models/sectores.model');

const SectorService = {

    async createSector(data) {
        return await SectorModel.createSector(data);
    },
    async getListSector() {
        return await SectorModel.getListSector();
    },
    async getSectorById(id) {
        return await SectorModel.getSectorById(id);
    },
    async updateSector(id,data){
        return await SectorModel.updateSector(id,data);
    },
    async removeSector(id){
        return await SectorModel.removeSector(id);
    }
};

module.exports = SectorService;