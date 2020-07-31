import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom'

export default function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const history = useHistory()

    useEffect(() => {
        const token = window.localStorage.getItem("token")
        if (token) {
            history.push('/admin')
        }
    }, [history])

    function handleChangeUser(event) {
        switch (event.target.name) {
            case 'username':
                setUsername(event.target.value)
                break
            case 'password':
                setPassword(event.target.value)
                break
            default:
                return 1
        }
    }

    function handleSubmit(event) {
        event.preventDefault()
        setError('')
        setLoading(true)
        const user = { username, password }
        axios.post('/api/login', user)
            .then(res => {
                const token = "bearer " + res.data
                window.localStorage.setItem("token", token)
                history.push('/admin')
            })
            .catch(error => {
                setLoading(false)
                setError(error.response.data)
            })
    }

    function ErrorComponent() {
        return error ? <div style={{ color: 'red' }}>{error}</div> : null
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type='text' name='username' value={username} onChange={handleChangeUser} placeholder='username' />
            <br />
            <input type='password' name='password' value={password} onChange={handleChangeUser} placeholder='password' />
            <br />
            <button type='submit'>Login</button>
            <ErrorComponent />
            <br />
            {loading && 'Loading...'}
        </form>
    )
}


