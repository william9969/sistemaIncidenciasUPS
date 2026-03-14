const db = require('../config/database');

const PrioridadModel = {
    async createPrioridad(prioridad) {

        const query = `
        INSERT INTO prioridad
        (nombre_prioridad, valor_numerico, descripcion, estado)
        VALUES (?, ?, ?, ?)
        `;

        const [result] = await db.execute(query, [
            prioridad.nombre_prioridad,
            prioridad.valor_numerico,
            prioridad.descripcion,
            prioridad.estado
        ]);

        return result.insertId;
    },

    async getListPrioridad() {
        const [rows] = await db.execute(
            `SELECT * FROM prioridades`
        );

        return rows;
    },

    async getPrioridadById(id) {
        const [rows] = await db.execute(
            `SELECT * FROM prioridades WHERE id_prioridad = ?`,
            [id]
        );

        return rows[0];
    },

    async updatePrioridad(id,data){
        await db.query("UPDATE prioridades SET ? WHERE id_prioridad=?",[data,id]);
        return true;
    },

    async removePrioridad(id){
        await db.query("DELETE FROM prioridades WHERE id_prioridad=?",[id]);
        return true;
    }
}

module.exports = PrioridadModel