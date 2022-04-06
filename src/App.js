import {Route, Routes} from 'react-router-dom';
import Layout from './components/Layout';
import ItemsList from './components/ItemsList';
import ItemDetails from './components/ItemDetails';
import Home from './components/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container'
import Dashboard from './components/Dashboard';
import {useEffect, useState} from 'react'
import axios from 'axios';


function App() {
  const [user, setUser] = useState({})
  const [loggedIn, setLoggedIn] = useState(false); 
  const handleLogin = (data) => {
    setLoggedIn(true);
    setUser(data.user)
  }

  useEffect( () => {
    const checkLoginStatus = () => {
      axios.get("http://localhost:3000/logged_in", {withCredentials: true})
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
        <Route path = "/items" element = {<ItemsList />} />
        <Route path = "items/:itemId" element = {<ItemDetails />}/>
      </Route>
      <Route path = "home" element = {<Home handleLogin = {handleLogin} loggedInStatus = {loggedIn}/>}/> 
      <Route path = "dashboard" element = {<Dashboard loggedInStatus = {loggedIn}/>}/> 
    </Routes>
    </Container>
  );
}

export default App;