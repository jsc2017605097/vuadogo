import React, { useEffect, useState } from 'react'
import { Redirect } from 'react-router-dom'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import userAction from '../actions/user'

export default function Authentication(PageNeedAuthentication) {
    return function Page() {
        const token = window.localStorage.getItem('token')
        const [authorization, setAuthorization] = useState('AUTHEN')
        const dispatch = useDispatch()

        useEffect(() => {

            axios.get('/api/checkToken', { headers: { Authorization: token } })
                .then(res => {
                    dispatch(userAction.checkTokenSuccessly(res.data))
                    setAuthorization('PAGE')
                })
                .catch(error => {
                    dispatch(userAction.checkTokenError)
                    setAuthorization('LOGIN')
                })
        }, [dispatch, token])

        const ComponentShow = () => {
            switch (authorization) {
                case 'LOGIN':
                    return <Redirect to='/login' />
                case 'PAGE':
                    return <PageNeedAuthentication />
                default:
                    return <div>Loading...</div>
            }
        }

        return <ComponentShow />
    }
}
