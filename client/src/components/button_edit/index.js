import React from 'react';
import Fab from '@material-ui/core/Fab';
import EditIcon from '@material-ui/icons/Edit';

export default function FloatingActionButtons() {
    return (
        <div>
            <Fab size='small' color="secondary" aria-label="edit">
                <EditIcon />
            </Fab>
        </div>
    );
}