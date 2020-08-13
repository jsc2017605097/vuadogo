import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import DeleteIcon from '@material-ui/icons/Delete';
import axios from 'axios'
import { useDispatch } from 'react-redux'
import EditIcon from '@material-ui/icons/Edit';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

export default function SimpleTable({ products }) {
  const classes = useStyles();
  const dispatch = useDispatch()

  function deleteProduct(id, name) {
    return () => {
      const check = window.confirm('Are you sure delete this product: ' + name)
      if (!check) {
        return
      }

      axios({
        method: "delete",
        url: "/api/product/" + id,
        headers: {
          "Authorization": window.localStorage.getItem('token')
        }
      }).then(res => dispatch({ type: "DELETE_PRODUCT", data: res.data }))
        .catch(error => console.log(error.response.data))
    }
  }

  function getDate(date){
    console.log(new Date(date))
    return (new Date(date)).toDateString();
  }

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name of product</TableCell>
            <TableCell align="right">Image</TableCell>
            <TableCell align="right">Price</TableCell>
            <TableCell align="right">Views</TableCell>
            <TableCell align="right">Create at</TableCell>
            <TableCell align="right">Update at</TableCell>
            <TableCell align="right">Delete</TableCell>
            <TableCell align="right">Edit</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {products.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right"><img src={row.img} alt={row.img} width="50px" /></TableCell>
              <TableCell align="right">{row.price}</TableCell>
              <TableCell align="right">{row.views}</TableCell>
              <TableCell align="right">{getDate(row.created_at)}</TableCell>
              <TableCell align="right">{getDate(row.updated_at)}</TableCell>
              <TableCell align="right"><DeleteIcon className="cursor" onClick={deleteProduct(row._id, row.name)} /></TableCell>
              <TableCell align="right"><EditIcon className="cursor"
                onClick={() => {
                  dispatch({ type: 'SHOW_FORM_EDIT_PRODUCT' })
                  dispatch({ type: "CHOOSE_PRODUCT", data: row })
                }} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}