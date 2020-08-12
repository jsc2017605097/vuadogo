import React from 'react'
import LinearProgress from '@material-ui/core/LinearProgress'

export default function Loading({loading}) {
    if (loading) {
        return <div className="margin-top-20">
            <LinearProgress />
            <div style={{ margin: "15px 0px 10px 0px" }}></div>
            <LinearProgress color="secondary" />
        </div>
    }
    return null
}
