import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';
import { useSelector, useDispatch } from 'react-redux'
import Loading from '../../components/loading'
import axios from 'axios'
import { Link } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        '& > *': {
            margin: theme.spacing(0.5),
        },
    },
}));

export default function Chips(props) {
    const category = useSelector(state => state.category)
    const dispatch = useDispatch()

    const classes = useStyles();
    const handleDelete = (id, name) => () => {
        const check = window.confirm("Bạn chắc chắn muốn xóa danh mục " + name + " không?")
        if (check) {
            axios({
                method: "DELETE",
                url: "/api/category/" + id,
                headers: {
                    "Authorization": window.localStorage.getItem("token")
                }
            }).then(res => {
                dispatch({
                    type: "DELETE_CATEGORY",
                    data: id
                })
                dispatch({ type: "DELETE_PRODUCT_AT_PRODUCT", data: id })
            })
                .catch(error => console.log(error.response.data))
        }

    };

    return (
        <div className={classes.root}>
            <Link to='/dashboard'>
                <Chip
                    key={0}
                    label="Tất cả"
                    clickable
                    color="primary"
                />
            </Link>
            {
                category.map(c => <Link key={c._id} to={'/dashboard/category/' + c._id}><Chip
                    label={c.name}
                    clickable
                    color="primary"
                    onDelete={handleDelete(c._id, c.name)}
                /></Link>)
            }
            {category.length === 0 && <div><Loading /></div>}
        </div>
    );
}