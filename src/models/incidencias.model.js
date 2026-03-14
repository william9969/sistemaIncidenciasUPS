const db = require('../config/database');

const IncidenciasModel = {
    async createIncidencias(incidencia) {

        const query = `
        INSERT INTO incidencias
        (codigo_incidencia, id_ciudadano, id_categoria, id_tipo, titulo, descripcion, direccion_referencial, latitud, longitud, referencia_ubicacion, fecha_reporte, id_estado_actual, id_prioridad, canal_reporte, origen_reporte, nivel_confianza, puntaje_criticidad, duplicada_de, requiere_inspeccion, observacion_inicial, fecha_ultima_actualizacion, activo)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        `;

        const [result] = await db.execute(query, [
            incidencia.codigo_incidencia,
            incidencia.id_ciudadano,
            incidencia.id_categoria,
            incidencia.id_tipo,
            incidencia.titulo,
            incidencia.descripcion,
            incidencia.direccion_referencial,
            incidencia.latitud,
            incidencia.longitud,
            incidencia.referencia_ubicacion,
            incidencia.fecha_reporte,
            incidencia.id_estado_actual,
            incidencia.id_prioridad,
            incidencia.canal_reporte,
            incidencia.origen_reporte,
            incidencia.nivel_confianza,
            incidencia.puntaje_criticidad,
            incidencia.duplicada_de,
            incidencia.requiere_inspeccion,
            incidencia.observacion_inicial,
            incidencia.fecha_ultima_actualizacion,
            incidencia.activo
        ]);

        return result.insertId;
    },

    async getListIncidencias() {
        const [rows] = await db.execute(
            `SELECT * FROM incidencias`
        );

        return rows;
    },

    async getIncidenciasById(id) {
        const [rows] = await db.execute(
            `SELECT * FROM incidencias WHERE id_incidencia = ?`,
            [id]
        );

        return rows[0];
    },

    async updateIncidencias(id,data){
        await db.query("UPDATE incidencias SET ? WHERE id_incidencia=?",[data,id]);
        return true;
    },

    async removeIncidencias(id){
        await db.query("DELETE FROM incidencias WHERE id_incidencia=?",[id]);
        return true;
    }
}

module.exports = IncidenciasModel