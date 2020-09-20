import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import axios from 'axios'
import { useSelector } from 'react-redux'

export default function FormDialog() {
    const [open, setOpen] = React.useState(false);
    const [name, setName] = React.useState('')
    const [phone, setPhone] = React.useState('')
    const [address, setAddress] = React.useState('')
    const cart = useSelector(state => state.cart)

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    function sendInfor() {
        if (!name || !phone) {
            window.alert("Không được để trống tên hoặc số điện thoại!")
            return 0
        }
        axios({
            method: "POST",
            url: "/api/info",
            data: { name, phone, address, cart: cart },
            headers: {
                "Authorization": window.localStorage.getItem("token")
            }
        }).then(res => { window.alert("Gửi thông tin thành công!"); handleClose() })
            .catch(error => window.alert("Gửi thông tin thất bại!"))
    }

    return (
        <div style={{ marginTop: "10px" }}>
            <Button variant="contained" color="secondary" onClick={handleClickOpen}>
                Đặt hàng
            </Button>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Gửi thông tin đặt hàng</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Quý khách vui lòng để lại thông tin để chúng tôi sớm liên lạc với quý khách hàng trong thời gian sớm nhất.
                    </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        label="Tên"
                        type="text"
                        fullWidth
                        onChange={event => setName(event.target.value)}
                    />
                    <TextField
                        margin="dense"
                        label="Số điện thoại"
                        type="text"
                        fullWidth
                        onChange={event => setPhone(event.target.value)}
                    />
                    <TextField
                        margin="dense"
                        label="Địa chỉ"
                        type="text"
                        fullWidth
                        onChange={event => setAddress(event.target.value)}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Đóng
                    </Button>
                    <Button onClick={sendInfor} color="primary">
                        Đặt hàng
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}