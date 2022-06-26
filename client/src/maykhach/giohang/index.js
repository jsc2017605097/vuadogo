import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import './index.css'
import SkipNextIcon from '@material-ui/icons/SkipNext';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import Clear from '../../components/button_delete'
import DatHang from '../form_feedback'
import Alert from '../../components/alert_error'

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});

export default function SimpleTable() {
    const classes = useStyles();
    const cart = useSelector(state => state.cart)
    const dispatch = useDispatch()

    React.useEffect(() => {
        const y = document.getElementById("banner").scrollHeight + document.getElementById("vechungtoi").scrollHeight
        window.scrollTo(0, y)
    }, [])


    let total = 0
    cart.forEach(p => {
        total += p.price * p.soluong
    })
    if (cart.length === 0) {
        return <div className='giohang'>
            <div style={{ background: "#3f51b5", color: "#FFFFFF", padding: "10px", display: 'flex', alignItems: "center" }}>
                <Link to='/' className="tieptucmuahang" >Trang chủ&nbsp;&gt;&nbsp; </Link>
                <span>Giỏ hàng của bạn</span>
            </div>
            <Alert content="Giỏ hàng trống, hãy mua hàng ngay!" />
        </div>
    }
    return (
        <div className='giohang'>
            <div style={{ background: "#3f51b5", color: "#FFFFFF", padding: "10px", display: 'flex', alignItems: "center" }}>
                <Link to='/' className="tieptucmuahang" >Trang chủ&nbsp;&gt;&nbsp;</Link>
                <span>Giỏ hàng của bạn</span>
            </div>
            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>STT</TableCell>
                            <TableCell align="left">Ảnh</TableCell>
                            <TableCell align="left">Tên</TableCell>
                            <TableCell align="left">Xem chi tiết</TableCell>
                            <TableCell align="left">Số lượng</TableCell>
                            <TableCell align="left">Giá</TableCell>
                            <TableCell align="left">Thành tiền</TableCell>
                            <TableCell align="left">Xóa</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {cart.map((product, key) => (
                            <TableRow key={product._id}>
                                <TableCell component="th" scope="row">
                                    {key + 1}
                                </TableCell>
                                <TableCell align="left"><img src={product.img[0]} alt={product.name} width="100px" /></TableCell>
                                <TableCell align="left">{product.name}</TableCell>
                                <TableCell align="left"><Link style={{ color: "blue !important" }} to={'/product/' + product._id}>Xem chi tiết</Link></TableCell>
                                <TableCell align="left"><SkipPreviousIcon className="pointer" onClick={() => dispatch({ type: "PRE", data: product })} />
                                    {product.soluong} <SkipNextIcon className="pointer" onClick={() => dispatch({ type: "INCREASE", data: product })} />
                                </TableCell>
                                <TableCell align="left" style={{ color: "red" }}>{new Intl.NumberFormat().format(product.price)} VNĐ</TableCell>
                                <TableCell align="left" style={{ color: "red" }}>{new Intl.NumberFormat().format(product.price * product.soluong)} VNĐ</TableCell>
                                <TableCell align="left"><Clear onClick={() => dispatch({ type: "DELETE_CART", data: product._id })} /></TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <div style={{ marginTop: "10px", color: "red" }}>
                <span>Tổng tiền: {new Intl.NumberFormat().format(total)} VNĐ</span>
                &nbsp; &nbsp;
                <DatHang />
            </div>
        </div>
    );
}