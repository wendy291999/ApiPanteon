const {sepultura} = require("../models");
const headers = require("../helpers/headers");

const MODULE_NAME = '[Covid Controller]';

function getSepultura(req, res) {
    sepultura.findAll()
        .then(sepulturas => res.status(200).send(sepulturas))
        .catch(error => res.status(500).send(error));
}

function getSepulturaById(req, res) {
    headers.setHeaders(res);

    const idIn = req.swagger.params.id.value;

    sepultura.findByPk(idIn)
        .then(sepulturaResponse => res.status(200).send(sepulturaResponse))
        .catch(error => res.status(403).send(error));
}

function postSepultura(req, res) {
    console.log("---------------------------------");
    headers.setHeaders(res);

    const sepulturaIn = req.body;

    console.log(sepulturaIn);

    return sepultura.create(sepulturaIn)
        .then(sepulturaResponse => res.status(201).send(sepulturaResponse))
        .catch(error => res.status(400).send(error));
}

function putSepultura(req, res) {
    headers.setHeaders(res);

    const idIn = req.swagger.params.id.value;
    const sepulturaIn = req.body;

    covid.findByPk(idIn).then(sepulturaResponse => {
        if (!sepulturaResponse) {
            return res.status(404).send({message: "No encontrado!"});
        }

        return sepulturaResponse.update(sepulturaIn)
            .then(newSepultura => res.status(200).send(newSepultura))
            .catch(error => res.status(403).send(error));
    }).catch(error => console.log(error));
}

function deleteSepultura(req, res) {
    headers.setHeaders(res);

    const idIn = req.swagger.params.id.value;

    sepultura.findByPk(idIn).then(sepulturaResponse => {
        if (!sepulturaResponse) {
            return res.status(200).send({success: 0, description: "No encontrado!"});
        } else {
            return sepulturaResponse.destroy()
                .then(() => res.status(200).send({success: 1, description: "Eliminado!"}))
                .catch(() => res.status(403).send({success: 0, description: "Error!"}))
        }
    }).catch(error => console.log(error));
}


module.exports = {
    getSepultura,
    getSepulturaById,
    postSepultura,
    putSepultura,
    deleteSepultura,
    MODULE_NAME
};

