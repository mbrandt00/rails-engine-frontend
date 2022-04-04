import React from 'react'
import api from '../api/LocalHost'
import { useEffect, useState } from 'react';
import {Outlet } from 'react-router-dom'
import ListItem from './ListItem';
import {Button, ButtonToolbar} from 'react-bootstrap'
import AddItem from './AddItem'

const ItemsList = () => {
    const [params, setParams] = useState({})
    const [items, setItems] = useState([]);
    const [nameSearch, setNameSearch]= useState('')
    const [minSearch, setMinSearch]= useState('')
    const [maxSearch, setMaxSearch]= useState('')
    const [itemAddShow, setItemAddShow]= useState(false)
    const handleSubmit = (e) => {
      setParams({})
      e.preventDefault()
      if (e.target[0].value.length > 0) {
        setParams({...params, 
          name: e.target[0].value
        })
      } else if (e.target[1].value.length > 0 && e.target[2].value.length === 0 ) {
        debugger;
        setParams({...params, min_price: e.target[1].value})
        debugger;
      } else if (e.target[1].value.length > 0 && e.target[2].value.length > 1) {
        setParams({min_price: e.target[1].value, max_price: e.target[2].value})
      }
    }
    
      useEffect( () => {
        const fetchItems = async () => {
          try {
            const response = await api.get('/items/find_all', {params}) 
            setItems(response.data.data)
          } catch (error) {
            console.log(error)
          }
        };
        fetchItems();
      }, [params])
      let addItemClose = () => setItemAddShow(false)
    return (
      <div>
      <form onSubmit = {handleSubmit} >
        <input className=''
          type = "form-control"
          placeholder = {"Enter a name to search"}
          value = {nameSearch} 
          disabled = {minSearch.length > 0 || maxSearch.length > 0}
          onChange = {(e) => setNameSearch(e.target.value)}
        />
        <input className=''
          type = "number"
          placeholder = {`Enter a min price to search`}
          value = {minSearch}
          disabled = {nameSearch.length > 0 ? true : false}
          onChange = {(e) => setMinSearch(e.target.value)}
        />
        <input className=''
          type = "number"
          placeholder = {`Enter a max price to search`}
          value = {maxSearch}
          disabled = {nameSearch.length > 0 ? true : false}
          onChange = {(e) => setMaxSearch(e.target.value)}
        />
        <button type = 'submit'> Submit </button>
      </form>
      <ButtonToolbar>
        <Button
          variant = 'primary' 
          onClick = {() => setItemAddShow(true)}
        >
          Add Item
        </Button>
        < AddItem show={itemAddShow}
        onHide={addItemClose}/>

      </ButtonToolbar>
      <Outlet />
      <ul>
        {items.map((item) => <ListItem id = {item.id} item = {item.attributes} /> )}
        </ul>
      
    </div>


  )
}

export default ItemsList