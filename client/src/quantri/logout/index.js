import React from 'react'
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import Fab from '@material-ui/core/Fab';
import {useHistory} from 'react-router-dom'

export default function FloatingActionButtons() {
    const history = useHistory()

    function Logout() {
        window.localStorage.removeItem("token")
        history.push('/login')
    }
    return (
        <div className="margin-right--5" onClick={Logout}>
            <Fab size='small' color="primary" aria-label="edit">
                <ExitToAppIcon />
            </Fab>
        </div>
    );
}