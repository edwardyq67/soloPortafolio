const InformacionProyecto = require("./InformacionProyecto");
const Lenguaje = require("./Lenguaje");

const IMGProyectoBackEnd = require("./imgProyectoBackEnd");
const IMGPProyectosFrontEnd = require("./imgProyectosFrontEnd");


InformacionProyecto.belongsToMany(IMGPProyectosFrontEnd,{through:'ProyectoFrontEnd'})
IMGPProyectosFrontEnd.belongsToMany(InformacionProyecto,{through:'ProyectoFrontEnd'})

InformacionProyecto.belongsToMany(IMGProyectoBackEnd,{through:'ProyectoBackEnd'})
IMGProyectoBackEnd.belongsToMany(InformacionProyecto,{through:'ProyectoBackEnd'})

InformacionProyecto.belongsToMany(Lenguaje,{through:'InformacionLenguaje'})
Lenguaje.belongsToMany(InformacionProyecto,{through:'InformacionLenguaje'})