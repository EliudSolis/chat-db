const userServices = require('./users.services')
const router = require('express').Router()

router.get('/users', userServices.findAllUsers)

router.post('/users', userServices.createNewUser)

router.get('/users/:id', userServices.findUserById)

router.put('/users/:id', userServices.updateUser)

router.delete('/users/:id', userServices.deleteUser)

module.exports = router