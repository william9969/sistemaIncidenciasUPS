const db = require('../config/database');

const SectorModel = {
    async createSector(sector) {

        const query = `
        INSERT INTO sectores
        (nombre_sector, descripcion, parroquia, zona, estado)
        VALUES (?, ?, ?, ?, ?)
        `;

        const [result] = await db.execute(query, [
            sector.nombre_sector,
            sector.descripcion,
            sector.parroquia,
            sector.zona,
            sector.estado
        ]);

        return result.insertId;
    },

    async getListSector() {
        const [rows] = await db.execute(
            `SELECT * FROM sectores`
        );

        return rows;
    },

    async getSectorById(id) {
        const [rows] = await db.execute(
            `SELECT * FROM sectores WHERE id_sector = ?`,
            [id]
        );

        return rows[0];
    },

    async updateSector(id,data){
        await db.query("UPDATE sectores SET ? WHERE id_sector=?",[data,id]);
        return true;
    },

    async removeSector(id){
        await db.query("DELETE FROM sectores WHERE id_sector=?",[id]);
        return true;
    }
}

module.exports = SectorModel