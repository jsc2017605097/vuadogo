import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import './index.css'
import { FaFacebookF } from 'react-icons/fa'
import { FiPhoneCall } from 'react-icons/fi'
import Cart from '../cart'
import { Link } from 'react-router-dom'
import HomeIcon from '@material-ui/icons/Home';
const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },
    extendedIcon: {
        marginRight: theme.spacing(1),
    },
}));

export default function FloatingActionButtons() {
    const classes = useStyles();

    return (
        <div className="sidebar">
            <div className={classes.root} style={{marginBottom:"10px"}}>
                <Link to="/">
                    <Fab color="primary" aria-label="add">
                        <HomeIcon />
                    </Fab>
                </Link>
            </div>
            <div className={classes.root}>
                <Link to='/cart'>
                    <Fab color="inherit" aria-label="add">
                        <Cart />
                    </Fab>
                </Link>
            </div>
            <div className={classes.root}>
                <Fab color="primary" aria-label="add">
                    <FaFacebookF />
                </Fab>
            </div>
            <div className={classes.root}>
                <a href="tel:+84982839405">
                    <Fab color="secondary" aria-label="add">
                        <FiPhoneCall />
                    </Fab>
                </a>
            </div>
        </div>

    );
}