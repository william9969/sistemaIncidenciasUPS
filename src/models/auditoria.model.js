const db = require('../config/database');

const AuditoriaModel = {
    async createAuditoria(auditoria) {

        const query = `
        INSERT INTO auditoria
        (tabla_afectada, id_registro_afectado, accion, valor_anterior, valor_nuevo, id_usuario, ip_origen, user_agent, fecha_evento)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
        `;

        const [result] = await db.execute(query, [
            auditoria.tabla_afectada,
            auditoria.id_registro_afectado,
            auditoria.accion,
            auditoria.valor_anterior,
            auditoria.valor_nuevo,
            auditoria.id_usuario,
            auditoria.ip_origen,
            auditoria.user_agent,
            auditoria.fecha_evento
        ]);

        return result.insertId;
    },

    async getListAuditoria() {
        const [rows] = await db.execute(
            `SELECT * FROM auditoria`
        );

        return rows;
    },

    async getAuditoriaById(id) {
        const [rows] = await db.execute(
            `SELECT * FROM auditoria WHERE id_auditoria = ?`,
            [id]
        );

        return rows[0];
    },

    async updateAuditoria(id,data){
        await db.query("UPDATE auditoria SET ? WHERE id_auditoria=?",[data,id]);
        return true;
    },

    async removeAuditoria(id){
        await db.query("DELETE FROM auditoria WHERE id_auditoria=?",[id]);
        return true;
    }
}

module.exports = AuditoriaModel