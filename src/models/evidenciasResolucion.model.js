const db = require('../config/database');

const EvidenciaResolucionModel = {
    async createEvidenciaResolucion(evidenciaResolucion) {

        const query = `
        INSERT INTO evidencias_resolucion
        (id_incidencia, descripcion, url_archivo, fecha_registro, id_usuario_registro)
        VALUES (?, ?, ?, ?, ?)
        `;

        const [result] = await db.execute(query, [
            evidenciaResolucion.id_incidencia,
            evidenciaResolucion.descripcion,
            evidenciaResolucion.url_archivo,
            evidenciaResolucion.fecha_registro,
            evidenciaResolucion.id_usuario_registro
        ]);

        return result.insertId;
    },

    async getListEvidenciaResolucion() {
        const [rows] = await db.execute(
            `SELECT * FROM evidencias_resolucion`
        );

        return rows;
    },

    async getEvidenciaResolucionById(id) {
        const [rows] = await db.execute(
            `SELECT * FROM evidencias_resolucion WHERE id_evidencia = ?`,
            [id]
        );

        return rows[0];
    },

    async updateEvidenciaResolucion(id,data){
        await db.query("UPDATE evidencias_resolucion SET ? WHERE id_evidencia=?",[data,id]);
        return true;
    },

    async removeEvidenciaResolucion(id){
        await db.query("DELETE FROM evidencias_resolucion WHERE id_evidencia=?",[id]);
        return true;
    }
}

module.exports = EvidenciaResolucionModel