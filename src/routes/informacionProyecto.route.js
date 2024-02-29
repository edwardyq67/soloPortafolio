const { getAll, create, getOne, remove, update,setLenguaje,setFrontEnd,setBackEnd } = require('../controllers/InformacionProyecto.controllers');
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

routeInformacionProyeco.route('/:id/frontEnd')
    .post(setFrontEnd)
routeInformacionProyeco.route('/:id/backEnd')
    .post(setBackEnd)
module.exports = routeInformacionProyeco;