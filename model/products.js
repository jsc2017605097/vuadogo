const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    priceOld: Number,
    img: { type: String, required: true },
    detail: { type: String, required: true },
    views: { type: Number, default: 0 },
    created_at: { type: Date, default: Date.now() },
    updated_at: { type: Date },
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'user' },
    category: { type: mongoose.Schema.Types.ObjectId, ref: 'category' }
})

module.exports = mongoose.model('products', productSchema)