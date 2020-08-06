import React from 'react'
import Alert from '@material-ui/lab/Alert'

export default function Error({error}) {
    if (!error) {
        return null
    }
    return <Alert severity="error">{error}</Alert>
}
