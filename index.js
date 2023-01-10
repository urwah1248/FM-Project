const app = require('express')()
const products = require('./products.json')
const Product = require('./models/product')

app.get('/products', (req, res) => {
    Product.find({}).then(product => {
        res.json(product)
    })
})

app.get('/products/:id', (req, res) => {
    const id  = req.params.id
    Product.find({id: id}).then(product => {
        res.json(product)
    })
})

app.get('/products/type/:type', (req, res) => {
    const type  = req.params.type
    Product.find({}).then(product => {
        res.json(product.filter(item => {
            return type===item.type
        }))
    })
})

const PORT = 3001
app.listen(PORT)
console.log(`Server running on localhost:${PORT}`)