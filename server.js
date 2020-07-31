require('colors')
const cors = require('cors')
const express = require('express')
const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
mongoose.set('useCreateIndex', true)
require('express-async-errors')
const multiparty = require('connect-multiparty')

const config = require('./config')
const userModel = require('./model/user')
const loginController = require('./controller/login')
const middleware = require('./utils/middleware')

const categoryRouter = require('./controller/category')

mongoose.connect(config.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(result => console.log(`Connect MongDB successly!`.green))
    .catch(error => console.log(`Connect MongoDB error!`.red))
const path=require('path')
const app = express()
app.use(cors())
app.use(express.static('build'))
app.use(express.json())
app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname, 'build/index.html'), function(err) {
      if (err) {
        res.status(500).send(err)
      }
    })
  })
app.use(middleware.entryPoint)

app.use('/api/category',categoryRouter)
app.post('/api/user', async (req, res) => {
    const passwordHash = await bcrypt.hash(req.body.password, 10)
    const user = await new userModel({ ...req.body, password: passwordHash })
    const userSaved = await user.save()
    res.status(200).json(userSaved)
})

app.post('/api/login', loginController)

app.get('/api/checkToken', middleware.checkToken)

const multipartyMiddleware = multiparty({uploadDir:'./images'})
app.post('/api/uploads',multipartyMiddleware,(req,res)=>{
    console.log(req.files.upload)
})
app.use(middleware.unknowEndpoint)
app.use(middleware.handleError)

const PORT = 3001 || process.env.PORT
app.listen(PORT, () => console.log(`Server started with port = ${PORT}`.green))