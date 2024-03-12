const express = require('express');

const routeInformacionProyeco = require('./informacionProyecto.route');

const routeImgProyectoBackEnd = require('./imgProyectoBackEnd.route');
const routeImgProyectoFrontEnd = require('./imgProyectoFrontEnd');
const routeLenguaje = require('./lenguaje.routes');
const routeInformacion = require('./informacion.route');
const routerinformacionImg = require('./informacionImg.module');
const sendEmail = require('../utils/sendEmail');
const catchError = require('../utils/catchError');
const router = express.Router();

// colocar las rutas aquí
router.use("/informacion",routeInformacion)
router.use("/informacionImg",routerinformacionImg)

router.use("/informacionProyect",routeInformacionProyeco)
router.use("/imgProyectoFrontEnd",routeImgProyectoFrontEnd)
router.use("/lenguaje",routeLenguaje)
router.use("/imgProyectoBackEnd",routeImgProyectoBackEnd)

router.post("/emails/contact",catchError(async(req,res)=>{
const {correo,nombre,mensaje} = req.body;
await sendEmail({
    to:"edwardyq200167@gmail.com",
    subject:"EDWARD TE QUIEREN PARA PROGRAMAR",
    html:`${nombre} te esta buscando para que te integres, su correo es ${correo}
    <hr>
    <p>${mensaje}</p>
    `
})
return  res.json({message:"Enviando email"});
}))
module.exports = router;