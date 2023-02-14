const { DataTypes } = require('sequelize') //Los tipos de datos para la traducción
const db = require('../utils/database')

const Conversations = db.define('conversations', {
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
    }, 
    content: {
        type: DataTypes.STRING,        
    },
    participantsId: {
        type: DataTypes.UUID,
        allowNull: false
    },
    status: {
        type: DataTypes.STRING,
        allowNull: false
    }
})

module.exports = Conversations