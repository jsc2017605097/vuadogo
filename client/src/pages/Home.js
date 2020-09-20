import React from 'react'
import Navbar from '../maykhach/navbar'
import Slide from '../maykhach/slide'
import GioiThieu from '../maykhach/gioithieu'
import Category from '../maykhach/category'
import Product from '../maykhach/product'
import Feedback from '../maykhach/feedback'
import Footer from '../maykhach/footer'
import Sidebar from '../maykhach/sidebar'
import { Switch, Route } from 'react-router-dom'
import GioHang from '../maykhach/giohang'
import AlertGiohang from '../maykhach/success_giohang'

export default function Home() {
    return (
        <React.Fragment>
            <Navbar />
            <div style={{paddingTop:"76px"}}>
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
                <Route path='/'>
                    <Product />
                </Route>
            </Switch>
            <div id='feedback' className="container">
                <Feedback />
            </div>
            <AlertGiohang />
            <div id='footer'>
                <Footer />
            </div>
            <Sidebar />
        </React.Fragment>
    )
}
