const jwt = require('jsonwebtoken')
require('dotenv').config()

const handleError = (error, req, res, next) => {
    if (error.name === 'ValidationError') {
        return res.status(400).send("Các trường không được để trống!")
    }
    if (error.name === 'JsonWebTokenError') {
        return res.status(400).send(error.message)
    }
    if (error.name === 'CastError') {
        return res.status(400).send(error.message)
    }
    next(error)
}

const unknowEndpoint = (req, res) => {
    res.status(404).end()
}

const entryPoint = (req, res, next) => {
    console.log('Method: ', req.method)
    console.log('Body', req.body)
    console.log('Path', req.path)
    next()
}

const checkToken = (req, res, next) => {
    const browserToken = req.get('authorization')
    if (!browserToken || !browserToken.startsWith('bearer ')) {
        return res.status(400).send('Please login again!')
    }

    const token = browserToken.substring(7)
    const decodeToken = jwt.verify(token, process.env.SECRET)

    if (!decodeToken) {
        return res.status(401).end()
    }
    req.decodeToken = decodeToken
    next()
}
module.exports = {
    handleError,
    unknowEndpoint,
    entryPoint,
    checkToken
}