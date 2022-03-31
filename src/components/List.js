import React, { useState } from 'react'

const List = ({merchants}) => {
    console.log(merchants)
  
  return (
    <div>
      <ul>
        {merchants.map((merchant) => (<li key = {merchant.id}> {merchant.attributes.name}</li>))}
      </ul>
    </div>
  )
 }

export default List