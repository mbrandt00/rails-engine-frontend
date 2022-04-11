import React from 'react'

import ListItem from './ListItem';
import Search from '../Search';
import { useState } from 'react';
const ItemsList = ({user}) => {
  const user_type = user.type_of_user 
  const [items, setItems] = useState([]);
  const handleCallback = (searchData) =>{
      setItems(searchData)
  }
  console.log(user.type_of_user)
    return (
      <div>
        <Search user = {user} parentCallback = {handleCallback}/>
        {user_type === 'merchant' ? 'merchant' : 'customer'}
      <ul>
        {items.map((item) => <ListItem id = {item.id} item = {item.attributes} /> )}
        </ul>
    </div>
  )
}

export default ItemsList