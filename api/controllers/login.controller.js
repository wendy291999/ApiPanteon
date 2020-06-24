const {registro} = require('../models');
const headers = require("../helpers/headers");

exports.login = function (req, res) {
    headers.setHeaders(res);

    const authIn = req.body;

    registro.findOne({
        where: {
            registro : authIn.registro
        }
    }).then(result => {
        if (!result) {
            return res.status(404).send({message: 'Usuario no encontrado'})
        }

        if (result.contrasena === authIn.contrasena) {
            return res.status(200).send(result)
        }
        else {
            return res.status(404).send({message: "Password incorrecto"})
        }
    }).catch(error => res.status(400).send({message: "Error: " + error}));
};
