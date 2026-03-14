const db = require('../config/database');

const CategoriaIncidenciaModel = {
    async createCategoriaIncidencia(categoriaIncidencia) {

        const query = `
        INSERT INTO categorias_incidencia
        (nombre_categoria, descripcion, icono, color_referencia, estado)
        VALUES (?, ?, ?, ?, ?)
        `;

        const [result] = await db.execute(query, [
            CategoriaIncidencia.nombre_categoria,
            CategoriaIncidencia.descripcion,
            CategoriaIncidencia.icono,
            CategoriaIncidencia.color_referencia,
            CategoriaIncidencia.estado
        ]);

        return result.insertId;
    },

    async getListCategoriaIncidencia() {
        const [rows] = await db.execute(
            `SELECT * FROM categorias_incidencia`
        );

        return rows;
    },

    async getCategoriaIncidenciaById(id) {
        const [rows] = await db.execute(
            `SELECT * FROM categorias_incidencia WHERE id_categoria = ?`,
            [id]
        );

        return rows[0];
    },

    async updateCategoriaIncidencia(id,data){
        await db.query("UPDATE categorias_incidencia SET ? WHERE id_categoria=?",[data,id]);
        return true;
    },

    async removeCategoriaIncidencia(id){
        await db.query("DELETE FROM categorias_incidencia WHERE id_categoria=?",[id]);
        return true;
    }
}

module.exports = CategoriaIncidenciaModel