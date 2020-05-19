const porta = 3003
const express = require('express')
const bodyParser = require('body-parser')
const app = express()

app.use(bodyParser.urlencoded({ extended: true }))

const bancoDeDados = require('./bancoDeDados')

app.get('/produtos', (req, res, next) => {
    console.log("Novo cliente")
    next()
})

app.get('/produtos', (req, res, next) => {
    res.send(bancoDeDados.getProdutos())
})

app.get('/produtos/:id', (req, res, next) => {
    res.send(bancoDeDados.getProduto(req.params.id))
})

app.post('/produto', (req, res, next) => {
    const produto = bancoDeDados.salvarProduto({
        nome: req.body.name,
        preco: req.body.price
    })
    res.send(produto)
})

app.put('/produto/:id', (req, res, next) => {
    const produto = bancoDeDados.salvarProduto({
        id: req.params.id,
        nome: req.body.name,
        preco: req.body.price
    })
    res.send(produto)
})

app.put('/produto/:id', (req, res, next) => {
    const produto = bancoDeDados.deletarProduto(req.params.id)
    res.send(produto)
})

app.listen(porta, () => {
    console.log("Servidor na porta " + porta)
})