const productRouter = require('express').Router()
const productModel = require('../model/products')
const middleware = require('../utils/middleware')
const fs = require('fs')

productRouter.get('/', async (req, res) => {
    const products = await productModel.find({})
    res.status(200).json(products)
})

productRouter.post('/', middleware.checkToken, async (req, res, next) => {
    if (req.body.img.length === 0) {
        return res.status(400).send("Ảnh không được để trống!")
    }
    const objectProduct = { ...req.body}
    const newProduct = new productModel(objectProduct)
    const savedProduct = await newProduct.save()

    res.status(200).json(savedProduct)
})

productRouter.put('/:id', middleware.checkToken, async (req, res, next) => {
    const product = await productModel.findById(req.params.id)
    const updatedProduct = await productModel.findByIdAndUpdate(req.params.id,
        { ...req.body, user: product.user },
        { new: true })
    res.status(200).json(updatedProduct)
})

productRouter.delete('/:id', middleware.checkToken, async (req, res) => {
    const deletedProduct = await productModel.findByIdAndRemove(req.params.id)
    deletedProduct.img.forEach(img => {
        fs.unlink('./build' + img, () => console.log('deleted image'))
    })
    res.status(200).json(deletedProduct)
})

module.exports = productRouter