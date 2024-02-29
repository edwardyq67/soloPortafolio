const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection');

const IMGPProyectosFrontEnd = sequelize.define('imgProyectosFrontEnd', {
    titulo: {
        type: DataTypes.STRING,
        allowNull: false
    },
    urlImgen:{
        type:DataTypes.STRING,
        allowNull: false
    },
    urlFrontEnd:{
        type:DataTypes.STRING,
        allowNull: false
    },
    urlGitHub:{
        type:DataTypes.STRING,
        allowNull: false
    },
});

module.exports = IMGPProyectosFrontEnd;