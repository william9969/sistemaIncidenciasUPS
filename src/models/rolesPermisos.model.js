const db = require('../config/database');

const RolPermisoModel = {
    async createRolePermiso(permiso) {

        const query = `
        INSERT INTO roles_permisos
        (id_rol, id_permiso, permitido, fecha_asignacion, asignado_por)
        VALUES (?, ?, ?, ?, ?)
        `;

        const [result] = await db.execute(query, [
            permiso.id_rol,
            permiso.id_permiso,
            permiso.permitido,
            permiso.fecha_asignacion,
            permiso.asignado_por
        ]);

        return result.insertId;
    },

    async getListRolPermiso() {
        const [rows] = await db.execute(
            `SELECT * FROM roles_permisos`
        );

        return rows;
    },

    async getRolPermisoById(id) {
        const [rows] = await db.execute(
            `SELECT * FROM roles_permisos WHERE id_rol_permiso = ?`,
            [id]
        );

        return rows[0];
    },

    async updateRolPermiso(id,data){
        await db.query("UPDATE roles_permisos SET ? WHERE id_rol_permiso=?",[data,id]);
        return true;
    },

    async removeRolPermiso(id){
        await db.query("DELETE FROM roles_permisos WHERE id_rol_permiso=?",[id]);
        return true;
    }
}

module.exports = RolPermisoModel