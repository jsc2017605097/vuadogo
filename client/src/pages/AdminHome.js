import React from 'react'

import { useDispatch, useSelector } from 'react-redux'
import userAction from '../actions/user'
import { useHistory } from 'react-router-dom'

import AddCategory from '../components/AddCategory'
import AddProduct from '../components/AddProduct'

export default function AdminHome() {
    const dispatch = useDispatch()
    const user = useSelector(state => state.user)
    const history = useHistory()
    const [showAddCategory, setShowAddCategory] = React.useState(false)
    const [showAddProduct,setShowProduct] = React.useState(false)

    function handleLogout() {
        console.log("logout")
        dispatch(userAction.logout)
        window.localStorage.removeItem("token")
        history.push('/login')
    }

    function handleAddCategory() {
        setShowAddCategory(true)
    }

    function handleExitAddCategory() {
        setShowAddCategory(false)
    }

    function handleAddProduct(){
        setShowProduct(true)
    }

    function exitFormAddProduct(){
        setShowProduct(false)
    }
    
    return (
        <div className='admin-home'>
            <div className='admin-home-header'>
                <div className=''><b>Harukostore.net</b></div>
                <div>
                    <input className='search' type='text' placeholder='Tìm kiếm sản phẩm' />
                </div>
                <div className='profile'>
                    <p>Username: {user.username}</p>
                    <p>Tên người dùng: {user.name}</p>
                    <button onClick={handleLogout}>Log out</button>
                </div>
            </div>
            <div className='admin-home-categories'>
                <p>Welcome {user.name}</p>
            </div>
            <div>
                <button onClick={handleAddProduct} >Thêm mới sản phẩm</button>
                <button onClick={handleAddCategory}>Thêm mới danh mục</button>
            </div>
            {showAddCategory && <AddCategory handleExitAddCategory={handleExitAddCategory} />}
            {showAddProduct && <AddProduct exitFormAddProduct={exitFormAddProduct} />}
        </div>
    )
}
