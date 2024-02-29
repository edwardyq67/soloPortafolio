const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection');

const Informacion = sequelize.define('informacion', {
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    contend: {
        type: DataTypes.STRING,
        allowNull: false
    },
    url: {
        type: DataTypes.STRING,
        allowNull: false
    },
});

module.exports = Informacion;