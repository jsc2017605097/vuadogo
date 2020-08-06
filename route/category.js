const categoryRouter = require('express').Router()
const categoryModel = require('../model/category')
const middleware = require('../utils/middleware')

categoryRouter.post('/', middleware.checkToken, async (req, res, next) => {
    const category = new categoryModel(req.body)
    const savedCategory = await category.save()
    res.status(200).json(savedCategory)
})

categoryRouter.get('/', async (req, res, next) => {
    const categories = await categoryModel.find({})
    res.status(200).json(categories)
    console.log(categories)
})

categoryRouter.delete('/:id', middleware.checkToken, async (req, res, next) => {
    const deletedCategory = await categoryModel.findByIdAndRemove(req.params.id)
    res.status(204).json(deletedCategory)
})

categoryRouter.put('/:id', middleware.checkToken, async (req, res) => {
    const category = await categoryModel.findById(req.params.id)
    category.name = req.body.name
    const updatedCategory = await category.save()
    res.status(200).json(updatedCategory)
})

module.exports = categoryRouter