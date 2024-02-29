const { getAll, create, getOne, remove, update } = require('../controllers/ImgProyectoFrontEnd.controllers');
const express = require('express');

const routeImgProyectoFrontEnd = express.Router();

routeImgProyectoFrontEnd.route('/')
    .get(getAll)
    .post(create);

routeImgProyectoFrontEnd.route('/:id')
    .get(getOne)
    .delete(remove)
    .put(update);

module.exports = routeImgProyectoFrontEnd;