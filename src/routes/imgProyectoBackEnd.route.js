const { getAll, create, getOne, remove, update } = require('../controllers/ImgProyectoBackenEnd.controllers');
const express = require('express');

const routeImgProyectoBackEnd = express.Router();

routeImgProyectoBackEnd.route('/')
    .get(getAll)
    .post(create);

routeImgProyectoBackEnd.route('/:id')
    .get(getOne)
    .delete(remove)
    .put(update);

module.exports = routeImgProyectoBackEnd;