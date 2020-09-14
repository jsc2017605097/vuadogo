const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    img: [{ type: String, required:true }],
    describtion: { type: String },
    detail: { type: String, required: true },
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'user' },
    category: { type: mongoose.Schema.Types.ObjectId, ref: 'category' }
})

module.exports = mongoose.model('products', productSchema)