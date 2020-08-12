import React from 'react'
import {Alert,AlertTitle } from '@material-ui/lab'

export default function Error({ error }) {
    if (!error) {
        return null
    }
    return <Alert severity="error">
        <AlertTitle>Error</AlertTitle>
        {error} — <strong>check it out!</strong>
    </Alert>
}
