const {registro} = require("../models");
const headers = require("../helpers/headers");

const MODULE_NAME = '[Registro Controller]';

function postRegistro(req, res) {
    headers.setHeaders(res);

    const RegistroIn = req.body;

    return registro.create(RegistroIn)
        .then(registro => res.status(201).send(registro))
        .catch(error => res.status(400).send(error));
}

function deleteRegistro(req, res) {
    headers.setHeaders(res);

    const idIn = req.swagger.params.id.value;

    registro.findByPk(idIn).then(user => {
        if (!registre) {
            return res.status(200).send({success: 0, description: "No encontrado!"});
        } else {
            return user.destroy()
                .then(() => res.status(200).send({success: 1, description: "Eliminado!"}))
                .catch(() => res.status(403).send({success: 0, description: "Error!"}))
        }
    }).catch(error => console.log(error));
}


module.exports = {
    postRegistro,
    deleteRegistro,
    MODULE_NAME
};

