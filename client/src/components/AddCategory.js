import React from 'react'
import axios from 'axios'

export default function AddCategory({ handleExitAddCategory }) {
    const [category, setCategory] = React.useState('')
    const [error, setError] = React.useState('')
    function handleChange(event) {
        setCategory(event.target.value)
    }

    function handleAdd() {
        axios.post('/api/category', { name: category })
            .then(res => {
                setError('')
                console.log(res.data)
                handleExitAddCategory()
            })
            .catch(error => {
                setError(error.response.data)
            })
    }

    return (
        <div className='add-category'>
            <div className='exit'>
                <button onClick={handleExitAddCategory}>Thoát</button>
            </div>
            <div className='wrap-form-add-category'>
                <div className='form-add-category'>
                    <input type='text' placeholder='Tên sản phẩm' onChange={handleChange} />
                    <button onClick={handleAdd}>Thêm mới</button>
                    <p style={{color:'white'}}>{error}</p>
                </div>
            </div>
        </div>
    )
}
