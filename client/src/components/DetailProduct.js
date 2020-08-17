import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Loading from './Loading'
import Container from '@material-ui/core/Container'

export default function DetailProduct() {
    const params = useParams()
    const id = params.id
    const product = useSelector(state => {
        return state.product.find(p => p._id === id)
    })

    return product === undefined ? <div style={{height:'100vh',width:'100%',marginLeft:"0"}} className='flex-rows'><Loading loading={true} /></div> : <div style={{ background: "#F0F2F5" }}>
        <div className='flex-rows ' style={{ background: "#FFFFFF", margin: "0", padding: "30px" }}>
            <img src={product.img} alt={product.img} width="20%" className="border-radius" />
        </div>
        <Container maxWidth="lg" style={{ marginTop: "50px", marginBottom: "50px" }}>
            <div style={{ background: "#FFFFFF", padding: "30px", borderRadius: "10px" }}>
                <div>
                    <i><b><Link to='/' style={{ textDecoration: 'none', color: 'hsl(214deg 88% 52%)' }}>Home</Link></b></i>
                    <br />
                    <i>Date: {(new Date(product.created_at)).toString()}</i>
                    <br />
                    <i>Author: {product.user.name}</i>
                </div>
                <h1 style={{ textAlign: "center" }}>{product.name}</h1>
                <div dangerouslySetInnerHTML={{ __html: product.detail }}>
                </div>
            </div>
        </Container>
        <div style={{ textAlign: 'center', padding: '20px' }}>Copyright © JSC 2020.</div>
    </div>
}
