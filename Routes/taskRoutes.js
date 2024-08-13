const route = require('express').Router()
const {authenticateToken} = require('../utilis/auth')

const {createTasks} = require('../Controllers/TasksController/createTasks')

route.post('/create/tasks',authenticateToken, createTasks)

module.exports = route