import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';

import { useDispatch } from 'react-redux'
import userAction from '../actions/user'
import { useHistory } from 'react-router-dom'
import LoginImage from '../images/login2.png'
import DropImage from '../images/drop2.png'

const StyledMenu = withStyles({
    paper: {
        border: '1px solid #d3d4d5',
    },
})((props) => (
    <Menu
        elevation={0}
        getContentAnchorEl={null}
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
        }}
        transformOrigin={{
            vertical: 'top',
            horizontal: 'center',
        }}
        {...props}
    />
));

const StyledMenuItem = withStyles((theme) => ({
    root: {
        '&:focus': {
            backgroundColor: theme.palette.primary.main,
            '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
                color: theme.palette.common.white,
            },
        },
    },
}))(MenuItem);

export default function User({ user }) {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const dispatch = useDispatch()
    const history = useHistory()

    function handleLogout() {
        window.localStorage.removeItem('token')
        dispatch(userAction.logout)
        history.push('/login')
    }

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div className='flex-rows'>
            {user.name}
            <img  onClick={handleClick} src={DropImage} alt='Drop user' />
            <StyledMenu
                id="customized-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <StyledMenuItem onClick={handleLogout}>
                    <img className='margin-right-10' src={LoginImage} alt='Log out' />
                    <ListItemText  primary="Đăng Xuất" />
                </StyledMenuItem>
                <StyledMenuItem>

                    <ListItemText primary="" />
                </StyledMenuItem>
                <StyledMenuItem>
                    <ListItemIcon>
                        <InboxIcon fontSize="small" />
                    </ListItemIcon>
                    <ListItemText primary="Inbox" />
                </StyledMenuItem>
            </StyledMenu>
        </div>
    );
}

