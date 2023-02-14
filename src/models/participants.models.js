const { DataTypes } = require('sequelize') //Los tipos de datos para la traducción
const db = require('../utils/database')

const Participants = db.define('participants', {
    id: {
        type: DataTypes.UUID,
        primaryKey: true        
    },
    userId: {
        type: DataTypes.UUID,
        allowNull: false,
        unique: true
    },
    conversationId: {
        type: DataTypes.UUID,
        allowNull: false,
    },
    isAdmin: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
    }
})

module.exports = Participants