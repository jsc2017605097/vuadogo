import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';
import { useSelector } from 'react-redux'
import Loading from '../../components/loading'
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

    const classes = useStyles();
    
    return (
        <div className={classes.root}>
            <Link to='/'>
                <Chip
                    key={0}
                    label="Tất cả"
                    clickable
                    color="primary"
                />
            </Link>
            {
                category.map(c => <Link key={c._id} to={'/category/' + c._id}><Chip
                    label={c.name}
                    clickable
                    color="primary"
                /></Link>)
            }
            {category.length === 0 && <div><Loading /></div>}
        </div>
    );
}