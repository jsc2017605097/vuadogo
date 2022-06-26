const mongoose = require('mongoose')

const introSchema = new mongoose.Schema({
    content: { type: String, required: true },
})

module.exports = mongoose.model('intro', introSchema)