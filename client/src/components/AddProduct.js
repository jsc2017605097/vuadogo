import React, { useState } from 'react'
import { useSelector } from 'react-redux'

import TextField from '@material-ui/core/TextField';
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

const useStyles = makeStyles((theme) => ({
    input: {
        display: 'none',
    },
}));



export default function AddProduct({ exitFormAddProduct }) {
    const [content, setContent] = useState('')
    const [category, setCategory] = useState('')
    const [zoom, setZoom] = useState(false)
    console.log(content)
    const categories = useSelector(state => state.categories)
    const classes = useStyles();

    function onChangeCKEditor(evt, editor) {
        var newContent = editor.getData();
        setContent(newContent)
    }

    function onChangeInput(event) {
        const { name, value } = event.target
        console.log("name of input: ", name)
        console.log("value of input:", value)
        if ("category") {
            setCategory(value)
            console.log('setstated')
        }
    }
    function handleZoom() {
        setZoom(!zoom)
    }

    return (
        <div className='add-product'>
            <div className='exit'>
                <button onClick={exitFormAddProduct}>Thoát</button>
                <button onClick={handleZoom}>Zoom</button>
            </div>
            <div className={!zoom ? 'form-add-product ' : 'form-add-product zoom'}>
                <form>
                    <TextField id="standard-basic" label="Tên sản phẩm" />
                    <div style={{ margin: "10px 0px 0px 0px" }}>
                        <input
                            accept="image/*"
                            className={classes.input}
                            id="contained-button-file"
                            multiple
                            type="file"
                        />
                        <label htmlFor="contained-button-file">
                            <Button variant="contained" color="primary" component="span">
                                Upload
                            </Button>
                        </label>
                    </div>
                    <Input
                        startAdornment={<InputAdornment position="start">$</InputAdornment>}
                    />
                    <Input
                        startAdornment={<InputAdornment position="start">$ Old</InputAdornment>}
                    />
                    <div className="ckeditor">
                        <CKEditor
                            editor={ClassicEditor}
                            data={content}
                            config={{
                                ckfinder: {
                                    uploadUrl: '/api/uploads'
                                }
                            }}
                            onChange={onChangeCKEditor}
                        />
                    </div>
                    {categories.length > 0 ? <TextField
                        id="standard-select-currency"
                        select
                        label="Category"
                        helperText="Please select a category"
                        value={category}
                        name="category"
                        onChange={onChangeInput}
                    >
                        {categories.map((option) => (
                            <MenuItem key={option._id} value={option._id}>
                                {option.name}
                            </MenuItem>
                        ))}
                    </TextField> : 'Loading....'}
                    <br />
                    <br />
                    <Button type="submit" variant="contained" color="primary">
                        Thêm mới
                    </Button>
                </form>
            </div>
        </div>
    )
}
