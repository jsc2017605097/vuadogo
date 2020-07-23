import React from 'react'
export default function Login() {
    return (
        <form>
            <input type='text' placeholder='username' />
            <br />
            <input type='password' placeholder='password' />
            <br />
            <button type='submit'>Login</button>
        </form>
    )
}
