const route = require('express').Router()

// const { Router } = require('express')
const {createNewUser} = require('../Controllers/userController/createUser')
const {loginUser} = require('../Controllers/userController/loginUser')

route.post('/create/user', createNewUser)
route.post('/login/user', loginUser)

module.exports = route