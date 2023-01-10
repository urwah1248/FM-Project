require('dotenv').config()
const mongoose = require('mongoose')

const url = process.env.MONGODB_URL

console.log('Connecting to', url)

mongoose.connect(url)
    .then(() => {
        console.log('connected to MongoDB')
    })
    .catch((error) => {
        console.log('error connecting to MongoDB:', error.message)
    })


const productSchema = mongoose.Schema({
        id: Number,
        name: String,
        price: Number,
        description: String,
        type: String,
        image: Array,
        characterstics: Object
})

productSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        delete returnedObject._id
        delete returnedObject.__v
    }
})

const Product = mongoose.model('product', productSchema)

module.exports = Product