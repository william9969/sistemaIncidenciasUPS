const db = require('../config/database');

const CiudadanoModel = {
    async createCiudadano(ciudadano) {

        const query = `
        INSERT INTO ciudadanos
        (nombres, apellidos, identificacion, telefono, direccion, genero, fecha_nacimiento, password_hash, tipo_registro, estado, fecha_creacion, fecha_actualizacion)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        `;

        const [result] = await db.execute(query, [
            ciudadano.nombres,
            ciudadano.apellidos,
            ciudadano.identificacion,
            ciudadano.correo,
            ciudadano.telefono,
            ciudadano.direccion,
            ciudadano.genero,
            ciudadano.fecha_nacimiento,
            ciudadano.password_hash,
            ciudadano.tipo_registro,
            ciudadano.estado,
            ciudadano.fecha_creacion,
            ciudadano.fecha_actualizacion
        ]);

        return result.insertId;
    },

    async getListCiudadano() {
        const [rows] = await db.execute(
            `SELECT * FROM ciudadanos`
        );

        return rows;
    },

    async getCiudadanoById(id) {
        const [rows] = await db.execute(
            `SELECT * FROM ciudadanos WHERE id_ciudadano = ?`,
            [id]
        );

        return rows[0];
    },

    async updateCiudadano(id,data){
        await db.query("UPDATE ciudadanos SET ? WHERE id_ciudadano=?",[data,id]);
        return true;
    },

    async removeCiudadano(id){
        await db.query("DELETE FROM ciudadanos WHERE id_ciudadano=?",[id]);
        return true;
    }
}

module.exports = CiudadanoModel