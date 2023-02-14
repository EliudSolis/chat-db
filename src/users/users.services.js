const userControllers = require('./users.controllers')
const responseHandlers = require('../utils/handleresponse')

const findAllUsers = (req, res) =>{
    userControllers.findAllUsers()
    .then(data => {
        responseHandlers.success({
            res,
            status: 200,
            message: 'Users find succesfully',
            data: data
        })
    })
    .catch(err => {
        responseHandlers.error({
            res,
            status: 404,
            message: 'URL not found, please try with http://localhost:9000/users'
        })
    })
}
const findUserById = (req, res) =>{
    const id = Number(req.params.id)

    userControllers.findUserById(id)
    .then(data => {
        if (data){
            responseHandlers.success({
                res,
                status: 200,
                message: 'User found successfully',
                data: data
            })
        } else {
            responseHandlers.error({
                res,
                status: 404,
                message: 'Id not found, please type an valid ID'
            })
        }
    })
    .catch(err => {
        responseHandlers.error({
            res,
            status: 404,
            message: 'URL not found, please try with: http://localhost:9000/api/v1/users/:id'
        })
    })
}
const createNewUser = (req, res) =>{
    const data = req.body

    userControllers.createNewUser(data)
    .then(data => {
        if (data){
            responseHandlers.success({
                res,
                status: 201,
                message: 'User created successfully',
                data: data
            })
        } else {
            responseHandlers.error({
                res,
                status: 400,
                message: {
                    message: 'Request Error try as:',
                    example: {
                        id: data.id,
                        firstName: data.firstName,
                        lastName: data.lastName,
                        email: data.email,
                        password: data.password,
                        profileImage: data.profileImage,
                        phone: data.phone
                    }
                }
            })
        }
    })
    .catch(err => {
        responseHandlers.error({
            res,
            status: 404,
            message: err
        })
    })

}
const updateUser = (req, res) =>{
    const id = Number(req.params.id)
    const data = req.body

    userControllers.updateUser(id, data)
    .then(data => {
        if (data){
            responseHandlers.success({
                res,
                status: 202,
                message: 'User upadted successfully',
                data: data
            })
        } else {
            responseHandlers.error({
                res,
                status: 404,
                message: "Id not found"
            })
        }
    })
    .catch(err => {
        responseHandlers.error({
            res,
            status: 404,
            message: err
        })
    })

}
const deleteUser = (req, res) =>{
    const id = Number(req.params.id)

    userControllers.deleteUser(id)
    .then(data => {
        if (data){
            responseHandlers.success({
                res,
                status: 202,
                message: 'User deleted successfully',
                data: data
            })
        } else {
            responseHandlers.error({
                res,
                status: 404,
                message: "Id not found"
            })
        }
    })
    .catch(err => {
        responseHandlers.error({
            res,
            status: 404,
            message: err
        })
    })

}

module.exports = {
    findAllUsers,
    findUserById,
    createNewUser,
    updateUser,
    deleteUser
}