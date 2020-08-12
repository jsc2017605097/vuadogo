import React from 'react'
import {Alert,AlertTitle } from '@material-ui/lab'

export default function Success({ alert }) {
    if (!alert) {
        return null
    }
    return <Alert severity="success">
        <AlertTitle>Success</AlertTitle>
        {alert} — <strong>check it out!</strong>
    </Alert>
}
