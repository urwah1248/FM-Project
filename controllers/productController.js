const productModel = require("../models/productModel")

const productController = {
    getAllProducts: (req, res) => {
        productModel.find({}, (err, product) => {
            if (err) {
                res.json(err)
            }
            else {
                res.json(product)
            }
        })
    },

    getProductById: (req, res) => {
        const id = req.params.id
        productModel.find({ id }, (err, product) => {
            if (err) {
                res.json(err)
            }
            else {
                res.json(product)
            }
        })
    },

    getProductsByType: (req, res) => {
        const type = req.params.type
        productModel.find({ type }, (err, product) => {
            if (err) {
                res.json(err)
            }
            else {
                res.json(product)
            }
        })
    }
}
module.exports = productController