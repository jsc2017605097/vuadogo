import React from 'react'
import { CgDetailsMore } from 'react-icons/cg'
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";
import { Row, Col } from 'reactstrap'
import Loading from '../../components/loading'
import Button from '@material-ui/core/Button';
import { useDispatch } from 'react-redux'

export default function Detail({ product }) {
    const dispatch = useDispatch()
    let images = []
    if (!product) {
        return <div style={{ marginTop: "20px" }} className='flex'><Loading /></div>
    }
    if (product) {
        product.img.forEach(img => {
            images.push({
                original: img,
                thumbnail: img,
            })
        })
    }
    return (
        <div className="container" style={{ marginTop: "20px" }}>
            <div style={{ padding: "10px", background: "#3f51b5", color: "#FFFFFF", display: "flex", alignItems: "center", justifyContent: "flex-start" }}>
                <CgDetailsMore /> &nbsp; Chi tiết sản phẩm
            </div>
            <div>
                <Row>
                    <Col style={{ paddingTop: '10px' }} xs='12' sm='6' lg='7' xl='7'>
                        <ImageGallery items={images} />
                    </Col>
                    <Col style={{ paddingTop: '10px' }} xs='12' sm='6' lg='5' xl='5'>
                        <h3>Tên sản phẩm: {product.name}</h3>
                        <p>Mô tả ngắn: {product.describtion}</p>
                        <p>Giá: <span style={{ color: "red" }}>{new Intl.NumberFormat().format(product.price)} VNĐ</span></p>
                        <Button onClick={() => { dispatch({ type: 'ADD_TO_CART', data: product }); dispatch({ type: "ALERT_SUCCESS" }) }} variant="contained" color="secondary">Thêm vào giỏ hàng</Button>
                    </Col>
                </Row>
                <div style={{padding:"10px"}} dangerouslySetInnerHTML={{ __html: product.detail }}>
                </div>
            </div>

        </div>
    )
}
