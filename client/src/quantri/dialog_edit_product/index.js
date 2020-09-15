import React from 'react';
import { Form, FormGroup, Label, Input } from 'reactstrap';
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux'
import ButtonDelete from '../../components/button_delete'
import './index.css'
import { useParams } from 'react-router-dom'
import Button from '@material-ui/core/Button';

export default function FullScreenDialog() {
    const id = useParams().id
    let product = useSelector(state => state.product.find(p => p._id === id))
    
    const categorys = useSelector(state => state.category)
    const dispatch = useDispatch()
    const [images, setImages] = React.useState([])
    const [name, setName] = React.useState('Đang tải...')
    const [describtion, setDescribtion] = React.useState('Đang tải...')
    const [price, setPrice] = React.useState('Đang tải...')
    const [category, setCategory] = React.useState('')
    const [content, setContent] = React.useState('Đang tải...')
    const [removedImg, setRemoveImg] = React.useState([])

    React.useEffect(()=>{
        if(product){
            setImages(product.img)
            setName(product.name)
            setDescribtion(product.describtion)
            setPrice(product.price)
            setCategory(product.category)
            setContent(product.detail)
        }
    },[product])
    
    function handleSubmit(event) {
        event.preventDefault()
        const data = {
            name, img: images, describtion, price, category, detail: content
        }

        axios({
            method: "POST",
            url: "/api/deleteimage",
            data: { img: removedImg },
            headers: {
                "Authorization": window.localStorage.getItem("token")
            }
        })

        axios({
            method: "put",
            url: '/api/product/' + product._id,
            data: data,
            headers: {
                "Authorization": window.localStorage.getItem("token")
            }
        }).then(res => {
            dispatch({ type: "UPDATE_PRODUCT_AT_PRODUCT", data: res.data })
            window.alert("Cập nhật thành công!")
        }).catch(error => window.alert(error.response.data))
    }

    function handleImage(event) {
        const formData = new FormData()
        for (var key in event.target.files) {
            formData.append("file" + key, event.target.files[key])
        }
        axios({
            method: "post",
            url: "/api/uploads",
            data: formData,
            headers: {
                "Authorization": window.localStorage.getItem("token")
            }
        }).then(res => setImages([...images, ...res.data]))
    }

    function handleDeleteImg(link) {
        setRemoveImg([...removedImg, link])
        const newImages = images.filter(img => img !== link)
        setImages(newImages)
    }

    return (
        <div style={{ background: "#FFFFFF" }}>
            <div style={{ padding: '10px', background: "#3f51b5", color: "#FFFFFF" }}>Cập nhật sản phẩm</div>
            <Form onSubmit={handleSubmit} style={{ padding: "20px" }}>
                <FormGroup>
                    <Label for="examplePassword">Tên sản phẩm</Label>
                    <Input value={name} required onChange={(event) => setName(event.target.value)} type="text" id="examplePassword" placeholder="Tên sản phẩm" />
                </FormGroup>
                <FormGroup>
                    <Label for="file">Ảnh sản phẩm</Label>
                    <Input id='file' onChange={handleImage} accept="image/*" multiple type="file" name="file" />
                </FormGroup>
                <FormGroup>
                    {
                        images.map((img, key) => <div key={key} style={{ margin: "10px 10px 0 0", boxShadow: "0.2px 0.2px 5px", display: "inline-block" }}>
                            <img alt="img" src={img} height="100px" />
                            <div className="icon_delete_img">
                                <ButtonDelete onClick={() => handleDeleteImg(img)} />
                            </div>
                        </div>)
                    }
                </FormGroup>
                <FormGroup>
                    <Label for="mota">Mô tả ngắn</Label>
                    <Input value={describtion} onChange={event => setDescribtion(event.target.value)} type="text" id="mota" placeholder="Mô tả ngắn sản phẩm" />
                </FormGroup>
                <FormGroup>
                    <Label for="gia">Giá</Label>
                    <Input value={price} onChange={event => setPrice(event.target.value)} type="number" id="gia" placeholder="VNĐ" />
                </FormGroup>
                <FormGroup>
                    <Label for="exampleSelect">Danh mục</Label>
                    <Input value={category} onChange={event => setCategory(event.target.value)} type="select" name="select" id="exampleSelect">
                        <option value={''}>Danh mục</option>
                        {
                            categorys.map(ca => <option key={ca._id} value={ca._id}>{ca.name}</option>)
                        }
                    </Input>
                </FormGroup>
                <FormGroup>
                    <Label for="exampleText">Nội dung chi tiết</Label>
                    <CKEditor
                        editor={ClassicEditor}
                        data={content}
                        config={{
                            ckfinder: {
                                uploadUrl: '/upload'
                            }
                        }}
                        onChange={(event, editor) => {
                            const data = editor.getData();
                            setContent(data)
                        }}
                    />
                </FormGroup>
                <Button type='submit' variant="contained" color="primary" >Lưu</Button>
            </Form>
        </div>
    );
}