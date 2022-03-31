import api from './api/merchants';
import {Route, Routes, useNavigate} from 'react-router-dom';
import Layout from './components/Layout';
import List from './components/List';
import { useEffect, useState } from 'react';


function App() {

  const [merchants, setMerchants] = useState([]);
  useEffect( () => {
    const fetchMerchants = async () => {
      try {
        const response = await api.get('/merchants/') 
        setMerchants(response.data.data)
      } catch (error) {
        console.log(error)
      }
    };
    fetchMerchants();
  }, [])
  return (
    <Routes> 
      <Route path = "/" element = {<List merchants = {merchants}/>} >
      </Route>
       
    </Routes>
  );
}

export default App;