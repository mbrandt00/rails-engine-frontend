import Registration from './auth/Registration'
import { Navigate, useNavigate } from 'react-router-dom';
import Login from './auth/Login';
import axiosConn from '../api/AxiosConn';
const Home = ({handleLogin, user}) => {
    let navigate = useNavigate()
    const handleSuccessfulAuth = (data) => {
        handleLogin(data)
        navigate("/dashboard", {replace: true})
    }
    const handleLogout = () => {
      axiosConn.delete("/logout", {withCredentials: true})
    }
    console.log(user)
  return (
    <div>
        <h1>{Object.entries(user).length > 0 ? `You are logged in as ${user.email}` : 'Please log in!'}</h1>
        {        Object.entries(user).length > 0 ? <button onClick = {handleLogout}>Logout</button> :
          <div>
          <Registration handleSuccessfulAuth = {handleSuccessfulAuth}/>
          <Login handleSuccessfulAuth={handleSuccessfulAuth} />
          </div>
        }
    </div>
  )
}

export default Home