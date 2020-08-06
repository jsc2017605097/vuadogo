const mongoose = require('mongoose')

const categorySchema = new mongoose.Schema({
    name: { type: String, required: true },
    products: [{ type: mongoose.Schema.Types.ObjectId, ref:'products' }]
})

module.exports = mongoose.model('category', categorySchema)