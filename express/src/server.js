const express = require('express')

const server = express()

const PORT = 3000

server.get('/', (req, res) => {
    res.send(`Servidor Express funcionando!<br>Você está na página principal.`)
})

server.get('/contato', (req, res) => {
    res.send(`Você está na página <strong>Contato</strong>`)
})

server.listen(PORT, () => {
    console.log(`Servidor Express iniciado em http://localhost:${PORT}`)
})