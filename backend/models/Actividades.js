const {Schema, model} = require("mongoose");

const actividadesSchema = new Schema({
    nombre:{
        type: String
    },
    correo:{
        type: String
    },
    estado:{
        type: String
    },
    fechaInicio:{
        type: Date
    },
    fechaEnProgreso: {
        type: Date
    },
    fechaEnFinalizado: {
        type: Date
    },
    perfil:{
        type: String
    },
    tarea:{
        type: String
    }
});

module.exports = model("Actividades",actividadesSchema,"actividades")