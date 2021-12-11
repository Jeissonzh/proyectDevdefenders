const Actividades = require("../models/Actividades")

const listAllActivities = (req, res) => {
    console.log(req.user)
    Actividades.find((err, actividades) => {
        if (err) return res.send(err)
        return res.send(actividades)
    })
}

const listAllUserActivities = (req, res)=>{
    Actividades.find({"perfil":"usuario"},(err, actividades) => {
        if (err) return res.send(err)
        return res.send(actividades)
    })
}

const saveActivity = (req, res) => {
    let document = req.body;
    Actividades.find({ "tarea": document.tarea, "pefil": document.perfil }, (err, actividades) => {
        if (err) return res.send(err);
        if (actividades.length > 0) {
            res.status(400).send({type:"error",msg:"La tarea ya existe!"});
        } else {
            Actividades.create(req.body).then((data) => {
                console.log(data)
                return res.status(200).send({type:"ok",msg:"Se creó la tarea"});
            }).catch(err => {
                console.log(err);
                return res.status(500).send({type:"error", msg: err});
            })
        }
    })
}

const updateActivity = (req, res) => {
    Actividades.updateOne({ "tarea": req.query.tarea, "perfil": req.query.pefil }, req.body, (err, mongoResponse) => {
        if (err) return res.send(err)
        console.log(mongoResponse)
        return mongoResponse.modifiedCount == 1 ? res.send("Tarea actualizada") : res.send("No se actualizó la tarea")
    });
}


const deleteActivity = (req,res) => {
    Actividades.deleteOne({ "tarea": req.query.tarea, "perfil": req.query.perfil },(err,mongoResponse)=>{
        if(err) return res.send(err)
        console.log(mongoResponse)
        return mongoResponse.deletedCount == 1 ? res.send("Se eliminó la tarea") : res.send("No se eliminó la tarea")
    })
}

module.exports = {
    listAllActivities,
    listAllUserActivities,
    saveActivity,
    updateActivity,
    deleteActivity,
}