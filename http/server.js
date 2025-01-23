const http = require('http')

const server = http.createServer((req, res) => {
    console.log(req)
    res.writeHead(200)
    res.write('Servidor HTTP em Node.Js funcionando!')
    res.end()
})

const PORT = 8080

server.listen(PORT, () => {
    console.log(`Servidor rodando em: http://localhost:${PORT}`)
})