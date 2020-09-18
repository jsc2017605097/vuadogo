import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import './index.css'
import { FaHandPointRight } from 'react-icons/fa'

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});

export default function SimpleTable() {
    const classes = useStyles();
    const cart = useSelector(state => state.cart)

    return (
        <div className='giohang'>
            <div style={{ background: "#3f51b5", color: "#FFFFFF", padding: "10px", display: 'flex', alignItems: "center" }}>
                <span>Giỏ hàng của bạn</span>
                &nbsp;
                &nbsp;
                <FaHandPointRight style={{ color: "red" }} />
                <Link to='/'>Tiếp tục mua hàng</Link>
            </div>
            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>STT</TableCell>
                            <TableCell align="left">Ảnh</TableCell>
                            <TableCell align="left">Tên</TableCell>
                            <TableCell align="left">Số lượng</TableCell>
                            <TableCell align="left">Giá</TableCell>
                            <TableCell align="left">Thành tiền</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {cart.map((product, key) => (
                            <TableRow key={product._id}>
                                <TableCell component="th" scope="row">
                                    {key + 1}
                                </TableCell>
                                <TableCell align="left"><img src={product.img} alt={product.name} width="100px" /></TableCell>
                                <TableCell align="left">{product.name}</TableCell>
                                <TableCell align="left">{product.soluong}</TableCell>
                                <TableCell align="left" style={{color:"red"}}>{new Intl.NumberFormat().format(product.price)} VNĐ</TableCell>
                                <TableCell align="left" style={{color:"red"}}>{new Intl.NumberFormat().format(product.price * product.soluong)} VNĐ</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}