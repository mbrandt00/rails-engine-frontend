import React from 'react'
import { Navigate } from 'react-router-dom';
import axiosConn from '../api/AxiosConn';
import { useState, useEffect } from 'react';
import InvoiceItem from './InvoiceItem';
const Dashboard = ({user}) => {
  const [invoices, setInvoices] = useState({})
  useEffect( () => {
    const fetchInvoices = async () => {
      try{
        const response = await axiosConn.get('/invoices', {withCredentials:true})
        setInvoices(response.data.data)
      } catch (error) {
        console.log(error)
      }
    }
    fetchInvoices();
  }, [])
  console.log(invoices)
  return (
    <div>
        <h1> {user !==undefined ? `Welcome ${user.email}` : (
          <Navigate 
            to= {"/home"}
            replace 
          />
        )}</h1>
        {invoices.length >0 ? 
          invoices.map((invoice) => <InvoiceItem key = {invoice.id} invoice = {invoice} /> )
          : 'No Invoices'
      }
        
      </div>
  )
}

export default Dashboard