import React from 'react'
import CurrencyFormat from 'react-currency-format';
const InvoiceItemDetails = ({merchant, item, quantity, item_status}) => {
    console.log('Merchant', merchant)
    console.log('Item', item)
  return (
    <>
        <h2>Invoice Item: {item.name}</h2>
        <p>Description: {item.description}</p>
        <p> {quantity} units at <CurrencyFormat value={item.unit_price} displayType={'text'} thousandSeparator={true} prefix={'$'} />  = <CurrencyFormat value={quantity * item.unit_price} displayType={'text'} thousandSeparator={true} prefix={'$'} /> </p>
        <p>Item Status: {item_status}</p>
        <p> Merchant: {merchant.name}</p>
    </>
  )
}

export default InvoiceItemDetails