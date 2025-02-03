const express = require('express')
const app = express()
const { randomUUID } = require('crypto')

app.use(express.json())

let players = []

app.get('/players', (req, res) => {
    return res.json(players)
})

app.post('/players', (req, res) => {
    const { name, number } = req.body

    const player = { id: randomUUID(), name, number }
    players.push(player)

    return res.status(201).json(player)
})

app.put('/players/:id', (req, res) => {
    const { id } = req.params
    const { name, number } = req.body

    const playerIndex = players.findIndex(player => player.id === id)

    if (playerIndex < 0) {
        return res.status(400).json({ error: "Player not found" })
    }

    const player = {
        id,
        name,
        number,
    }

    players[playerIndex] = player

    return res.json(player)
})

app.delete('/players/:id', (req, res) => {
    const { id } = req.params
    
    const playerIndex = players.findIndex(player => player.id === id)

    if (playerIndex < 0) {
        return res.status(400).json({ error: "Player not found" })
    }

    players.splice(playerIndex, 1)

    return res.status(204).send()
})

app.listen(3333)
