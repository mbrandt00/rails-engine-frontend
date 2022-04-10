import React from 'react'
import { useState } from 'react'
import axiosConn from '../../api/AxiosConn'
const Login = ({handleSuccessfulAuth}) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        axiosConn.post('/sessions', {
            email: email,
            password: password,
        }, 
        {withCredentials: true}
        )
        .then(response => {
            if (response.data.logged_in) {
                {handleSuccessfulAuth(response.data);}
            }
            }).catch(error => {
                console.log("login error", error)}
    )}

  return (
    <div>
        <form onSubmit = {handleSubmit}>
            <input 
                type = "email" 
                name = "email" 
                placeholder = "email"
                value = {email}
                onChange = {(e) => setEmail(e.target.value)}
                required 
            />
            <input 
                type = "password" 
                name = "password" 
                placeholder = "Password"
                value = {password}
                onChange = {(e) => setPassword(e.target.value)}

                required 
            />
            
            <button type = "submit">Login</button>
            
        </form>
    </div>
  )
}

export default Login