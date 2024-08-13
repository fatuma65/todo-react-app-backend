require('dotenv').config()
const express = require('express')
const {PrismaClient} = require('@prisma/client')
const userRoutes = require('./Routes/userRoutes')
const taskRoutes = require('./Routes/taskRoutes')
const port = process.env.PORT
const app = express()
const prisma = new PrismaClient()

app.use(express.json())

app.use('/users', userRoutes)
app.use('/tasks', taskRoutes)
app.listen(4000, () => {
    console.log(`Server running on port ${port}`)
})