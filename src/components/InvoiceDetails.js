import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axiosConn from '../api/AxiosConn'
import InvoiceItemDetails from './InvoiceItemDetails'
const InvoiceDetails = () => {
    const {invoiceid} = useParams()
    const [invoice, setInvoice] = useState({})
    useEffect ( () => {
        const fetchInvoice = async () => {
            try {
                const response = await axiosConn.get(`/invoices/${invoiceid}`, {withCredentials:true})
                setInvoice(response.data.data.attributes)
            } catch (error) {
                console.log(error)
            }
        }
        fetchInvoice()
    }, [])
    console.log(invoice)
  return (
    <div>
        <h1>Invoice #{invoiceid}</h1>
        <p>Invoice Status: {invoice.status} </p>
        <p>{invoice.item_info ? 
            <>
            {invoice.item_info.map((invoice_item) => <InvoiceItemDetails merchant = {invoice_item.merchant} item = {invoice_item.item} quantity = {invoice_item.quantity} item_status = {invoice_item.item_status}/> )} 
            </>
            : 
            
            'none'} </p>
        
    </div>
  )
}

export default InvoiceDetails