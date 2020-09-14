import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import React from 'react';
import Fab from '@material-ui/core/Fab';

export default function FloatingActionButtons({ onClick }) {
    return (
        <div style={{marginLeft:"-5px"}}>
            <Fab onClick={onClick} size='small' color="secondary" aria-label="edit">
                <DeleteForeverIcon />
            </Fab>
        </div>
    );
}