import React, { useEffect, useState } from 'react'
import api from '../api/LocalHost'
const List = ({data, type}) => {
  const isMerchant = (type === 'merchants')
  const [searchTerm, setSearchTerm] = useState("")
  const [searchMinValue, setMinValue] = useState("")
  const [searchMaxValue, setMaxValue] = useState("")
  const handleChange = (e) => {
    setParams({name: e.target.value})
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
      debugger;
      setParams({name: searchTerm})
    } else { 
      setParams({})
    }
  }, [searchTerm, searchMinValue, searchMaxValue]);
  const [searchResults, setSearchResults] = useState([])
  
  
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