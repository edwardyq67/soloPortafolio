const { getAll, create, getOne, remove, update } = require('../controllers/Lenguaje.controllers');
const express = require('express');

const routeLenguaje = express.Router();

routeLenguaje.route('/')
    .get(getAll)
    .post(create);

routeLenguaje.route('/:id')
    .get(getOne)
    .delete(remove)
    .put(update);

module.exports = routeLenguaje;