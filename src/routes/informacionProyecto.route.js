const { getAll, create, getOne, remove, update,setLenguaje } = require('../controllers/InformacionProyecto.controllers');
const express = require('express');

const routeInformacionProyeco = express.Router();

routeInformacionProyeco.route('/')
    .get(getAll)
    .post(create);

routeInformacionProyeco.route('/:id')
    .get(getOne)
    .delete(remove)
    .put(update);

routeInformacionProyeco.route('/:id/lenguaje')
    .post(setLenguaje)

module.exports = routeInformacionProyeco;