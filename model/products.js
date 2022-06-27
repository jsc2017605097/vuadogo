const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    img: [{ type: String, required: true }],
    describtion: { type: String },
    detail: { type: String, required: true },
    category: { type: mongoose.Schema.Types.ObjectId, ref: 'category' },
}, { timestamps: true })

module.exports = mongoose.model('products', productSchema)