import React, { useEffect, useState } from 'react'
import api from '../api/merchants'
const List = ({data, type}) => {
  const isMerchant = (type === 'merchants')
  const [searchTerm, setSearchTerm] = useState("")
  const [searchMinValue, setMinValue] = useState("")
  const [searchMaxValue, setMaxValue] = useState("")
  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  }
  const handleMaxChange = (e) => {
    setMaxValue(e.target.value);
  }
  const handleMinChange = (e) => {
    setMinValue(e.target.value);
  }
  const [params, setParams] = useState({})

  useEffect( () => {
    if (searchTerm.length === 0) {
      if (searchMinValue.length > 0 && searchMaxValue.length > 0 ) {
        setParams({min_price: searchMinValue, max_price: searchMaxValue});
      } else if  (searchMaxValue.length > 0 ) {
          setParams({max_price: searchMaxValue});   
      } else if (searchMinValue.length > 0) {
        setParams({min_pirce: searchMinValue})
      } 
    } else if (searchTerm.length > 0 && searchMinValue.length === 0 && searchMaxValue.length === 0) {
      setParams({name: searchTerm})
    } else { 
      debugger;
      setParams({})
    }
  }, [searchTerm, searchMinValue, searchMaxValue]);
  const [searchResults, setSearchResults] = useState([])
  useEffect( () => {
    const fetchSearchMerchants = async () => {
      try {
        const response = await api.get(`/${type}/find_all`, {params} )
        setSearchResults(response.data.data)
      }catch(error) {
        
      }
    };
    fetchSearchMerchants();
  }, [searchTerm, searchMaxValue, searchMinValue])
  
  return (
    <div>
      <div className="form-group">
        <label htmlFor="formGroupExampleInput">Search</label>
        {isMerchant ? (
            <input className=''
              type = "form-control"
              placeholder = {`enter ${type}`}
              value = {searchTerm}
              onChange = {handleChange}  
            />
          
        ) : ( <>
              <input className=''
                type = "form-control"
                placeholder = {`enter name`}
                value = {searchTerm}
                onChange = {handleChange}  
              />
              <input className=''
                type = "number"
                placeholder = {`enter min price`}
                value = {searchMinValue}
                onChange = {handleMinChange}
              />
              <input className=''
                type = "number"
                placeholder = {`enter max price`}
                value = {searchMaxValue}
                onChange = {handleMaxChange}
              />
              </>
              

        )}
      </div>
      <ul>
        {searchResults.map((item) => (<li key = {item.id}> {item.attributes.name}</li>))}
      </ul>
    </div>
  )
 }

export default List