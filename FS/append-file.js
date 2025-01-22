const fs = require("fs")

fs.appendFile("./arquivo.txt", "Here we go again!", (error) => {
    if (error) {
        console.log("Erro ao modificar o arquivo: " + error.message)
        return
    }

    console.log("Arquivo modificado com sucesso!")
})