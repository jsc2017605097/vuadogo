import React from 'react'
import DialogAddProduct from '../quantri/dialog_add_product'
import DialogAddCategory from '../quantri/dialog_add_category'
import Category from '../quantri/category'
import Product from '../quantri/product'
import Logout from '../quantri/logout'
import Avatar from '../quantri/avatar'
import Footer from '../quantri/footer'
import Search from '../components/search'

export default function Dashboard() {
    const [selectedCategory, setSelectedCategory] = React.useState('')
    const [search, setSearch] = React.useState('')

    return (
        <div>
            <div className='container'>
                <Avatar />
            </div>
            <div className='flex padding-20 margin-bottom-30'>
                <DialogAddProduct />
                <DialogAddCategory />
            </div>
            <div>
                <Category setSelectedCategory={setSelectedCategory} />
            </div>
            <div className='container padding-20'>
                <Search setSearch={setSearch} />
                <Product search={search} selectedCategory={selectedCategory} />
            </div>
            <div className='flex container' style={{ justifyContent: "flex-start" }}>
                <div><Logout /></div>
                &nbsp; ĐĂNG XUẤT
            </div>
            <Footer />
        </div>
    )
}
