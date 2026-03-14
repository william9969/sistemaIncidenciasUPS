const db = require('../config/database');

const RolMenusModel = {
    async createRolMenu(rolmenu) {

        const query = `
        INSERT INTO roles_menus
        (id_rol, id_menu, puede_ver, puede_crear, puede_editar, puede_eliminar, puede_aprobar, fecha_asignacion)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?)
        `;

        const [result] = await db.execute(query, [
            rolmenu.id_rol,
            rolmenu.id_menu,
            rolmenu.puede_ver,
            rolmenu.puede_crear,
            rolmenu.puede_editar,
            rolmenu.puede_eliminar,
            rolmenu.puede_aprobar,
            rolmenu.fecha_asignacion
        ]);

        return result.insertId;
    },

    async getListRolMenu() {
        const [rows] = await db.execute(
            `SELECT * FROM roles_menus`
        );

        return rows;
    },

    async getRolMenuById(id) {
        const [rows] = await db.execute(
            `SELECT * FROM roles_menus WHERE id_rol_menu = ?`,
            [id]
        );

        return rows[0];
    },

    async updateRolMenu(id,data){
        await db.query("UPDATE roles_menus SET ? WHERE id_rol_menu=?",[data,id]);
        return true;
    },

    async removeRolMenu(id){
        await db.query("DELETE FROM roles_menus WHERE id_rol_menu=?",[id]);
        return true;
    }
}

module.exports = RolMenusModel