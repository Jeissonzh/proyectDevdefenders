const express = require("express");
const { listAllActivities, listAllUserActivities, saveActivity, updateActivity, deleteActivity } = require("../controllers/actividadesCont")
const { verificarToken } = require("../middleware/verificarToken")

const actividades = express.Router();

actividades.use(verificarToken)

actividades.get('/', listAllActivities);
actividades.get('/useract', listAllUserActivities);
actividades.post('/', saveActivity);
actividades.put('/', updateActivity);
actividades.delete('/', deleteActivity);

module.exports = {
    actividades
}