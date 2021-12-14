const Usuario = require("../models/Usuario")

const login = (req, res) => {
    req.body.correo && req.body.clave ?
        Usuario.findOne({ correo: req.body.correo }, (err, user) => {
            if (err) return res.send({msg: "Ocurrió un error: " + err})
            if (user) {
                if (user.clave == req.body.clave) {
                    let jwToken = user.generarJWT()
                    return res.send({ msg: "Acceso permitido", token: jwToken })
                }
                return res.send({msg: "Error!, la contraseña no coincide"})
            }
            return res.send({msg:"El usuario no existe"})
            
        })
        :
        res.send("No se está enviando el parametro 'correo' o 'clave'")
}

module.exports = {
    login
}