import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { useSelector, useDispatch } from 'react-redux'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
}));

export default function BasicTextFields() {
    const classes = useStyles();
    const categories = useSelector(state => state.category)
    const selected = useSelector(state => state.filter.category)
    const dispatch = useDispatch()

    return (
        <form className={classes.root} noValidate autoComplete="off">
            <TextField className='img' id="standard-basic" label="Search" onChange={(event) => dispatch({ type: "FILTER_NAME", data: event.target.value })} />
            <FormControl className={classes.formControl + ' img'}>
                <InputLabel id="demo-simple-select-label">Category</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={selected}
                    onChange={(event) => dispatch({ type: "FILTER_CATEGORY", data: event.target.value })}
                >
                    <MenuItem value='ALL'>ALL</MenuItem>
                    {
                        categories.map(item => <MenuItem value={item._id}>{item.name}</MenuItem>)
                    }
                </Select>
            </FormControl>
        </form>
    );
}