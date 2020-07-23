import React from 'react'
import { useHistory } from 'react-router-dom'
import axios from 'axios'

export default function Authentication(PageNeedAuthentication) {
    return function Page() {
        const token = window.localStorage.getItem('token')
        const history = useHistory()
        if (!token) {
            history.push('/login')
        }

        axios.get('/api/checkToken')
            .then(res => console.log(res.data))
            .catch(error => console.log(error.response.data))

        return <PageNeedAuthentication />
    }
}
