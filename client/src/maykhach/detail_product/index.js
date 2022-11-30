import React, { useState } from 'react'
// import { CgDetailsMore } from 'react-icons/cg'
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";
import { Row, Col } from 'reactstrap'
import Loading from '../../components/loading'
import Button from '@material-ui/core/Button';
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { useEffect } from 'react';
import axios from 'axios';
import Card from '../../components/card'

export default function Detail({ product }) {
    const dispatch = useDispatch()
    let images = []
    const cart = useSelector(state => state.cart)
    const _product = cart.find(p => p._id === product._id)
    const [_soluong, _setSoLuong] = React.useState(1);
    const [sanPhamTuongTu, setSanPhamTuongTu] = useState([]);
    useEffect(() => {
        const y = document.getElementById("banner").scrollHeight + document.getElementById("vechungtoi").scrollHeight
        window.scrollTo(0, y)
    }, [])

    if (!product) {
        return <div style={{ marginTop: "20px" }} className='flex'><Loading /></div>
    } else {
        if (!product.soluong) {
            product.soluong = 1;
            axios({
                method: 'get',
                url: '/api/product/ngaunhien/' + product.category,
                headers: {
                    "Authorization": window.localStorage.getItem("token")
                }
            })
                .then(res => setSanPhamTuongTu(res.data))
        }
        document.title = product.name
        product.img.forEach(img => {
            images.push({
                original: img,
                thumbnail: img,
            })
        })

    }

    return (
        <div className="container chitiet-sp" style={{ marginTop: "20px", display: 'flex' }}>
            <div>
                <div style={{ background: "#3f51b5", color: "#FFFFFF", padding: "10px", display: 'flex', alignItems: "center" }}>
                    <Link to='/' className="tieptucmuahang" >Trang chủ&nbsp;&gt;&nbsp; </Link>
                    <span>Chi tiết sản phẩm</span>
                </div>
                <div>
                    <Row>
                        <Col style={{ paddingTop: '10px' }} xs='12' sm='6' lg='7' xl='7'>
                            <ImageGallery items={images} />
                        </Col>
                        <Col style={{ paddingTop: '10px' }} xs='12' sm='6' lg='5' xl='5'>
                            <h3>{product.name}</h3>
                            <p>Giá gốc: <del style={{ color: "rgba(0,0,0,.5)" }}>{new Intl.NumberFormat().format(product.price + product.price * 0.1)} VNĐ</del> </p>
                            <p>Giá ưu đãi: <span style={{ color: "red", fontWeight: "bold" }}>{new Intl.NumberFormat().format(product.price)} VNĐ</span></p>
                            <p>{product.describtion}</p>
                            <Button className="pointer" onClick={() => {
                                if (_product) {
                                    dispatch({ type: "PRE", data: product })
                                } else {
                                    if (_soluong > 1) {
                                        _setSoLuong(_soluong - 1);
                                        product.soluong -= 1;
                                    }
                                }
                            }}>-</Button>
                            {_product ? _product.soluong : _soluong}
                            <Button className="pointer" onClick={() => {
                                if (_product) {
                                    dispatch({ type: "INCREASE", data: product })
                                } else {
                                    _setSoLuong(_soluong + 1);
                                    product.soluong += 1;
                                }
                            }}>+</Button>
                            <Button onClick={() => { dispatch({ type: 'ADD_TO_CART', data: product }); dispatch({ type: "ALERT_SUCCESS" }) }} variant="contained" color="secondary">Mua hàng</Button>
                        </Col>
                    </Row>
                    <div style={{ padding: "10px" }} dangerouslySetInnerHTML={{ __html: product.detail }}>
                    </div>
                </div>
            </div>
            <div className='abcxyz' style={{ marginLeft: '30px' }}>
                <div style={{ background: "#3f51b5", color: "#FFFFFF", padding: "10px", display: 'flex', alignItems: "center" }}>
                    <span>Sản phẩm tương tự</span>
                </div>
                <div style={{ marginTop: "10px" }}>
                    {
                        sanPhamTuongTu.map(p => <div><Card product={p} sanPhamTuongTu={true} /><br></br></div>)
                    }
                </div>
            </div>
        </div >
    )
}
