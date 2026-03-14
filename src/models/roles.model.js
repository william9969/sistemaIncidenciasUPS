const db = require('../config/database')

const RolesModel = {
    async createRol(rol) {
        const query = `
        INSERT INTO roles
        (nombre_rol, descripcion, estado, fecha_creacion)
        VALUES (?, ?, ?, ?)
        `;
    
    const [result] = await db.execute(query,[
        rol.nombre_rol,
        rol.descripcion,
        rol.estado,
        rol.fecha_creacion
    ]);
    
    return result.insertId;
    },
    async getListRol(){
        const [rows] = await db.execute(
            `SELECT * FROM roles`
        );
        return rows;
    },
    async getRolById(id) {
        const [rows] = await db.execute(
            `SELECT * FROM roles WHERE id_rol = ?`,
            [id]
        );

        return rows[0];
    },
    async updateRol(id,data){
        await db.query("UPDATE roles SET ? WHERE id_rol=?",[data,id]);
        return true;
    },
    async removeRol(id){
        await db.query("DELETE FROM roles WHERE id_rol=?",[id]);
        return true;
    }
}



module.exports = RolesModel