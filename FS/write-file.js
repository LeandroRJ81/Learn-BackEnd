const fs = require("fs")

const content = "Hello World!"

fs.writeFile("./arquivo.txt", content, "utf-8", (error) => {
    if (error) {
        console.log("Erro ao escrever arquivo: " + error.message)
        return
    }

    console.log("Arquivo criado com sucesso!")
})