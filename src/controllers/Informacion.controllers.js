const catchError = require('../utils/catchError');
const Informacion = require('../models/informacion');
const {Op}=require('sequelize')
const getAll = catchError(async(req, res) => {
    const {title,contend,url}=req.query
    const where={}
    if(title)where.title={[Op.iLike]:`%${title}%`}
    const results = await Informacion.findAll({
        where
    });
    return res.json(results);
});

const create = catchError(async(req, res) => {
    const result = await Informacion.create(req.body);
    return res.status(201).json(result);
});

const getOne = catchError(async(req, res) => {
    const { id } = req.params;
    const result = await Informacion.findByPk(id);
    if(!result) return res.sendStatus(404);
    return res.json(result);
});

const remove = catchError(async(req, res) => {
    const { id } = req.params;
    await Informacion.destroy({ where: {id} });
    return res.sendStatus(204);
});

const update = catchError(async(req, res) => {
    const { id } = req.params;
    const result = await Informacion.update(
        req.body,
        { where: {id}, returning: true }
    );
    if(result[0] === 0) return res.sendStatus(404);
    return res.json(result[1][0]);
});

module.exports = {
    getAll,
    create,
    getOne,
    remove,
    update
}