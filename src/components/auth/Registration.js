import React from 'react'
import axios from 'axios'
import { useState } from 'react'
const Registration = ({handleSuccessfulAuth}) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [passwordConfirmation, setPasswordConfirmation] = useState('')
    const [registrationErrors, setRegistrationErrors] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3000/registrations', {
            email: email,
            password: password,
            password_confirmation: passwordConfirmation,
        }, 
        {withCredentials: true}
        )
        .then(response => {
            if (response.data.status === 'created') {
                {handleSuccessfulAuth(response.data);}
            }
            }).catch(error => {
                console.log("registration error", error)}
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
            <input 
                type = "password" 
                name = "passwordconfirmation" 
                placeholder = "Password confirmation"
                onChange = {(e) => setPasswordConfirmation(e.target.value)}
                value = {passwordConfirmation}
                required 
            />
            <button type = "submit">Register</button>
            
        </form>
    </div>
  )
}

export default Registration