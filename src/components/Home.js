import Registration from './auth/Registration'
import { Navigate, useNavigate } from 'react-router-dom';
import Login from './auth/Login';
import axiosConn from '../api/AxiosConn';
const Home = ({loggedInStatus, handleLogin}) => {
    let navigate = useNavigate()
    const handleSuccessfulAuth = (data) => {
        handleLogin(data)
        navigate("/dashboard", {replace: true})
    }
    const handleLogout = () => {
      axiosConn.delete("/logout", {withCredentials: true})
    }
  return (
    <div>
        <h1>Logged in? {loggedInStatus ? 'true' : 'false'}</h1>
        {        loggedInStatus ? <button onClick = {handleLogout}>Logout</button> :
          <div>
          <Registration handleSuccessfulAuth = {handleSuccessfulAuth}/>
          <Login handleSuccessfulAuth={handleSuccessfulAuth} />
          </div>
        }
    </div>
  )
}

export default Home