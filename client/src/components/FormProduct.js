import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import Exit from './Exit'
import { useDispatch, useSelector } from 'react-redux'
import showForm from '../actions/showForm'
import Button from '@material-ui/core/Button'
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import Select from './Select'
import axios from 'axios'
import Error from './Error'
import Success from './Sucess'

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
    input: {
        display: 'none',
    },
    margin: {
        margin: theme.spacing(1),
    }, withoutLabel: {
        marginTop: theme.spacing(3),
    },
    textField: {
        width: '25ch',
    },
}))

export default function FormProduct() {
    const classes = useStyles()
    const dispatch = useDispatch()
    const categorys = useSelector(state => state.category)
    const [img, setImage] = React.useState('')
    const [name, setName] = useState('')
    const [price, setPrice] = useState(0)
    const [views, setViews] = useState(0)
    const [category, setCategory] = useState('')
    const [editor, setEditor] = useState('Description detail new product...')
    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')

    function handleSubmit(event) {
        event.preventDefault()
        const product = { name, img:img.url, price: Number(price), views: Number(views), category, detail: editor }
        console.log('new product: ', product)

        axios({
            method: 'post',
            url: '/api/product',
            data: product,
            headers: {
                "Authorization": window.localStorage.getItem("token")
            }
        })
            .then(res => {
                dispatch({ type: 'ADD_PRODUCT', data: res.data })
                setError('')
                setSuccess(`Create new product success: ${name}`)
            })
            .catch(error => {
                setSuccess('')
                setError(error.response.data)
            })

    }

    function exitFormProduct() {
        dispatch(showForm.hiddenFormProduct)
    }

    function saveFile(event) {
        const formData = new FormData()
        formData.append("upload", event.target.files[0])

        axios({
            method: "post",
            url: '/upload',
            data: formData,
            headers: {
                "Content-Type": "multipart/form-data",
                "Authorization": window.localStorage.getItem("token")
            }
        }).then(res => {
            setImage(res.data)
        })
    }

    function ShowImage() {
        if (!img) {
            return null
        }
        return <div className='margin-bottom-20 margin-top-20'>
            <img src={img.url} alt={img.url} width="100px" />
            <div>{img.name}</div>
        </div>
    }
    return (
        <div className='form-create flex-rows'>
            <div className='form-product '>
                <div className='flex-rows border-bottom margin-bottom-20'>
                    <h2>Create new product</h2>
                    <Exit handleClick={exitFormProduct} />
                </div>
                <div>
                    <form onSubmit={handleSubmit} className={classes.root} noValidate autoComplete="off">
                        <TextField id="filled-basic" label="Name" variant="filled"
                            value={name} onChange={(event) => setName(event.target.value)}
                        />
                        <TextField id="filled-basic" label="Price $" variant="filled"
                            value={price} onChange={(event) => setPrice(event.target.value)}
                        />
                        <TextField id="filled-basic" label="Views" variant="filled"
                            value={views} onChange={(event) => setViews(event.target.value)}
                        />
                        <div>
                            <input
                                accept="image/*"
                                className={classes.input}
                                id="contained-button-file"
                                type="file"
                                onChange={saveFile}
                            />
                            <label htmlFor="contained-button-file">
                                <Button variant="contained" color="primary" component="span">
                                    Image
                                </Button>
                            </label>
                            <ShowImage />
                        </div>
                        <Select categorys={categorys} category={category} setCategory={setCategory} />
                        <div className='ckeditorss'>
                            <CKEditor
                                editor={ClassicEditor}
                                data={editor}
                                config={{
                                    ckfinder: {
                                        uploadUrl: '/ckeditor/upload'
                                    }
                                }}
                                onChange={(event, editor) => {
                                    const data = editor.getData();
                                    setEditor(data)
                                }}

                            />
                        </div>
                        <Button type='submit' variant="contained" color="primary">
                            Create new product
                        </Button>
                        <Error error={error} />
                        <Success alert={success} />
                    </form>
                </div>

            </div>
        </div>
    )
}
