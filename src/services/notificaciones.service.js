const NotificacionModel = require('../models/notificaciones.model');
const { now } = require('../utils/date.util');

const NotificacionService = {

    async createNotificacion(data) {
        return await NotificacionModel.createNotificacion(data);
    },
    async getListNotificacion() {
        return await NotificacionModel.getListNotificacion();
    },
    async getNotificacionById(id) {
        return await NotificacionModel.getNotificacionById(id);
    },
    async updateNotificacion(id,data){
        return await NotificacionModel.updateNotificacion(id,data);
    },
    async removeNotificacion(id){
        return await NotificacionModel.removeNotificacion(id);
    }
};

module.exports = NotificacionService;