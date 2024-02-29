const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection');

const IMGProyectoBackEnd = sequelize.define('imgProyectoBackEnd', {
    titulo: {
        type: DataTypes.STRING,
        allowNull: false
    },
    urlImagen: {
        type: DataTypes.STRING,
        allowNull: false
    },
    urlGitHub: {
        type: DataTypes.STRING,
        allowNull: false
    },
});

module.exports = IMGProyectoBackEnd;