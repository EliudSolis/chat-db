const Users = require('../models/users.models')

const findAllUsers = async () => {
  const data = await Users.findAll()

    return data
}

const findUserById = async(id) =>{
    const data = Users.findOne({where: {id: id}})

    return data
    
}
const createNewUser = async(data) =>{
    const newUser = {
        id: data.id,
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        password: data.password,
        profileImage: data.profileImage,
        phone: data.phone
    }
    const createdUser = await Users.create(newUser)
    
    return createdUser
}
const updateUser = async(id, data) =>{
    const userToUpdate = await Users.update(data, {
        where: {id: id}})
    return userToUpdate
}
const deleteUser = async(id) =>{
    const userToDelete = await Users.destroy({where: {id: id}})

    return userToDelete
    
}


module.exports = {
    findAllUsers,
    findUserById,
    createNewUser, 
    updateUser,
    deleteUser
}