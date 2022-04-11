import React, { useEffect } from 'react'
import axiosConn from '../api/AxiosConn'
import { useParams } from 'react-router-dom'
import { useState } from 'react'
import {Button, ButtonToolbar} from 'react-bootstrap'
import EditItem from './EditItem'
const ItemDetails = ({user}) => {
  let {itemId} = useParams();
    const [item, setItem] = useState({});
    const [quantity, setQuantity] = useState()
      useEffect( () => {
        const fetchItems = async () => {
          try {
            const response = await axiosConn.get(`/items/${itemId}`, {withCredentials: true}) 
            setItem(response.data.data)
          } catch (error) {
            console.log(error)
          }
        };
        fetchItems();
      }, [])
    const handleSubmit = () => {
      axiosConn.post("/invoices", {
        item: itemId, 
        quantity: quantity
      }, {withCredentials: true})
    }
    let editItemClose = () => setItemEditShow(false)
  const [itemEditShow, setItemEditShow]= useState(false)
  return (
  <div>
        <h1>Item #{itemId}</h1>
        {item.attributes ? 
        <div>
        <p> Item name: {item.attributes.name}</p>
        <p> Item name: {item.attributes.unit_price}</p>
        <p> Item name: {item.attributes.description}</p>
        {/* this should go in merchant auth item page */}
        <form onSubmit = {handleSubmit}>
          <input 
            type = "number" 
            name = "quantity"
            placeholder = {`Quantity`}
            value = {quantity} 
            onChange = {(e) => setQuantity(e.target.value)}
            required 
          />
          <button type = "submit">
            Add to Invoice
          </button>
        </form>
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
      </div> : 'Only customer accounts have access to this page!'}
    </div>
  )
}

export default ItemDetails