import React from 'react'
import { Link } from 'react-router-dom'

const ListItem = ({id, item}) => {
  return (
    <div>
    <li key = {id}> 
        <h4>{item.name}</h4>
            <Link to={`/items/${id}`} >Show Page</Link>
        <p>Description: {item.description}</p>
        <p>Unit Price: {item.unit_price}</p>
     </li>
     </div>
  )
}

export default ListItem