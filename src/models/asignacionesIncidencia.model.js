const db = require('../config/database');

const AsignacionIncidenciaModel = {
    async createAsignacionIncidencia(asignacionIncidencia) {

        const query = `
        INSERT INTO asignaciones_incidencia
        (id_incidencia, id_usuario_asignado, id_usuario_asignador, fecha_asignacion, fecha_reasignacion, motivo_asignacion,estado_asignacion)
        VALUES (?, ?, ?, ?, ?, ?, ?)
        `;

        const [result] = await db.execute(query, [
            asignacionIncidencia.id_incidencia,
            asignacionIncidencia.id_usuario_asignado,
            asignacionIncidencia.id_usuario_asignador,
            asignacionIncidencia.fecha_asignacion,
            asignacionIncidencia.fecha_reasignacion,
            asignacionIncidencia.motivo_asignacion,
            asignacionIncidencia.estado_asignacion
        ]);

        return result.insertId;
    },

    async getListAsignacionIncidencia() {
        const [rows] = await db.execute(
            `SELECT * FROM asignaciones_incidencia`
        );

        return rows;
    },

    async getAsignacionIncidenciaById(id) {
        const [rows] = await db.execute(
            `SELECT * FROM asignaciones_incidencia WHERE id_asignacion = ?`,
            [id]
        );

        return rows[0];
    },

    async updateAsignacionIncidencia(id,data){
        await db.query("UPDATE asignaciones_incidencia SET ? WHERE id_asignacion=?",[data,id]);
        return true;
    },

    async removeAsignacionIncidencia(id){
        await db.query("DELETE FROM asignaciones_incidencia WHERE id_asignacion=?",[id]);
        return true;
    }
}

module.exports = AsignacionIncidenciaModel