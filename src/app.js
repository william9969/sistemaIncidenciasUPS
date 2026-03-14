const express = require('express');
const cors = require('cors');

const usuarios = require('./routes/usuarios.routes');
const roles = require('./routes/roles.routes');
const usuariosRoles = require('./routes/usuariosRoles.routes');
const permisos = require('./routes/permisos.routes');
const rolesPermisos = require('./routes/rolesPermisos.routes');
const menus = require('./routes/menus.routes');
const rolesMenus = require('./routes/rolesMenus.routes');
const ciudadanos = require('./routes/ciudadanos.routes');
const categoriasIncidencia = require('./routes/categoriasIncidencia.routes');
const tiposIncidencia = require('./routes/tiposIncidencia.routes');
const estadosIncidencia = require('./routes/estadosIncidencia.routes');
const prioridades = require('./routes/prioridades.routes');
const sectores = require('./routes/sectores.routes');
const incidencias = require('./routes/incidencias.routes');
const incidenciasSectores = require('./routes/incidenciasSectores.routes');
const asignacionesIncidencia = require('./routes/asignacionesIncidencia.routes');
const seguimientoIncidencia = require('./routes/seguimientoIncidencia.routes');
const historialEstadosIncidencia = require('./routes/historialEstadosIncidencia.routes');
const adjuntosIncidencia = require('./routes/adjuntosIncidencia.routes');
const evidenciasResolucion = require('./routes/evidenciasResolucion.routes');
const auditoria = require('./routes/auditoria.routes');
const notificaciones = require('./routes/notificaciones.routes');


const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/usuarios',usuarios);
app.use('/api/roles',roles);
app.use('/api/usuarios-roles',usuariosRoles);
app.use('/api/permisos',permisos);
app.use('/api/roles-permisos',rolesPermisos);
app.use('/api/menus',menus);
app.use('/api/roles-menus',rolesMenus);
app.use('/api/ciudadanos',ciudadanos);
app.use('/api/categoriasIncidencia',categoriasIncidencia);
app.use('/api/tiposIncidencia',tiposIncidencia);
app.use('/api/estadosIncidencia',estadosIncidencia);
app.use('/api/prioridades',prioridades);
app.use('/api/sectores',sectores);
app.use('/api/incidencias',incidencias);
app.use('/api/incidenciasSectores',incidenciasSectores);
app.use('/api/asignacionesIncidencia',asignacionesIncidencia);
app.use('/api/seguimientoIncidencia',seguimientoIncidencia);
app.use('/api/historialEstadosIncidencia',historialEstadosIncidencia);
app.use('/api/adjuntosIncidencia',adjuntosIncidencia);
app.use('/api/evidenciasResolucion',evidenciasResolucion);
app.use('/api/auditoria',auditoria);
app.use('/api/notificaciones',notificaciones);

module.exports = app;