const express = require("express");
const {listAllActivities,listAllUserActivities,saveActivity,updateActivity,deleteActivity} = require("../controllers/actividadesCont")

const actividades = express.Router();

actividades.get('/', listAllActivities);
actividades.get('/useract', listAllUserActivities);
actividades.post('/', saveActivity);
actividades.put('/', updateActivity);
actividades.delete('/', deleteActivity);

module.exports = {
    actividades
}