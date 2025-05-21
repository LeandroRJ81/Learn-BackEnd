const express = require('express')
const app = express()
const { v4: uuidv4 } = require('uuid')
const cors = require('cors')

app.use(cors())
app.use(express.json())

const tasks = []

app.get('/tasks', (req, res) => {
    return res.json(tasks)
})

app.post('/tasks', (req, res) => {
    const { text } = req.body

    const newTask = { id: uuidv4(), text }
    tasks.push(newTask)

    return res.json(newTask)
})

app.put('/tasks/:id', (req,res) => {
    const { id } = req.params
    const { completed } = req.body

    const taskIndex = tasks.findIndex(task => task.id === id)

    if(taskIndex < 0) {
        return res.status(400).json({ error: "Task not found."  })
    }

    tasks[taskIndex].completed = completed

    return res.json(tasks[taskIndex])
    
})

app.delete('/tasks/:id', (req, res) => {
    const { id } = req.params

    const taskIndex = tasks.findIndex(task => task.id === id)

    if(taskIndex < 0) {
        return res.status(400).json({ error: "Task not found."  })
    }

    tasks.splice(taskIndex, 1)

    return res.status(200).json({ message: "Task removed successfully" })

})

app.listen(3000, () => {
    console.log("Server was started");
    
})


