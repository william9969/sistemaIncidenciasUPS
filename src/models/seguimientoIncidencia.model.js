const db = require('../config/database');

const SeguimientoIncidenciaModel = {
    async createSeguimientoIncidencia(seguimientoIncidenciaModel) {

        const query = `
        INSERT INTO seguimiento_incidencia
        (id_incidencia, id_usuario, id_ciudadano, tipo_seguimiento, detalle, fecha_seguimiento, visible_para_ciudadano, latitud, longitud)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
        `;

        const [result] = await db.execute(query, [
            seguimientoIncidenciaModel.id_incidencia,
            seguimientoIncidenciaModel.id_usuario,
            seguimientoIncidenciaModel.id_ciudadano,
            seguimientoIncidenciaModel.tipo_seguimiento,
            seguimientoIncidenciaModel.detalle,
            seguimientoIncidenciaModel.fecha_seguimiento,
            seguimientoIncidenciaModel.visible_para_ciudadano,
            seguimientoIncidenciaModel.latitud,
            seguimientoIncidenciaModel.longitud
        ]);

        return result.insertId;
    },

    async getListSeguimientoIncidencia() {
        const [rows] = await db.execute(
            `SELECT * FROM seguimiento_incidencia`
        );

        return rows;
    },

    async getSeguimientoIncidenciaById(id) {
        const [rows] = await db.execute(
            `SELECT * FROM seguimiento_incidencia WHERE id_seguimiento = ?`,
            [id]
        );

        return rows[0];
    },

    async updateSeguimientoIncidencia(id,data){
        await db.query("UPDATE seguimiento_incidencia SET ? WHERE id_seguimiento=?",[data,id]);
        return true;
    },

    async removeSeguimientoIncidencia(id){
        await db.query("DELETE FROM seguimiento_incidencia WHERE id_seguimiento=?",[id]);
        return true;
    }
}

module.exports = SeguimientoIncidenciaModel