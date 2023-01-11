
// server hosted at https://magnificent-teal-scorpion.cyclic.app/

const app = require('express')()
const PORT = 5000
require('dotenv').config()
const mongoose = require('mongoose')
const { getAllProducts, getProductById, getProductsByType } = require('./controllers/productController')


mongoose.connect(process.env.URI)
    .then(() => {
        console.log('MongoDB Connected')
    })
    .catch((error) => {
        console.log('MongoDB Connection Error', error.message)
    })


app.get('/products', getAllProducts)
app.get('/products/:id', getProductById)
app.get('/products/type/:type', getProductsByType)


app.listen(PORT)
console.log(`Server running at https://localhost:${PORT}`)