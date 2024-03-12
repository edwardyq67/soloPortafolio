const catchError = require('../utils/catchError');
const InformacionImg = require('../models/InformacionImg');
const { uploadToCloudinary,deleteFromCloudinary } = require('../utils/cloudinary');

const getAll = catchError(async(req, res) => {
    const informacionImg=await InformacionImg.findAll()
    return res.json(informacionImg)
});
const create = catchError(async(req, res) => {
    const { path, filename } = req.file;
    const { url} = await uploadToCloudinary(path, filename);
    const image = await InformacionImg.create({ url:url});
    return res.status(201).json(image);
});
const remove = catchError(async(req, res) => {
    const { id } = req.params;
    const image = await InformacionImg.findByPk(id);
    if(!image) return res.sendStatus(404);
    await deleteFromCloudinary(image.publicId);
    await image.destroy();
    return res.sendStatus(204);
});

module.exports = {
    getAll,
    create,
    remove
}