import {Route, Routes} from 'react-router-dom';
import Layout from './components/Layout';
import ItemsList from './components/ItemsList';
import ItemDetails from './components/ItemDetails';
import Home from './components/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container'
import Dashboard from './components/Dashboard';
import {useEffect, useState} from 'react'
import axiosConn from './api/AxiosConn';
import InvoiceDetails from './components/InvoiceDetails';


function App() {
  const [user, setUser] = useState({})
  const [loggedIn, setLoggedIn] = useState(false); 
  const handleLogin = (data) => {
    setLoggedIn(true);
    setUser(data.user)
  }
  useEffect( () => {
    const checkLoginStatus = () => {
      axiosConn.get("/logged_in", {withCredentials: true})
      .then(response => {
        if (response.data.logged_in && loggedIn=== false){
        setLoggedIn(true)
        setUser(response.data.user) 
      }else if (!response.data.logged_in && loggedIn ===true){
          setLoggedIn(false)
          setUser({})
      }
    }
      )
      .catch(error => { console.log(error)})
    }
    checkLoginStatus();
  }, [])
  return (
    <Container>
    <Routes> 
      <Route path = "/" element = {<Layout/>} >
        {/* <Route path = "/merchants" element = {<List data = {merchants} type = "merchants"/>} /> */}
        <Route path = "items" element = {<ItemsList user = {user}/>} />
        <Route path = "items/:itemId" element = {<ItemDetails user = {user} />}/>
        <Route path = "home" element = {<Home handleLogin = {handleLogin} user = {user}/>}/> 
        <Route path = "dashboard" element = {<Dashboard user = {user} />} />
        <Route path = "/dashboard/:invoiceid" element = {<InvoiceDetails />} />
      </Route>
    </Routes>
    </Container>
  );
}

export default App;