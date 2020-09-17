import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import Search from '../../components/search'
import Card from '../../components/card'
import { useSelector } from 'react-redux'

export default function Product() {
    const [search, setSearch] = React.useState('')
    const products = useSelector(state => state.product)

    return (
        <div style={{ marginTop: "20px" }}>
            <Container>
                <Search setSearch={setSearch} />
                <div style={{ background: "#3f51b5", padding: "10px 10px", color: "#FFFFFF" }}>
                    <span>Danh mục: Tất cả</span>
                </div>
                <br />
                <Row>
                    {products.map(p => <Col key={p._id} xs='6' sm='6' md='4' lg='3' xl='3' style={{ paddingTop: "20px" }}>
                        <Card product={p} />
                    </Col>)}
                </Row>
            </Container>
        </div>
    )
}
