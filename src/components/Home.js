import Registration from './auth/Registration'
import { Navigate, useNavigate } from 'react-router-dom';
import Login from './auth/Login';
const Home = ({loggedInStatus, handleLogin}) => {
    let navigate = useNavigate()
    const handleSuccessfulAuth = (data) => {
        handleLogin(data)
        navigate("/dashboard", {replace: true})
    }
  return (
    <div>
        <h1>Logged in? {loggedInStatus ? 'true' : 'false'}</h1>
        <Registration handleSuccessfulAuth = {handleSuccessfulAuth}/>
        <Login handleSuccessfulAuth={handleSuccessfulAuth} />
    </div>
  )
}

export default Home