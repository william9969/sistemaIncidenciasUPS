const db = require('../config/database');

const EstadoIncidenciaModel = {
    async createEstadoIncidencia(estadoincidencia) {

        const query = `
        INSERT INTO estados_incidencia
        (nombre_estado, descripcion, orden_flujo, es_final, color, estado)
        VALUES (?, ?, ?, ?, ?, ?)
        `;

        const [result] = await db.execute(query, [
            estadoincidencia.nombre_estado,
            estadoincidencia.descripcion,
            estadoincidencia.orden_flujo,
            estadoincidencia.es_final,
            estadoincidencia.color,
            estadoincidencia.estado
        ]);

        return result.insertId;
    },

    async getListEstadoIncidencia() {
        const [rows] = await db.execute(
            `SELECT * FROM estados_incidencia`
        );

        return rows;
    },

    async getEstadoIncidenciaById(id) {
        const [rows] = await db.execute(
            `SELECT * FROM estados_incidencia WHERE id_estado = ?`,
            [id]
        );

        return rows[0];
    },

    async updateEstadoIncidencia(id,data){
        await db.query("UPDATE estados_incidencia SET ? WHERE id_estado=?",[data,id]);
        return true;
    },

    async removeEstadoIncidencia(id){
        await db.query("DELETE FROM estados_incidencia WHERE id_estado=?",[id]);
        return true;
    }
}

module.exports = EstadoIncidenciaModel