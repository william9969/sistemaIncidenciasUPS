const db = require('../config/database');

const MenuModel = {
    async createMenu(menu) {

        const query = `
        INSERT INTO menus
        (nombre_menu, ruta, icono, orden_visual, id_menu_padre, estado, descripcion )
        VALUES (?, ?, ?, ?, ?, ?, ?)
        `;

        const [result] = await db.execute(query, [
            menu.nombre_menu,
            menu.ruta,
            menu.icono,
            menu.orden_visual,
            menu.id_menu_padre,
            menu.estado,
            menu.descripcion
        ]);

        return result.insertId;
    },

    async getListMenu() {
        const [rows] = await db.execute(
            `SELECT * FROM menus`
        );

        return rows;
    },

    async getMenuById(id) {
        const [rows] = await db.execute(
            `SELECT * FROM menus WHERE id_menu = ?`,
            [id]
        );

        return rows[0];
    },

    async updateMenu(id,data){
        await db.query("UPDATE menus SET ? WHERE id_menu=?",[data,id]);
        return true;
    },

    async removeMenu(id){
        await db.query("DELETE FROM menus WHERE id_menu=?",[id]);
        return true;
    }
}

module.exports = MenuModel