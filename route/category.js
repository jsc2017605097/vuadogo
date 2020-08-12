const categoryRouter = require('express').Router()
const categoryModel = require('../model/category')
const middleware = require('../utils/middleware')
const productModel = require('../model/products')

categoryRouter.post('/', middleware.checkToken, async (req, res, next) => {
    const category = new categoryModel(req.body)
    const savedCategory = await category.save()
    res.status(200).json(savedCategory)
})

categoryRouter.get('/', async (req, res, next) => {
    const categories = await categoryModel.find({}).populate('products')
    res.status(200).json(categories)
})

categoryRouter.delete('/:id', middleware.checkToken, async (req, res, next) => {
    const deletedCategory = await categoryModel.findByIdAndRemove(req.params.id)
    const products = req.body
    if (products.length > 0) {
        products.forEach(async product => {
            await productModel.findByIdAndRemove(product._id)
        })
    }
    res.status(200).json(deletedCategory)
})

categoryRouter.put('/:id', middleware.checkToken, async (req, res) => {
    const category = await categoryModel.findById(req.params.id).populate('products')
    category.name = req.body.name
    const updatedCategory = await category.save()
    res.status(200).json(updatedCategory)
})

module.exports = categoryRouter