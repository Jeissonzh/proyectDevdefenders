const {Schema, model} = require("mongoose");
const jwt = require("jsonwebtoken");

const usuarioSchema = new Schema({
    nombre:{
        type: String
    },
    correo:{
        type: String
    },
    clave:{
        type: String
    }
});

usuarioSchema.methods.generarJWT = ()=>{
    return jwt.sign({
        _id: this._id,
        nombre: this.nombre,
        correo: this.correo
    },"mongoNode")
}

module.exports = model("Usuario",usuarioSchema,"usuarios")