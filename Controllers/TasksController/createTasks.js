const {PrismaClient} = require('@prisma/client')
const prisma = new PrismaClient()

const createTasks = async (req, res) => {
    const {title, description, user} = req.body

    const tasks = await prisma.todo.create({
        data : {
            title: title,
            description: description,
            user: user
        }
    })
    console.log(tasks)

    if (!tasks) {
        console.log('Please enter your tasks here')
        res.status(400).json({error:'No tasks are entered'})
    }
    else {
        res.status(201).json({Message: 'New task is created successfully'})
    }
}
module.exports = {createTasks}