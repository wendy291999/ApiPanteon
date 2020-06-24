const {difunto} = require("../models");
const headers = require("../helpers/headers");

const MODULE_NAME = '[Difunto Controller]';

function getDifunto(req, res) {
    difunto.findAll()
        .then(difuntos => res.status(200).send(difuntos))
        .catch(error => res.status(500).send(error));
}

function getDifuntosById(req, res) {
    headers.setHeaders(res);

    const idIn = req.swagger.params.id.value;

    difunto.findByPk(idIn)
        .then(difuntoResponse => res.status(200).send(difuntoResponse))
        .catch(error => res.status(403).send(error));
}

function postDifunto(req, res) {
    console.log("---------------------------------");
    headers.setHeaders(res);

    const difuntoIn = req.body;

    console.log(difuntoIn);

    return difunto.create(difuntoIn)
        .then(difuntoResponse => res.status(201).send(difuntoResponse))
        .catch(error => res.status(400).send(error));
}

function putDifunto(req, res) {
    headers.setHeaders(res);

    const idIn = req.swagger.params.id.value;
    const difuntoIn = req.body;

    difunto.findByPk(idIn).then(difuntoResponse => {
        if (!difuntoResponse) {
            return res.status(404).send({message: "No encontrado!"});
        }

        return difuntoResponse.update(difuntoIn)
            .then(newDifunto => res.status(200).send(newDifunto))
            .catch(error => res.status(403).send(error));
    }).catch(error => console.log(error));
}

function deleteDifunto(req, res) {
    headers.setHeaders(res);

    const idIn = req.swagger.params.id.value;

    difunto.findByPk(idIn).then(difuntoResponse => {
        if (!difuntoResponse) {
            return res.status(200).send({success: 0, description: "No encontrado!"});
        } else {
            return difuntoResponse.destroy()
                .then(() => res.status(200).send({success: 1, description: "Eliminado!"}))
                .catch(() => res.status(403).send({success: 0, description: "Error!"}))
        }
    }).catch(error => console.log(error));
}


module.exports = {
    getDifunto,
    getDifuntosById,
    postDifunto,
    putDifunto,
    deleteDifunto,
    MODULE_NAME
};

