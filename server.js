import express from 'express'

const app = express()
app.use(express.json())

const users = []

app.post('/usuarios', (req, res) => {
    users.push(req.body)

    res.status(201).json
})

app.get('/usuarios', (req, res) => {
    res.status(200).json(users)
})

/*
    ---- METODOS ----
    C REATE ->  POST
    R READ  ->  GET
    U PDATE ->  PUT
    D ELETE ->  DELETE

    ROTAS PRECISAM DE:
    1 - Tipo de rota / Metodo HTTP
    2 - Endereço
    user-mongo: juanlramos
*/

app.listen(3000)