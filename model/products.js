const mongoose = require('mongoose')
const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    priceOld: Number,
    img: { type: String, required: true },
    detail: { type: String, required: true },
    created_at: { type: Date, default: Date.now() },
    updated_at: { type: Date }
})
module.exports = mongoose.model('products', productSchema)