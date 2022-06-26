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
import '../App.css'
import { Form, FormGroup, Label } from 'reactstrap';
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import axios from 'axios';
import Fab from '@material-ui/core/Fab';
import EditIcon from '@material-ui/icons/Edit';
import { useEffect } from 'react';
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
            content: content
        }
        axios({
            method: "put",
            url: '/api/intro/62b80ab49c6d0e3e7ca135b8',
            data: data,
            headers: {
                "Authorization": window.localStorage.getItem("token")
            }
        }).then(res => {
            handleClose()
        }).catch(error => window.alert(error.response.data))
    }

    useEffect(() => {
        axios({
            method: 'get',
            url: '/api/intro/62b80ab49c6d0e3e7ca135b8',
            headers: {
                "Authorization": window.localStorage.getItem("token")
            }
        })
            .then(res => setContent(res.data.content))
    }, [])

    return (
        <div>
            <div onClick={handleClickOpen} className="flex margin-right-20">
                <div>
                    <Fab style={{ width: "56px", height: "56px", marginLeft: "20px", marginRight: "5px" }} size='small' color="secondary" aria-label="edit">
                        <EditIcon />
                    </Fab>
                </div> INTRO
            </div>

            <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
                <AppBar className={classes.appBar}>
                    <Toolbar>
                        <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
                            <CloseIcon />
                        </IconButton>
                        <Typography variant="h6" className={classes.title}>
                            Giới thiệu về công ty
                        </Typography>
                        <Button autoFocus color="inherit" onClick={handleSubmit}>
                            Cập nhật
                        </Button>
                    </Toolbar>
                </AppBar>
                <Form className="padding-20">
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