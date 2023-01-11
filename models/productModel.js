
const mongoose = require('mongoose')


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

const productModel = mongoose.model('product', productSchema)

module.exports = productModel