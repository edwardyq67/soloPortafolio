const { getAll, create, getOne, remove, update } = require('../controllers/Informacion.controllers');
const express = require('express');

const routeInformacion = express.Router();

routeInformacion.route('/')
    .get(getAll)
    .post(create);

routeInformacion.route('/:id')
    .get(getOne)
    .delete(remove)
    .put(update);

module.exports = routeInformacion;