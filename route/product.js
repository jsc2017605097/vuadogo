const productRouter = require('express').Router()
const productModel = require('../model/products')
const userModel = require('../model/user')
const categoryModel = require('../model/category')
const middleware = require('../utils/middleware')

productRouter.get('/', async (req, res) => {
    const products = await productModel.find({}).populate('category').populate('user',{name:1,_id:0})
    res.status(200).json(products)
})

productRouter.post('/', middleware.checkToken, async (req, res, next) => {
    const objectProduct = { ...req.body, user: req.decodeToken.id }
    const newProduct = new productModel(objectProduct)
    const savedProduct = await newProduct.save()

    const user = await userModel.findById(savedProduct.user)
    const category = await categoryModel.findById(savedProduct.category)

    user.products.push(savedProduct._id)
    category.products.push(savedProduct._id)

    await user.save()
    await category.save()

    res.status(200).json(savedProduct)
})

productRouter.put('/:id', async (req, res, next) => {
    const product = await productModel.findById(req.params.id)
    const updatedProduct = await productModel.findByIdAndUpdate(req.params.id,
        { ...req.body, user: product.user, category: product.category, updated_at: new Date() },
        { new: true })
    res.status(200).json(updatedProduct)
})

productRouter.delete('/:id', async (req, res) => {
    const deletedProduct = await productModel.findByIdAndRemove(req.params.id)
    const category = await categoryModel.findById(deletedProduct.category)
    const user = await userModel.findById(deletedProduct.user)
    const indexProduct = category.products.indexOf(deletedProduct._id)
    user.products = user.products.slice(0, indexProduct).concat(user.products.slice(indexProduct + 1))
    category.products = category.products.slice(0, indexProduct).concat(category.products.slice(indexProduct + 1))

    await category.save()
    await user.save()
    res.status(204).end()
})

module.exports = productRouter