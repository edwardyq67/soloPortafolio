const express = require('express');
const cors = require('cors'); // Importa el paquete cors
const { sayHi } = require('../controllers/email.controllers');

const routerEmail = express.Router();

// Configura CORS para la ruta 'sayHi'
routerEmail.post('/', cors(), sayHi);

module.exports = routerEmail;
