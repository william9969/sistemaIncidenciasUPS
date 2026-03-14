const db = require('../config/database');

const IncidenciaSectorModel = {
    async createIncidenciaSector(incidenciasector) {

        const query = `
        INSERT INTO incidencias_sectores
        (id_incidencia, id_sector, fecha_asignacion)
        VALUES (?, ?, ?)
        `;

        const [result] = await db.execute(query, [
            incidenciasector.id_incidencia,
            incidenciasector.id_sector,
            incidenciasector.fecha_asignacion
        ]);

        return result.insertId;
    },

    async getListIncidenciaSector() {
        const [rows] = await db.execute(
            `SELECT * FROM incidencias_sectores`
        );

        return rows;
    },

    async getIncidenciaSectorById(id) {
        const [rows] = await db.execute(
            `SELECT * FROM incidencias_sectores WHERE id_incidencia_sector = ?`,
            [id]
        );

        return rows[0];
    },

    async updateIncidenciaSector(id,data){
        await db.query("UPDATE incidencias_sectores SET ? WHERE id_incidencia_sector=?",[data,id]);
        return true;
    },

    async removeIncidenciaSector(id){
        await db.query("DELETE FROM incidencias_sectores WHERE id_incidencia_sector=?",[id]);
        return true;
    }
}

module.exports = IncidenciaSectorModel