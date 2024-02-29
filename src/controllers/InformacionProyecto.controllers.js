const catchError = require('../utils/catchError');
const InformacionProyecto = require('../models/InformacionProyecto');
const Lenguaje = require('../models/Lenguaje');
const getAll = catchError(async(req, res) => {
    const results = await InformacionProyecto.findAll({include:[Lenguaje]});
    return res.json(results);
});

const create = catchError(async(req, res) => {
    const result = await InformacionProyecto.create(req.body);
    return res.status(201).json(result);
});

const getOne = catchError(async(req, res) => {
    const { id } = req.params;
    const result = await InformacionProyecto.findByPk(id);
    if(!result) return res.sendStatus(404);
    return res.json(result);
});

const remove = catchError(async(req, res) => {
    const { id } = req.params;
    await InformacionProyecto.destroy({ where: {id} });
    return res.sendStatus(204);
});

const update = catchError(async(req, res) => {
    const { id } = req.params;
    const result = await InformacionProyecto.update(
        req.body,
        { where: {id}, returning: true }
    );
    if(result[0] === 0) return res.sendStatus(404);
    return res.json(result[1][0]);
});
const setLenguaje=catchError(async(req,res)=>{
    const {id}=req.params;
    const informaionProyecto=await InformacionProyecto.findByPk(id);
    await informaionProyecto.setLenguajes(req.body);
    const lenguaje=await informaionProyecto.getLenguajes(InformacionProyecto);
    return res.json(lenguaje);
})
const setFrontEnd=catchError(async(req,res)=>{
    const {id}=req.params;
    const informaionProyecto=await InformacionProyecto.findByPk(id);
    await informaionProyecto.setIMGPProyectosFrontEnds(req.body);
    const frontEnd=await informaionProyecto.getIMGPProyectosFrontEnds(InformacionProyecto);
    return res.json(frontEnd);
})
const setBackEnd=catchError(async(req,res)=>{
    const {id}=req.params;
    const informaionProyecto=await InformacionProyecto.findByPk(id);
    await informaionProyecto.setIMGProyectoBackEnds(req.body);
    const backEnd=await informaionProyecto.getIMGProyectoBackEnds(InformacionProyecto);
    return res.json(backEnd);
})
module.exports = {
    getAll,
    create,
    getOne,
    remove,
    update,
    setLenguaje,
    setFrontEnd,
    setBackEnd
}