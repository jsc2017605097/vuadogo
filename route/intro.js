const introRouter = require('express').Router()
const introModel = require('../model/intro')
const middleware = require('../utils/middleware')

introRouter.put('/62b80ab49c6d0e3e7ca135b8', async (req, res) => {
    const category = await introModel.findById("62b80ab49c6d0e3e7ca135b8")
    category.content = req.body.content
    const updatedCategory = await category.save()
    res.status(200).json(updatedCategory)
})
introRouter.get('/62b80ab49c6d0e3e7ca135b8', async (req, res) => {
    const category = await introModel.findById("62b80ab49c6d0e3e7ca135b8")
    res.status(200).json(category)
})
introRouter.post('/', async (req, res, next) => {
    const category = new introModel(req.body)
    const savedCategory = await category.save()
    res.status(200).json(savedCategory)
})
module.exports = introRouter