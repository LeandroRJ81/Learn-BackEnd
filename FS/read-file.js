const fs = require("fs")

fs.readFile("./arquivo.txt", "utf-8", (error, data) => {
    if (error) {
        console.log("Erro ao ler o arquivo " + error.message)
        return
    }

    console.log(data)
})