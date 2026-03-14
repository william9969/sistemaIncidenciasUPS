const db = require('../config/database');

const NotificacionModel = {
    async createNotificacion(notificacion) {

        const query = `
        INSERT INTO notificaciones
        (tipo_destinatario, id_usuario, id_ciudadano, titulo, mensaje, tipo_notificacion, estado_lectura,fecha_envio, fecha_lectura, referencia_tipo, referencia_id)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        `;

        const [result] = await db.execute(query, [
            notificacion.tipo_destinatario,
            notificacion.id_usuario,
            notificacion.id_ciudadano,
            notificacion.titulo,
            notificacion.mensaje,
            notificacion.tipo_notificacion,
            notificacion.estado_lectura,
            notificacion.fecha_envio,
            notificacion.fecha_lectura,
            notificacion.referencia_tipo,
            notificacion.referencia_id
        ]);

        return result.insertId;
    },

    async getListNotificacion() {
        const [rows] = await db.execute(
            `SELECT * FROM notificaciones`
        );

        return rows;
    },

    async getNotificacionById(id) {
        const [rows] = await db.execute(
            `SELECT * FROM notificaciones WHERE id_notificacion = ?`,
            [id]
        );

        return rows[0];
    },

    async updateNotificacion(id,data){
        await db.query("UPDATE notificaciones SET ? WHERE id_notificacion=?",[data,id]);
        return true;
    },

    async removeNotificacion(id){
        await db.query("DELETE FROM notificaciones WHERE id_notificacion=?",[id]);
        return true;
    }
}

module.exports = NotificacionModel