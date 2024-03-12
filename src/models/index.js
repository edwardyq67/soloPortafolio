const InformacionProyecto = require("./InformacionProyecto");
const Lenguaje = require("./Lenguaje");

const IMGProyectoBackEnd = require("./imgProyectoBackEnd");
const IMGPProyectosFrontEnd = require("./imgProyectosFrontEnd");

InformacionProyecto.belongsToMany(Lenguaje,{through:'InformacionLenguaje'})
Lenguaje.belongsToMany(InformacionProyecto,{through:'InformacionLenguaje'})

InformacionProyecto.belongsTo(IMGPProyectosFrontEnd)
IMGPProyectosFrontEnd.hasMany(InformacionProyecto)

InformacionProyecto.belongsTo(IMGProyectoBackEnd)
IMGProyectoBackEnd.hasMany(InformacionProyecto)