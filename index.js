const app = require('express')()
const products = require('./products.json')

app.get('/products', (req, res) => {
    res.json(products)
})

app.get('/products/:id', (req, res) => {
    const id  = req.params.id
    res.json(products[id-1])
})

app.get('/products/type/:type', (req, res) => {
    const type  = req.params.type
    const filtered = products.filter(product => {
        return type===product.type
    })
    res.json(filtered)
})

const PORT = 3001
app.listen(PORT)
console.log(`Server running on localhost:${PORT}`)