import React from 'react';
import Badge from '@material-ui/core/Badge';
import { withStyles } from '@material-ui/core/styles';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import {useSelector} from 'react-redux'

const StyledBadge = withStyles((theme) => ({
    badge: {
        right: -3,
        top: 13,
        border: `2px solid ${theme.palette.background.paper}`,
        padding: '0 4px',
    },
}))(Badge);

export default function CustomizedBadges() {
    const cart = useSelector(state=>state.cart)
    return (
        <div style={{color:"#565252"}} aria-label="cart">
            <StyledBadge badgeContent={cart.length} color="secondary">
                <ShoppingCartIcon />
            </StyledBadge>
        </div>
    );
}