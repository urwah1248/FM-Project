const app = require('express')()
//const products = require('./products.json')
const Product = require('./models/product')
const morgan = require('morgan')

app.use(morgan((token, request, response) => {
    return [
        token.method(request, response),
        token.url(request, response),
        token.status(request, response),
        token.res(request, response, 'content-length'),
        '-',
        token['response-time'](request, response),
        'ms',
        JSON.stringify(request.body),
    ].join(' ')
})
)

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