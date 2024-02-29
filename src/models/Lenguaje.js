const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection');

const Lenguaje = sequelize.define('lenguaje', {
    url: {
        type: DataTypes.STRING,
        allowNull: false
    },
});

module.exports = Lenguaje;