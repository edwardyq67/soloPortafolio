const { create } = require('../controllers/informacionImg.controllers');
const { getAll,remove } = require('../controllers/informacionImg.controllers');
const express = require('express');
const upload = require('../utils/multer');

const routerinformacionImg = express.Router();

routerinformacionImg.route('/')
    .get(getAll)
    .post(upload.single('image'),create)
routerinformacionImg.route('/:id')
    .delete(remove)
module.exports = routerinformacionImg;