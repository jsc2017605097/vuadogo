import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Button from '@material-ui/core/Button'
import Exit from './Exit'
import TextField from '@material-ui/core/TextField'
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import axios from 'axios'
export default function EditProduct() {
    const dispatch = useDispatch()
    const product = useSelector(state => state.productNeedEdit)
    const [name, setName] = useState(product.name)
    const [views, setViews] = useState(product.views)
    const [price, setPrice] = useState(product.price)
    const [editor, setEditor] = useState(product.detail)
    const [img, setImg] = useState(product.img)
    const [describtion, setDescribtion] = useState(product.describtion)

    function exitFormProduct() {
        dispatch({ type: 'HIDDEN_FORM_EDIT_PRODUCT' })
    }

    function handleSubmit(event) {
        event.preventDefault()
        console.log('submit...')
        const objectProduct = {
            ...product, name, describtion, views, price, detail: editor, img, updated_at: new Date()
        }
        axios({
            method: 'put',
            url: '/api/product/' + product._id,
            data: objectProduct,
            headers: {
                "Authorization": window.localStorage.getItem('token')
            }
        }).then(res => {
            window.alert('Update product ' + res.data.name + ' success.')
            dispatch({ type: "UPDATE_PRODUCT", data: res.data })
        }).catch(error => {
            window.alert(error.response.data)
        })
    }

    function saveFile(event) {
        const formData = new FormData()
        formData.append('upload', event.target.files[0])
        axios({
            method: 'post',
            url: '/upload',
            data: formData,
            headers: {
                "Authorization": window.localStorage.getItem('token'),
                "Content-Type": "multipart/form-data"
            }
        }).then(res => {
            setImg(res.data.url)
        })
            .catch(err => console.log(err.response.data))
    }


    return (
        <div className='form-create flex-rows'>
            <div className='form-product '>
                <div className='flex-rows border-bottom margin-bottom-20'>
                    <h2>Edit product</h2>
                    <Exit handleClick={exitFormProduct} />
                </div>
                <div>
                    <form onSubmit={handleSubmit} noValidate autoComplete="off">
                        <TextField id="filled-basic" label="Name" variant="filled"
                            value={name} onChange={(event) => setName(event.target.value)}
                        />
                        <TextField id="filled-basic" label="Price $" variant="filled"
                            style={{ marginLeft: '20px' }}
                            value={price} onChange={(event) => setPrice(event.target.value)}
                        />
                        <TextField id="filled-basic" label="Views" variant="filled"
                            style={{ marginLeft: '20px' }}
                            value={views} onChange={(event) => setViews(event.target.value)}
                        />
                        <TextField id="filled-basic" label="Describtion" variant="filled"
                            style={{ marginLeft: '20px' }}
                            value={describtion} onChange={(event) => setDescribtion(event.target.value)}
                        />
                        <div style={{ marginTop: "20px", marginBottom: "20px", display: "flex", alignItems: 'center' }} >
                            <input
                                accept="image/*"
                                type="file"
                                onChange={saveFile}
                            />
                            <img src={img} alt={img} width="100px" />
                        </div>

                        <div className='ckeditorss'>
                            <CKEditor
                                editor={ClassicEditor}
                                data={editor}
                                config={{
                                    ckfinder: {
                                        uploadUrl: '/upload'
                                    }
                                }}
                                onChange={(event, editor) => {
                                    const data = editor.getData();
                                    setEditor(data)
                                }}

                            />
                        </div>
                        <Button type='submit' variant="contained" color="primary" style={{ marginTop: "20px" }}>
                            Upadte product
                        </Button>
                        {/* <Error error={error} />
                        <Success alert={success} /> */}
                    </form>
                </div>

            </div>
        </div>
    )
}
