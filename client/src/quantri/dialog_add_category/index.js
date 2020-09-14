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
import { Form, FormGroup, Label, Input } from 'reactstrap'
import axios from 'axios'
import { useDispatch } from 'react-redux'

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
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const [danhmuc, setDanhmuc] = React.useState('')
    const dispatch = useDispatch()

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    function createDanhmuc(event) {
        event.preventDefault()
        axios({
            method: "POST",
            url: "/api/category",
            data: { name: danhmuc },
            headers: {
                "Authorization": window.localStorage.getItem("token")
            }
        }).then(res => {
            dispatch({
                type: 'ADD_CATEGORY',
                data: res.data
            })
            handleClose()
        }).catch(error => window.alert(error.response.data))

    }

    return (
        <div>
            <div onClick={handleClickOpen} className="flex ">
                <ButtonFloatingAdd color='primary' /> DANH MỤC
            </div>

            <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
                <AppBar className={classes.appBar}>
                    <Toolbar>
                        <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
                            <CloseIcon />
                        </IconButton>
                        <Typography variant="h6" className={classes.title}>
                            Thêm mới danh mục
                        </Typography>
                        <Button autoFocus color="inherit" onClick={createDanhmuc}>
                            Tạo
                        </Button>
                    </Toolbar>
                </AppBar>
                <Form className='padding-20' onSubmit={createDanhmuc}>
                    <FormGroup >
                        <Label for="exampleEmail">Danh mục</Label>
                        <Input onChange={(event) => setDanhmuc(event.target.value)} type="text" id="exampleEmail" placeholder="Tên danh mục" />
                    </FormGroup>
                </Form>
            </Dialog>
        </div>
    );
}