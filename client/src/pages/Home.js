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
            <Slide />
            <GioiThieu />
            <Category />
            <Switch>
                <Route path='/cart'>
                    <div className='container' style={{marginTop:"20px"}}>
                        <GioHang />
                    </div>
                </Route>
                <Route path='/'>
                    <Product />
                </Route>
            </Switch>
            <div className="container">
                <Feedback />
            </div>
            <AlertGiohang />
            <Footer />
            <Sidebar />
        </React.Fragment>
    )
}
