const mongoose = require('mongoose')
const userSchema = new mongoose.Schema({
    username: { type: String, minlength: 6, unique: true },
    password: String,
    name: { type: String, minlength: 6 }
})

module.exports = mongoose.model('user', userSchema)