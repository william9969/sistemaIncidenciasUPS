const db = require('../config/database');

const PermisosModel = {
    async createPermisos(permiso) {

        const query = `
        INSERT INTO permisos
        (codigo_permiso, nombre_permiso, descripcion, modulo, estado)
        VALUES (?, ?, ?, ?, ?)
        `;

        const [result] = await db.execute(query, [
            permiso.codigo_permiso,
            permiso.nombre_permiso,
            permiso.descripcion,
            permiso.modulo,
            permiso.estado
        ]);

        return result.insertId;
    },

    async getListPermisos() {
        const [rows] = await db.execute(
            `SELECT * FROM permisos`
        );

        return rows;
    },

    async getPermisosById(id) {
        const [rows] = await db.execute(
            `SELECT * FROM permisos WHERE id_permiso = ?`,
            [id]
        );

        return rows[0];
    },

    async updatePermisos(id,data){
        await db.query("UPDATE permisos SET ? WHERE id_permiso=?",[data,id]);
        return true;
    },

    async removePermisos(id){
        await db.query("DELETE FROM permisos WHERE id_permiso=?",[id]);
        return true;
    }
}

module.exports = PermisosModel