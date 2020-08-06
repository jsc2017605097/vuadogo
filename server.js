const express = require('express')
const middleware = require('./utils/middleware')
const app = express()
require('express-async-errors')
const mongoose = require('mongoose')
require('dotenv').config()
mongoose.set('useCreateIndex', true);
mongoose.set('useFindAndModify', false);
const path = require('path')

app.use(express.json())
app.use(middleware.entryPoint)
app.use(express.static('build'))

const userRouter = require('./route/user')
const loginRouter = require('./route/login')
const categoryRouter = require('./route/category')
const productRouter = require('./route/product')

const MONGO_URI = process.env.MONGO_URI
mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(result => console.log('MongoDB connected...'))
    .catch(error => console.log('MongDB connect error!'))

app.use('/api/user', middleware.checkToken, userRouter)
app.use('/api/login', loginRouter)
app.use('/api/category', categoryRouter)
app.use('/api/product', productRouter)
app.get('/api/checktoken', middleware.checkToken, (req, res, next) => {
    res.status(200).json(req.decodeToken)
})

// app.use(middleware.handleError)

app.use('/*', (req, res) => {
     res.sendFile(path.join(__dirname,'build','index.html'))
})

const PORT = process.env.PORT || 3001
app.listen(PORT, () => console.log('Server started with port = ' + PORT)) 