import React, { useEffect, useState } from 'react'
import api from '../api/merchants'
const List = ({merchants}) => {
    console.log(merchants)
    const [searchTerm, setSearchTerm] = useState("")
    const handleChange = (e) => {
      setSearchTerm(e.target.value);
    }
    const [searchResults, setSearchResults] = useState([])
      useEffect( () => {
        const fetchSearchMerchants = async () => {
          try {
            const response = await api.get('/merchants/find_all', { params: {name: searchTerm}})
            setSearchResults(response.data.data)
          }catch(error) {
            console.log(error)
          }
        };
        fetchSearchMerchants();
      }, [searchTerm])
      console.log(searchResults)
      
  
  return (
    <div>
      <input 
        type = "text"
        placeholder = "search merchant"
        value = {searchTerm}
        onChange = {handleChange}  
      />
      <ul>
        {searchResults.map((merchant) => (<li key = {merchant.id}> {merchant.attributes.name}</li>))}
      </ul>
    </div>
  )
 }

export default List