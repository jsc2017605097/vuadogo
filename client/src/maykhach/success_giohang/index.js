import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';
import {useSelector,useDispatch} from 'react-redux'

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        '& > * + *': {
            marginTop: theme.spacing(2),
        },
    },
}));

export default function CustomizedSnackbars() {
    const classes = useStyles();
    const open = useSelector(state=>state.alert)
    const dispatch = useDispatch()

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        dispatch({type:"HIDDEN_ALERT"})
    };

    return (
        <div className={classes.root}>
            <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="success">
                    Đặt hàng thành công!
                </Alert>
            </Snackbar>
        </div>
    );
}