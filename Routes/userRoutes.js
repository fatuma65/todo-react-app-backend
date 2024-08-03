const route = require('express').Router()

// const { Router } = require('express')
const {createNewUser} = require('../Controllers/createUser')

route.post('/create/user', createNewUser)

module.exports = route