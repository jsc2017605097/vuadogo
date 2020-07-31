const userModel = require('../model/user')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const login = async (req, res) => {
    const user = await userModel.findOne({ username: req.body.username })
    const check = !user ? false : await bcrypt.compare(req.body.password,user.password)
    if (check) {
        const u = { username: user.username, name: user.name }
        const token = jwt.sign(u, 'secret') 

        return res.status(200).send(token)
    }
    return res.status(401).send('Tên người dùng hoặc mật khẩu không chính xác!')
}

module.exports = login