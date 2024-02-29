const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection');

const ImgInformacion = sequelize.define('imgInformacion', {
    url: {
        type: DataTypes.STRING,
        allowNull: false
    },
   
    //newId
});

module.exports = ImgInformacion;