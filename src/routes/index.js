const express = require('express');

const routeInformacionProyeco = require('./informacionProyecto.route');

const routeImgProyectoBackEnd = require('./imgProyectoBackEnd.route');
const routeImgProyectoFrontEnd = require('./imgProyectoFrontEnd');
const routeLenguaje = require('./lenguaje.routes');
const routeInformacion = require('./informacion.route');
const routerinformacionImg = require('./informacionImg.module');

const routerEmail = require('./emails.routes');
const router = express.Router();

// colocar las rutas aquí
router.use("/informacion",routeInformacion)
router.use("/informacionImg",routerinformacionImg)

router.use("/informacionProyect",routeInformacionProyeco)
router.use("/imgProyectoFrontEnd",routeImgProyectoFrontEnd)
router.use("/lenguaje",routeLenguaje)
router.use("/imgProyectoBackEnd",routeImgProyectoBackEnd)

router.use('/email',routerEmail)
module.exports = router;