const express = require('express')
const loginRouter = express.Router()
const userModel = require('../model/user')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
require('dotenv').config()

loginRouter.post('/', async (req, res, next) => {
    const { username, password } = req.body
    const user = await userModel.findOne({ username: username })
    const check = user ? await bcrypt.compare(password, user.password) : false

    if (!check) {
        return res.status(401).send('Username or password invalid!')
    }
    const userForToken = {
        username: user.username,
        name: user.name
    }
    const token = jwt.sign(userForToken,process.env.SECRET)
    console.log(token)
    res.status(200).send(`${token}`)
})

module.exports = loginRouter