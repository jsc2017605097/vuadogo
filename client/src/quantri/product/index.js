import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import ButtonDelete from '../../components/button_delete'
import { useSelector, useDispatch } from 'react-redux'
import Loading from '../../components/loading'
import axios from 'axios'
import Alert from '../../components/alert_error';
import { Link } from 'react-router-dom'
import ButtonEdit from '../../components/button_edit'
import Pagination from '../../maykhach/pagination'

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});


export default function SimpleTable(props) {
    const classes = useStyles();
    const checkGetData = useSelector(state => state.checkGetProduct)
    const dispatch = useDispatch()
    const [tranghientai, setTranghientai] = React.useState(1)

    let productsToShow = props.products

    if (props.search) {
        productsToShow = productsToShow.filter(product => {
            return product.name.toLowerCase().indexOf(props.search.toLowerCase()) > -1
        })
    }

    const sobaiviet1trang = 16
    const sotrang = Math.ceil(productsToShow.length / sobaiviet1trang)
    productsToShow = productsToShow.slice(tranghientai * sobaiviet1trang - sobaiviet1trang, tranghientai * sobaiviet1trang)
    function deleteProduct(id, name) {
        return () => {
            if (window.confirm(`Bạn có chắc chắn muốn xóa ${name} không ?`)) {
                axios({
                    method: "DELETE",
                    url: "/api/product/" + id,
                    headers: {
                        "Authorization": window.localStorage.getItem("token")
                    }
                }).then(res => {
                    dispatch({ type: "DELETE_PRODUCT_AT_PRODUCT", data: res.data._id })
                })
            }
        }
    }
    if (!checkGetData) {
        return <div className="flex"><Loading /></div>
    }
    return (
        <div>
            <div style={{ padding: '10px', background: "#3f51b5", color: "#FFFFFF" }}>Danh sách sản phẩm</div>
            { productsToShow.length > 0 ?
                <TableContainer component={Paper}>
                    <Table className={classes.table} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Stt</TableCell>
                                <TableCell align="left">Tên sản phẩm</TableCell>
                                <TableCell align="left">Ảnh</TableCell>
                                <TableCell align="left">Giá</TableCell>
                                <TableCell align="left">Sửa</TableCell>
                                <TableCell align="left">Xóa</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {productsToShow.map((product, key) => (
                                <TableRow key={key}>
                                    <TableCell>{key + 1}</TableCell>
                                    <TableCell align="left" component="th" scope="row">
                                        {product.name}
                                    </TableCell>
                                    <TableCell align="left"><img alt="img" src={product.img[0]} height="100px" /></TableCell>
                                    <TableCell align="left">{new Intl.NumberFormat().format(product.price)} VNĐ</TableCell>
                                    <TableCell align="left"><Link to={'/dashboard/product/' + product._id}><ButtonEdit /></Link></TableCell>
                                    <TableCell align="left"><ButtonDelete onClick={deleteProduct(product._id, product.name)} /></TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer> : <div><Alert content={"Không tìm thấy sản phẩm!"} /></div>}
            <div>
                <Pagination sotrang={sotrang} setTranghientai={setTranghientai} />
            </div>
        </div>
    );
}