import React from 'react'
import axiosConn from '../api/AxiosConn'
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
      e.preventDefault()
      if (nameSearch.length > 0) {
        setParams({
          name: nameSearch
        })
      } else if (minSearch.length>0 && maxSearch.length===0 ) {
        setParams({min_price: minSearch})
      } else if (minSearch.length>0 && maxSearch.length>0) {
        setParams({min_price: minSearch, max_price: maxSearch})
      }
    }
      useEffect( () => {
        const fetchItems = async () => {
          try {
            const response = await axiosConn.get('/api/v1/items/find_all', {params}) 
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
          // disabled = {minSearch.length > 0 || maxSearch.length > 0}
          onChange = {(e) => {
            setNameSearch(e.target.value)
            // name searches and min/max value searches are mutually exclusively, so we clear min and max search values whenever a name search is made
            setMinSearch('')
            setMaxSearch('')
            }
          }
        />
        <input className=''
          type = "number"
          placeholder = {`Enter a min price to search`}
          value = {minSearch}
          // disabled = {nameSearch.length > 0 ? true : false}
          onChange = {(e) => {
              setMinSearch(e.target.value)
              setNameSearch('')
            }
          }
        />
        <input className=''
          type = "number"
          placeholder = {`Enter a max price to search`}
          value = {maxSearch}
          // disabled = {nameSearch.length > 0 ? true : false}
          onChange = {(e) => {
            setMaxSearch(e.target.value)
            setNameSearch('')
            }
          }
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