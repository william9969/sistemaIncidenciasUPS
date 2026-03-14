const db = require('../config/database');

const UsuariosModel = {

    async createUser(usuario) {

        const query = `
        INSERT INTO usuarios_sistema
        (nombres, apellidos, identificacion, correo, telefono, username,
        password_hash, cargo, estado, fecha_creacion, creado_por)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        `;

        const [result] = await db.execute(query, [
            usuario.nombres,
            usuario.apellidos,
            usuario.identificacion,
            usuario.correo,
            usuario.telefono,
            usuario.username,
            usuario.password_hash,
            usuario.cargo,
            usuario.estado,
            usuario.fecha_creacion,
            usuario.creado_por
        ]);

        return result.insertId;
    },

    async getListUser() {
        const [rows] = await db.execute(
            `SELECT * FROM usuarios_sistema`
        );

        return rows;
    },

    async getUserById(id) {
        const [rows] = await db.execute(
            `SELECT * FROM usuarios_sistema WHERE id_usuario = ?`,
            [id]
        );

        return rows[0];
    },

    async updateUser(id,data){
        await db.query("UPDATE usuarios_sistema SET ? WHERE id_usuario=?",[data,id]);
        return true;
    },

    async removeUser(id){
        await db.query("DELETE FROM usuarios_sistema WHERE id_usuario=?",[id]);
        return true;
    }
 
};

module.exports = UsuariosModel;