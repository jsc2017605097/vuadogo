import React from 'react'
import Navbar from '../maykhach/navbar'
import Slide from '../maykhach/slide'
import GioiThieu from '../maykhach/gioithieu'
import Category from '../maykhach/category'
import Product from '../maykhach/product'

export default function Home() {
    return (
        <React.Fragment>
            <Navbar />
            <Slide />
            <GioiThieu />
            <Category />
            <Product />
        </React.Fragment>
    )
}
