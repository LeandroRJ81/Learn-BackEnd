const express = require('express')

const app = express()

const cars = [
    { marca: "VolksWagen", modelo: "Gol", cor: "azul", ano: 2020, motor: 1.0 },
    { marca: "Chevrolet", modelo: "Corsa", cor: "branco", ano: 2018, motor: 1.4 },
    { marca: "FIAT", modelo: "Palio", cor: "vermelho", ano: 2021, motor: 1.0 },
    { marca: "Ford", modelo: "Fiesta", cor: "branco", ano: 2019, motor: 1.6 }
]

app.get('/', (req, res) => {
    res.json({ message: "Hello World" })
})

app.get('/cars', (req, res) => {
    res.json(cars)
})

const PORT = 3000

app.listen(PORT, () => {
    console.log(`Servidor iniciado!\nRodando em http://localhost:${PORT}`)
})