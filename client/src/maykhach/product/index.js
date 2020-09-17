import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import Search from '../../components/search'
import Card from '../../components/card'
import { useSelector } from 'react-redux'
import { useRouteMatch } from 'react-router-dom'
import Loading from '../../components/loading'
import Alert from '../../components/alert_error'

export default function Product() {
    const [search, setSearch] = React.useState('')
    const products = useSelector(state => state.product)
    const check = useSelector(state => state.checkGetProduct)

    let productToShow = [...products]

    const match = useRouteMatch('/category/:id')
    if (match) {
        productToShow = products.filter(p => p.category === match.params.id)
    }
    if (search) {
        productToShow = productToShow.filter(p => p.name.toLowerCase().indexOf(search.toLowerCase()) > -1)
    }
    return (
        <div style={{ marginTop: "20px" }}>
            <Container>
                <Search setSearch={setSearch} />
                <div className="maykhach_danhmuc" style={{ background: "#3f51b5", padding: "10px 10px", color: "#FFFFFF", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <span>Danh mục: Tất cả</span>
                    <div>
                        <span style={{ marginRight: "10px" }}>Sắp xếp theo</span>
                        <select>
                            <option>Giá theo tăng dần</option>
                            <option>Giá theo giảm dần</option>
                            <option>Sản phẩm mới</option>
                            <option>Sản phẩm phổ biến</option>
                        </select>
                    </div>
                </div>
                <Row>
                    {productToShow.map(p => <Col key={p._id} xs='6' sm='6' md='4' lg='3' xl='3' style={{ paddingTop: "20px" }}>
                        <Card product={p} />
                    </Col>)}
                </Row>
                {check && productToShow.length === 0 && <Alert content='Không tìm thấy sản phẩm!' />}
                {!check && <div className='flex'><Loading /></div>}
            </Container>
        </div>
    )
}
