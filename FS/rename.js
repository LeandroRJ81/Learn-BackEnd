const fs = require("fs")

fs.rename("./arquivo.txt", "file.txt", (error) => {
    if (error) {
        console.log("Erro ao renomear o arquivo " + error.message)
        return
    }

    console.log("Arquivo renomeado com sucesso!")
})