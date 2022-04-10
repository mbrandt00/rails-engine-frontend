import React from 'react'
import axiosConn from '../../api/AxiosConn'
import { useState } from 'react'
import Select from 'react-select';
const Registration = ({handleSuccessfulAuth}) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [passwordConfirmation, setPasswordConfirmation] = useState('')
    const [registrationErrors, setRegistrationErrors] = useState('')
    const [typeOfUser, setTypeOfUser] = useState('')

    const handleSubmit = (e) => {
        debugger;
        e.preventDefault();
        axiosConn.post('/registrations', {
            email: email,
            password: password,
            password_confirmation: passwordConfirmation,
            type_of_user: typeOfUser
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
            <div className="select-container">
                <select onChange={(e) => setTypeOfUser(e.target.value)}>
                    <option value=''></option>
                    <option value="Customer">Customer</option>
                    <option value="Merchant">Merchant</option>
                </select>
            </div>
            <button 
                type = "submit" 
                disabled={typeOfUser === '' ? true : false }>
                    Register
            </button>
        </form>
    </div>
  )
}

export default Registration