import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import ButtonFloatingAdd from '../../components/button_floating_add'
import './index.css'
import { Form, FormGroup, Label, Input } from 'reactstrap';
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux'

const useStyles = makeStyles((theme) => ({
    appBar: {
        position: 'relative',
    },
    title: {
        marginLeft: theme.spacing(2),
        flex: 1,
    },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function FullScreenDialog() {
    const categorys = useSelector(state => state.category)
    const dispatch = useDispatch()

    const [images, setImages] = React.useState([])
    const [name, setName] = React.useState('')
    const [describtion, setDescribtion] = React.useState('')
    const [price, setPrice] = React.useState(0)
    const [category, setCategory] = React.useState('')
    const [content, setContent] = React.useState('')

    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    function handleSubmit(event) {
        event.preventDefault()
        const data = {
            name, img: images, describtion, price, category, detail: content
        }
        axios({
            method: "post",
            url: '/api/product',
            data: data,
            headers: {
                "Authorization": window.localStorage.getItem("token")
            }
        }).then(res => {
            setImages([])
            setName('')
            setDescribtion('')
            setPrice('')
            setCategory('')
            setContent('')
            dispatch({ type: "ADD_PRODUCT_TO_PRODUCT", data: res.data })
            handleClose()
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

    return (
        <div>
            <div onClick={handleClickOpen} className="flex margin-right-20">
                <ButtonFloatingAdd color='secondary' /> SẢN PHẨM
            </div>

            <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
                <AppBar className={classes.appBar}>
                    <Toolbar>
                        <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
                            <CloseIcon />
                        </IconButton>
                        <Typography variant="h6" className={classes.title}>
                            Thêm mới sản phẩm
                        </Typography>
                        <Button autoFocus color="inherit" onClick={handleSubmit}>
                            Tạo
                        </Button>
                    </Toolbar>
                </AppBar>
                <Form className="padding-20">
                    <FormGroup>
                        <Label for="examplePassword">Tên sản phẩm</Label>
                        <Input value={name} required onChange={(event) => setName(event.target.value)} type="text" id="examplePassword" placeholder="Tên sản phẩm" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="file">Ảnh sản phẩm</Label>
                        <Input id='file' onChange={handleImage} accept="image/*" multiple type="file" name="file"/>
                    </FormGroup>
                    <FormGroup>
                        {
                            images.map((img, key) => <img key={key} alt="img" src={img} height="100px" style={{ margin: "10px 10px 0 0", boxShadow: "0.2px 0.2px 5px" }} />)
                        }
                    </FormGroup>
                    <FormGroup>
                        <Label for="mota">Mô tả ngắn</Label>
                        <Input value={describtion} onChange={event => setDescribtion(event.target.value)} type="text" id="mota" placeholder="Mô tả ngắn sản phẩm" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="gia">Giá</Label>
                        <Input value={price} onChange={event => setPrice(event.target.value)} type="text" id="gia" placeholder="VNĐ" />
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
                </Form>
            </Dialog>
        </div>
    );
}