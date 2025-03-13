const express = require('express')
const app = express()
const { v4: uuidv4 } = require('uuid')
app.use(express.json())

const tasks = []

app.get('/tasks', (req, res) => {
    return res.json(tasks)
})

app.post('/tasks', (req, res) => {
    const { task } = req.body

    const newTask = { id: uuidv4(), task }
    tasks.push(newTask)

    return res.json(newTask)
})

app.delete('/tasks/:id', (req, res) => {
    const { id } = req.params

    const taskIndex = tasks.findIndex(task => task.id === id)

    if(taskIndex < 0) {
        return res.status(400).json({ error: "Task not found."  })
    }

    tasks.splice(taskIndex, 1)

    return res.json({ message: "Task removed successfully" })

})

app.listen(3000)


