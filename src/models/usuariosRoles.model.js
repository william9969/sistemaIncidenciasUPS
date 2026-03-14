const db = require('../config/database');

const UsuariosRolModel = {
    async createUsuariosRol(usuarioRol) {

        const query = `
        INSERT INTO usuarios_roles
        (id_usuario, id_rol, fecha_asignacion, asignado_por, estado)
        VALUES (?, ?, ?, ?, ?)
        `;

        const [result] = await db.execute(query, [
            usuarioRol.id_usuario,
            usuarioRol.id_rol,
            usuarioRol.fecha_asignacion,
            usuarioRol.asignado_por,
            usuarioRol.estado
        ]);

        return result.insertId;
    },

    async getListUsuariosRol() {
        const [rows] = await db.execute(
            `SELECT * FROM usuarios_roles`
        );

        return rows;
    },

    async getUsuariosRolById(id) {
        const [rows] = await db.execute(
            `SELECT * FROM usuarios_roles WHERE id_usuario_rol = ?`,
            [id]
        );

        return rows[0];
    },

    async updateUsuariosRol(id,data){
        await db.query("UPDATE usuarios_roles SET ? WHERE id_usuario_rol=?",[data,id]);
        return true;
    },

    async removeUsuariosRol(id){
        await db.query("DELETE FROM usuarios_roles WHERE id_usuario_rol=?",[id]);
        return true;
    }
}

module.exports = UsuariosRolModel