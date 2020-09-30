import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            marginTop: theme.spacing(2),
        },
    },
}));

export default function BasicPagination({ sotrang, setTranghientai,tranghientai }) {
    const classes = useStyles();
    React.useEffect(()=>{
        if(tranghientai > sotrang){
            setTranghientai(1)
        }
    })
    return (
        <div className={classes.root}>
            <Pagination count={sotrang} color="secondary" onChange={(event, page) => { setTranghientai(page) }} />
        </div>
    );
}