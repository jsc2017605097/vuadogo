import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import { deepOrange, deepPurple } from '@material-ui/core/colors';
import { useSelector } from 'react-redux'
import './index.css'
const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    orange: {
        color: theme.palette.getContrastText(deepOrange[500]),
        backgroundColor: deepOrange[500],
    },
    purple: {
        color: theme.palette.getContrastText(deepPurple[500]),
        backgroundColor: deepPurple[500],
    },
}));

export default function LetterAvatars() {
    const user = useSelector(state => state.user)
    const classes = useStyles();

    return (
        <div className={classes.root} style={{ display: "flex", alignItems: "center" ,padding:"20px 0"}}>
            <Avatar className={classes.orange}>VD</Avatar>&nbsp;{user.name}
        </div>
    );
}