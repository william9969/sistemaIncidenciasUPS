const db = require('../config/database');

const TipoIncidenciaModel = {
    async createTipoIncidencia(tipoIncidencia) {

        const query = `
        INSERT INTO tipos_incidencia
        (id_categoria, nombre_tipo, descripcion, nivel_prioridad_sugerido, estado)
        VALUES (?, ?, ?, ?, ?)
        `;

        const [result] = await db.execute(query, [
            tipoIncidencia.id_categoria,
            tipoIncidencia.nombre_tipo,
            tipoIncidencia.descripcion,
            tipoIncidencia.nivel_prioridad_sugerido,
            tipoIncidencia.estado
        ]);

        return result.insertId;
    },

    async getListTipoIncidencia() {
        const [rows] = await db.execute(
            `SELECT * FROM tipos_incidencia`
        );

        return rows;
    },

    async getTipoIncidenciaById(id) {
        const [rows] = await db.execute(
            `SELECT * FROM tipos_incidencia WHERE id_tipo = ?`,
            [id]
        );

        return rows[0];
    },

    async updateTipoIncidencia(id,data){
        await db.query("UPDATE tipos_incidencia SET ? WHERE id_tipo=?",[data,id]);
        return true;
    },

    async removeTipoIncidencia(id){
        await db.query("DELETE FROM tipos_incidencia WHERE id_tipo=?",[id]);
        return true;
    }
}

module.exports = TipoIncidenciaModel