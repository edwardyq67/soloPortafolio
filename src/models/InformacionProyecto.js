const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection');

const InformacionProyecto = sequelize.define('informacionProyecto', {
    titulo: {
        type: DataTypes.STRING,
        allowNull: false
    },
    parrafo: {
        type: DataTypes.STRING,
        allowNull: false
    },
    
});

module.exports = InformacionProyecto;