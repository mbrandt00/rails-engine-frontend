import api from './api/merchants';
import {Route, Routes, useNavigate} from 'react-router-dom';
import Layout from './components/Layout';
import List from './components/List';
import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container'


function App() {

  const [merchants, setMerchants] = useState([]);
  const [items, setItems] = useState([]); 
  useEffect( () => {
    const fetchMerchants = async () => {
      try {
        const response = await api.get('/merchants') 
        setMerchants(response.data)
      } catch (error) {
        console.log(error)
      }
    };
    fetchMerchants();
  }, [])
  useEffect( () => {
    const fetchItems = async () => {
      try{
        const response = await api.get('/items')
        setItems(response.data)
      }catch (error){
        console.log(error)
      }
    }; 
    fetchItems();
  }, [])


  return (
    <Container>
    <Routes> 
      <Route path = "/" element = {<Layout/>} >
        <Route path = "/merchants" element = {<List data = {merchants} type = "merchants"/>} />
        <Route path = "/items" element = {<List data = {items} type = "items"/>} />
      </Route>
       
    </Routes>
    </Container>
  );
}

export default App;