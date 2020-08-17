import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import TableProduct from './TableProduct'
import Loading from './Loading'
import EditIcon from '@material-ui/icons/Edit';
import TextField from '@material-ui/core/TextField'
import Exit from './Exit'
import SaveIcon from '@material-ui/icons/Save'
import Button from '@material-ui/core/Button'
import axios from 'axios'
import Error from './Error'
import DeleteIcon from '@material-ui/icons/Delete'

export default function TableCategory() {
    const categorys = useSelector(state => state.category)
    const [selectedCategory, setSelectCategory] = useState('')
    const [showFormEditCategory, setShowFormEditCategory] = useState(false)
    const [category, setCategory] = useState({})
    const dispatch = useDispatch()
    const [error, setError] = useState('')

    function showProduct(category) {
        return () => {
            setSelectCategory(category)
        }
    }

    function showEditCategory(category) {
        return () => {
            setShowFormEditCategory(true)
            setCategory(category)
        }
    }

    function changeCategory(event) {
        setCategory({ ...category, name: event.target.value })
    }

    function handleSaveCategory() {
        axios({
            method: 'put',
            url: '/api/category/' + category._id,
            data: { name: category.name },
            headers: {
                "Authorization": window.localStorage.getItem("token"),
                "Content-Type": "application/json"
            }
        }).then(res => {
            setError('')

            dispatch({ type: 'UPDATE_CATEGORY', data: res.data })
            console.log(res.data)
            setShowFormEditCategory(false)
        }).catch(error => {
            setError(error.response.data)
        })
    }

    function deleteCategory(category) {
        const authentication = window.confirm(`Do you want to remove category: ${category.name}`)
        if (authentication) {
            axios({
                method: 'delete',
                url: '/api/category/' + category._id,
                data: category.products,
                headers: {
                    "Authorization": window.localStorage.getItem("token")
                }
            }).then(res => {
                console.log(res.data)
                setSelectCategory('')
                dispatch({ type: "DELETE_CATEGORY", data: res.data })
            }).catch(error => console.log(error))
        }

    }

    return categorys.length === 0 ? <Loading loading={true} /> : <div className=''>
        <div className="">
            <div className='flex-rows background-fff' style={{fontSize:'14px'}}>
                {categorys.map(item =>
                    <div key={item._id} onClick={showProduct(item)}
                        className={selectedCategory._id === item._id ? 'flex-rows cursor padding-20 item-select' : 'flex-rows cursor padding-20'}>
                        <span>{item.name}</span>
                        <div className="margin-left-10">
                            <EditIcon onClick={showEditCategory(item)} />
                            <DeleteIcon onClick={() => deleteCategory(item)} />
                        </div>
                    </div>
                )}
            </div>
            {selectedCategory &&
                <div className='margin-left-10 grow-1'>
                    <TableProduct products={categorys.find(item => item._id === selectedCategory._id).products} />
                </div>
            }
            {!selectedCategory && categorys.length > 0 && <h2 style={{ textAlign: "center", flexGrow: '1' }}>Please choose a category to show data!</h2>}
        </div>
        {showFormEditCategory && <div className='edit-category '>
            <div className='padding-20 background-fff border-radius' style={{ position: "relative" }}>
                <div className='flex-rows border-bottom margin-bottom-20'>
                    <h2>Edit category</h2>
                    <Exit handleClick={() => setShowFormEditCategory(false)} />
                </div>
                <div className="flex-rows " style={{ margin: "20px 0 10px 0" }}>
                    <TextField id="outlined-basic"
                        label="Name of category" variant="outlined"
                        className='margin-right-20'
                        value={category.name}
                        onChange={changeCategory}
                    />
                    <Button
                        variant="contained"
                        color="primary"
                        size="large"
                        startIcon={<SaveIcon />}
                        onClick={handleSaveCategory}
                    >
                        Save
                        </Button>
                </div>
                <div>
                    <Error error={error} />
                </div>
            </div>
        </div>
        }
    </div>
}
