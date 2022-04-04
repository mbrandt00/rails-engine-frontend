import {Route, Routes} from 'react-router-dom';
import Layout from './components/Layout';
import ItemsList from './components/ItemsList';
import ItemDetails from './components/ItemDetails';

import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container'


function App() {

  


  return (
    <Container>
    <Routes> 
      <Route path = "/" element = {<Layout/>} >
        {/* <Route path = "/merchants" element = {<List data = {merchants} type = "merchants"/>} /> */}
        <Route path = "/items" element = {<ItemsList />} />
        <Route path = "items/:itemId" element = {<ItemDetails />}/>
      </Route>
       
    </Routes>
    </Container>
  );
}

export default App;