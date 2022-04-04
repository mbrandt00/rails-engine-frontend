import React, { useEffect } from 'react'
import LocalHost from '../api/LocalHost'
import { useParams } from 'react-router-dom'
import { useState } from 'react'
import {Button, ButtonToolbar} from 'react-bootstrap'

import EditItem from './EditItem'
const ItemDetails = () => {
  let {itemId} = useParams();
    const [item, setItem] = useState([]);
      useEffect( () => {
        const fetchItems = async () => {
          try {
            const response = await LocalHost.get(`/items/${itemId}`) 
            setItem(response.data.data)
          } catch (error) {
            // console.log(error)
          }
        };
        fetchItems();
      }, [itemId])

    let editItemClose = () => setItemEditShow(false)
  const [itemEditShow, setItemEditShow]= useState(false)
  return (
    <div>
        <h1>Item #{itemId}</h1>
        <p>{JSON.stringify(item)}</p>
        <p> Item name: {item.attributes.name}</p>
        <p> Item name: {item.attributes.unit_price}</p>
        <p> Item name: {item.attributes.description}</p>
<ButtonToolbar>
        <Button
          variant = 'primary' 
          onClick = {() => setItemEditShow(true)}
        >
          Edit Item
        </Button>
        < EditItem item = {item} show={itemEditShow}
        onHide={editItemClose}/>

      </ButtonToolbar>
    </div>
  )
}

export default ItemDetails