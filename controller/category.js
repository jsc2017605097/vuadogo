const categoryRouter = require('express').Router()
const categoryModel = require('../model/category')

categoryRouter.post('/', async (req, res, next) => {
    const category = new categoryModel(req.body)
    const savedCategory = await category.save()
    res.status(200).json(savedCategory)
})

categoryRouter.get('/',async(req,res,next)=>{
    const categories = await categoryModel.find({})
    res.status(200).json(categories)
})

module.exports = categoryRouter