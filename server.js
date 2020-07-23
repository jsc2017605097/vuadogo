require('colors')
const cors = require('cors')
const express = require('express')

const app = express()
app.use(cors())

app.get('/api/checkToken',(req,res)=>{
    console.log(`Access server`.yellow)
    res.status(400).send('not ok')
})
const PORT = 3001 || process.env.PORT
app.listen(PORT,()=> console.log(`Server started with port = ${PORT}`.green))