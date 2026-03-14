const db = require('../config/database');

const HistorialEstadoIncidenciaModel = {
    async createHistorialEstadoIncidencia(historialIncidencia) {

        const query = `
        INSERT INTO historial_estados_incidencia
        (id_incidencia, id_estado_anterior, id_estado_nuevo, id_usuario_cambio, motivo_cambio, fecha_cambio)
        VALUES (?, ?, ?, ?, ?, ?)
        `;

        const [result] = await db.execute(query, [
            historialIncidencia.id_incidencia,
            historialIncidencia.id_estado_anterior,
            historialIncidencia.id_estado_nuevo,
            historialIncidencia.id_usuario_cambio,
            historialIncidencia.motivo_cambio,
            historialIncidencia.fecha_cambio
        ]);

        return result.insertId;
    },

    async getListHistorialEstadoIncidencia() {
        const [rows] = await db.execute(
            `SELECT * FROM historial_estados_incidencia`
        );

        return rows;
    },

    async getHistorialEstadoIncidenciaById(id) {
        const [rows] = await db.execute(
            `SELECT * FROM historial_estados_incidencia WHERE id_historial_estado = ?`,
            [id]
        );

        return rows[0];
    },

    async updateHistorialEstadoIncidencia(id,data){
        await db.query("UPDATE historial_estados_incidencia SET ? WHERE id_historial_estado=?",[data,id]);
        return true;
    },

    async removeHistorialEstadoIncidencia(id){
        await db.query("DELETE FROM historial_estados_incidencia WHERE id_historial_estado=?",[id]);
        return true;
    }
}

module.exports = HistorialEstadoIncidenciaModel