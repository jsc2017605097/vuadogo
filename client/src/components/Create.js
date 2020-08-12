import React from 'react'
import CategoryImage from '../images/danhmuc2.png'
import { useDispatch } from 'react-redux'
import AddCircleIcon from '@material-ui/icons/AddCircle';

export default function Create() {
    const dispatch = useDispatch()

    function AddCategory() {
        dispatch({ type: 'SHOW_FORM_CATEGORY' })
    }

    function AddProduct() {
        dispatch({ type: 'SHOW_FORM_PRODUCT' })
    }

    return (
        <div className='flex-rows'>
            <div style={{ display: 'inline-block' }}>
                <div className='flex-rows margin-bottom-20 padding-10 border-radius' style={{ background: "#F0F2F5" }}>
                    <div className='flex-rows cursor background-fff padding-10 border-radius' style={{margin:"0"}} onClick={AddCategory} >
                        <img src={CategoryImage} alt='category' />
                        <span>Add new category</span>
                    </div>
                    <div className='flex-rows cursor  background-fff padding-10 border-radius' onClick={AddProduct}>
                        < AddCircleIcon className='font-size-40' />
                        <span> Create new Product</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
