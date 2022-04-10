import React from 'react'
import CurrencyFormat from 'react-currency-format';
import { Link } from 'react-router-dom';
const InvoiceItem = ({invoice}) => {
  return (
    <div>
        <h1><Link to={`/dashboard/${invoice.id}`} >Invoice #{invoice.id}</Link>
        </h1>
        <ul>
            <li>Total Cost: {<CurrencyFormat value={invoice.attributes.total_cost} displayType={'text'} thousandSeparator={true} prefix={'$'} />} </li>
            <li> Status: {invoice.attributes.status}</li>
            <li> Items ({invoice.attributes.invoice_items[1]}): {invoice.attributes.invoice_items[0].slice(0,30)+ '...'}</li>
        </ul>
    </div>
  )
}

export default InvoiceItem