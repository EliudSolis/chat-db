const Users = require('./users.models')
const Participants = require('./participants.models')
const Messages = require('./messages.models')
const Conversations = require('./conversations.models')

const initModels = () => {
    Messages.belongsTo(Participants)
    Participants.hasMany(Messages)
    Participants.belongsTo(Conversations)
    Conversations.hasMany(Participants)
    Participants.belongsTo(Users)
    Users.hasMany(Participants)
}

module.exports = initModels

