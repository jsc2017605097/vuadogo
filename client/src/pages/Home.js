import React from 'react'
import Navbar from '../maykhach/navbar'
import Slide from '../maykhach/slide'
import GioiThieu from '../maykhach/gioithieu'
import Category from '../maykhach/category'
import Product from '../maykhach/product'
import Feedback from '../maykhach/feedback'
import Footer from '../maykhach/footer'
import Sidebar from '../maykhach/sidebar'
import { Switch, Route, useRouteMatch } from 'react-router-dom'
import GioHang from '../maykhach/giohang'
import AlertGiohang from '../maykhach/success_giohang'
import GoogleMap from '../maykhach/google_map'
import Detail from '../maykhach/detail_product'
import { useSelector } from 'react-redux'

export default function Home() {
    let product = useSelector(state => state.product)
    const match = useRouteMatch('/product/:id')
    if (match) {
        product = product.find(p => p._id === match.params.id)
    }
    document.title="VUA ĐỒ GỖ"
    return (
        <React.Fragment>
            <Navbar />
            <div className="container" style={{ paddingTop: "76px" }}>
                <Slide />
            </div>
            <div id='vechungtoi'>
                <GioiThieu />
            </div>
            <Category />
            <Switch>
                <Route path='/cart'>
                    <div className='container' style={{ marginTop: "20px" }}>
                        <GioHang />
                    </div>
                </Route>
                <Route path='/product/:id'>
                    <Detail product={product} />
                </Route>
                <Route path='/'>
                    <Product products={product} />
                </Route>
            </Switch>
            <div id='feedback' className="container">
                <Feedback />
            </div>
            <AlertGiohang />
            <GoogleMap />
            <div id='footer'>
                <Footer />
            </div>
            <Sidebar />
        </React.Fragment>
    )
}
