const db = require('../config/database');

const AdjuntoIncidenciaModel = {
    async createAdjuntoIncidencia(adjuntoIncidencia) {

        const query = `
        INSERT INTO adjuntos_incidencia
        (id_incidencia, tipo_adjunto, nombre_archivo, ruta_archivo, tamano_archivo, mime_type, subido_por_usuario, subido_por_ciudadano, fecha_subida, descripcion, estado)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        `;

        const [result] = await db.execute(query, [
            adjuntoIncidencia.id_incidencia,
            adjuntoIncidencia.tipo_adjunto,
            adjuntoIncidencia.nombre_archivo,
            adjuntoIncidencia.ruta_archivo,
            adjuntoIncidencia.tamano_archivo,
            adjuntoIncidencia.mime_type,
            adjuntoIncidencia.subido_por_usuario,
            adjuntoIncidencia.subido_por_ciudadano,
            adjuntoIncidencia.fecha_subida,
            adjuntoIncidencia.descripcion,
            adjuntoIncidencia.estado
        ]);

        return result.insertId;
    },

    async getListAdjuntoIncidencia() {
        const [rows] = await db.execute(
            `SELECT * FROM adjuntos_incidencia`
        );

        return rows;
    },

    async getAdjuntoIncidenciaById(id) {
        const [rows] = await db.execute(
            `SELECT * FROM adjuntos_incidencia WHERE id_adjunto = ?`,
            [id]
        );

        return rows[0];
    },

    async updateAdjuntoIncidencia(id,data){
        await db.query("UPDATE adjuntos_incidencia SET ? WHERE id_adjunto=?",[data,id]);
        return true;
    },

    async removeAdjuntoIncidencia(id){
        await db.query("DELETE FROM adjuntos_incidencia WHERE id_adjunto=?",[id]);
        return true;
    }
}

module.exports = AdjuntoIncidenciaModel