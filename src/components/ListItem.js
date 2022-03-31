import React from 'react'

const ListItem = ({name, key}) => {
  return (
      <div>
    <h3>{name}</h3>
    <p>{key}</p>
    </div>
  )
}

export default ListItem