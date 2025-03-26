const express = require('express')
const app = express()
const { v4: uuidv4 } = require('uuid')
app.use(express.json())

const registers = []

app.get('/registers', (req, res) => {
    try {
        if (!registers) {
            return res.status(404).json({ error: "Nenhum registro encontrado" })
        }
        return res.json(registers)
    } catch(error) {
        console.error("Erro interno", error)
        return res.status(500).json({ error: "Erro interno do servidor" })
    }  
})

app.post('/registers', (req, res) => {
    try {
        const { 
            fullname,
            email,
            phone,
            address,
            password,
            conf_pass,
        } = req.body

        if(!email.includes("@")) {
            return res.status(400).json({ error: "Digite um email válido" })
        }
    
        if(password !== conf_pass) {
            return res.status(400).json({ error: "Digite a mesma senha" })
        }
    
        const register = { 
            id: uuidv4(), 
            fullname, 
            email, 
            phone,
            address,
            password,
            conf_pass,
        }
    
        registers.push(register)
        return res.status(201).json(register)
    } catch (error) {
        console.error("Erro ao criar registro", error)
        return res.status(500).json({ error: "Erro interno do servidor" })
    }    
})

app.put('/registers/:id', (req, res) => {
    try {
        const { id } = req.params
        const { 
            fullname,
            email,
            phone,
            address,
            password,
            conf_pass,
        } = req.body
    
        const registerIndex = registers.findIndex(register => register.id === id)
    
        if(registerIndex < 0) {
            return res.status(404).json({ error: "Registro não encontrado." })
        }

        if (!email.includes("@")) {
            return res.status(400).json({ error: "Digite um email válido" });
        }
    
        if(password !== conf_pass) {
            return res.status(400).json({ error: "Digite a mesma senha" })
        }
    
        const updatedRegister = { 
            id,
            fullname,
            email,
            phone,
            address,
            password,
            conf_pass,
        }
  
        registers[registerIndex] = updatedRegister
        return res.status(200).json(updatedRegister)
    } catch (error) {
        console.error("Erro", error)
        return res.status(500).json({ error: "Erro ao alterar registro" })
    }
})

app.delete('/registers/:id', (req, res) => {
    try {
        const { id } = req.params
        const registerIndex = registers.findIndex(register => register.id === id)

        if(registerIndex < 0) {
            return res.status(404).json({ error: "Registro não encontrado." })
        }

        registers.splice(registerIndex, 1)
        return res.status(204).send()
    } catch (error) {
        console.error("Erro", error)
        return res.status(500).json({ error: "Erro ao deletar registro" })
    }
})

app.listen(3333)
