const express = require('express')
const middleware = require('./utils/middleware')
const app = express()
require('express-async-errors')
const mongoose = require('mongoose')
require('dotenv').config()
mongoose.set('useCreateIndex', true);
mongoose.set('useFindAndModify', false);
const path = require('path')
const fileUpload = require('express-fileupload')
const fs = require('fs')
app.use(express.json())
app.use(fileUpload())

const userRouter = require('./route/user')
const loginRouter = require('./route/login')
const categoryRouter = require('./route/category')
const productRouter = require('./route/product')

const MONGO_URI = process.env.MONGO_URI
mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(result => console.log('MongoDB connected...'))
    .catch(error => console.log('MongDB connect error!'))
// ---------- TOI UU WEBSITE -----------
app.get('/', function (request, response) {
    const filePath = path.resolve(__dirname, './build', 'index.html');

    // read in the index.html file
    fs.readFile(filePath, 'utf8', function (err, data) {
        if (err) {
            return console.log(err);
        }

        // replace the special strings with server generated strings
        data = data.replace(/\$OG_TITLE/g, 'VUA ĐỒ GỖ');
        data = data.replace(/\$OG_DESCRIPTION/g, "VUA ĐỒ GỖ chuyên cung cấp đồ gỗ nội thất, đồ gỗ về phòng ngủ,phòng bếp,phòng thờ,phòng khách...VUA ĐỒ GỖ, GỖ THẬT GIÁ TRỊ THẬT.");
        data = data.replace(/\$OG_KEYWORD/g, "vua đồ gỗ, vua do go, đồ gỗ nội thất, đồ gỗ phòng ngủ, do go noi that, đồ gỗ phòng khách, đồ gỗ,đồ gỗ tốt")
        result = data.replace(/\$OG_IMAGE/g, './build/logo.jpg');
        response.send(result);
    });
});
//-----------------
app.use('/api/user', middleware.checkToken, userRouter)
app.use('/api/login', loginRouter)
app.use('/api/category', categoryRouter)
app.use('/api/product', productRouter)
app.get('/api/checktoken', middleware.checkToken, (req, res, next) => {
    res.status(200).json(req.decodeToken)
})
app.post('/upload', (req, res) => {
    const { upload } = req.files
    upload.mv(path.join(__dirname, 'build', 'images', upload.name))
    res.status(200).json({
        uploaded: true,
        url: '/images/' + upload.name,
        name: upload.name
    })
})
app.post('/api/uploads', middleware.checkToken, (req, res) => {
    const urlFiles = []
    for (var key in req.files) {
        req.files[key].mv(path.join(__dirname, 'build', 'images', req.files[key].name))
        urlFiles.push("/images/" + req.files[key].name)
    }
    res.status(200).json(urlFiles)
})
app.post('/api/deleteimage', middleware.checkToken, (req, res) => {
    req.body.img.forEach(img => {
        fs.unlink('./build' + img, () => {
            console.log("deleted img!")
        })
    })

    res.status(200).json({ link: req.body.link })
})
app.post('/api/info', middleware.checkToken, (req, res) => {
    var nodemailer = require('nodemailer');
    let total = 0
    req.body.cart.forEach(p => total += p.price * p.soluong)

    const html = `<div>
        <b>Tên: </b> ${req.body.name}<span></span>
        <br />
        <b>Số điện thoại: </b>${req.body.phone}
        <br />
        <b>Địa chỉ: </b>${req.body.address}
        <table>
            <tr>
                <th>Stt</th>
                <th>Tên sản phẩm</th>
                <th>Số lượng</th>
                <th>Đơn giá</th>
                <th>Thành tiền</th>
            </tr>
            ${(req.body.cart.map((p, key) => {
        return `<tr>
                        <td>${key + 1}</td>
                        <td>${p.name}</td>
                        <td>${p.soluong}</td>
                        <td style="color:red" >${new Intl.NumberFormat().format(p.price)} VNĐ</td>
                        <td style="color:red">${new Intl.NumberFormat().format(p.price * p.soluong)} VNĐ</td>
                    </tr>`
    })).join('')
        }
        </table>
        <b>Tổng tiền: </b> <span style="color:red">${new Intl.NumberFormat().format(total)} VNĐ</span>
    </div>`
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.GMAIL,
            pass: process.env.PASSWORD
        }
    });

    var mailOptions = {
        from: process.env.GMAIL,
        to: process.env.GMAIL,
        subject: 'ĐƠN HÀNG',
        html: html
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
    res.status(200).json({ status: "ok" })
})

app.use(middleware.handleError)

app.use(express.static('build'))
app.use('/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'))
})

const PORT = process.env.PORT || 3001
app.listen(PORT, () => console.log('Server started with port = ' + PORT)) 