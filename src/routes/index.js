const express = require('express');

const routeInformacionProyeco = require('./informacionProyecto.route');

const routeImgProyectoBackEnd = require('./imgProyectoBackEnd.route');
const routeImgProyectoFrontEnd = require('./imgProyectoFrontEnd');
const routeLenguaje = require('./lenguaje.routes');
const router = express.Router();

// colocar las rutas aquí


router.use("/informacionProyect",routeInformacionProyeco)
router.use("/imgProyectoFrontEnd",routeImgProyectoFrontEnd)
router.use("/lenguaje",routeLenguaje)
router.use("/imgProyectoBackEnd",routeImgProyectoBackEnd)


module.exports = router;