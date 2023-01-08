const app = require('express')()
const products = require('./products.json')

app.get('/products', (req, res) => {
    res.json(products)
})

app.get('/products/:id', (req, res) => {
    const id  = req.params.id
    res.json(products[id])
})

const PORT = 3001
app.listen(PORT)
console.log(`Server running on localhost:${PORT}`)