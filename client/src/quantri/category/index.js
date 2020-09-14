import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';
import { useSelector, useDispatch } from 'react-redux'
import Loading from '../../components/loading'
import axios from 'axios'

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
        if (window.confirm("Bạn chắc chắn muốn xóa danh mục " + name + " không?")) {
            axios({
                method: "DELETE",
                url: "/api/category/" + id,
                headers: {
                    "Authorization": window.localStorage.getItem("token")
                }
            }).then(res => console.log(res.data))
                .catch(error => console.log(error.response.data))

            dispatch({
                type: "DELETE_CATEGORY",
                data: id
            })
        }
    };

    const handleClick = id => () => {
        props.setSelectedCategory(id)
    }

    return (
        <div className={classes.root}>
            <Chip
                key={0}
                label="Tất cả"
                clickable
                color="primary"
                onClick={handleClick(0)}
            />
            {
                category.map(c => <Chip
                    key={c._id}
                    label={c.name}
                    clickable
                    color="primary"
                    onDelete={handleDelete(c._id, c.name)}
                    onClick={handleClick(c._id)}
                />)
            }
            {category.length === 0 && <div><Loading /></div>}
        </div>
    );
}