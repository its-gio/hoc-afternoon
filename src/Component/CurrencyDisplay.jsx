import React from 'react'

const CurrencyDisplay = (props) => {
  return props.currency ?
  (<p>
    US Dollar ${props.amount.toFixed(2)} - {props.currency.name}{' '}
    {props.currency.symbol}
    {(props.amount * props.currency.rate).toFixed(2)}
  </p>) :
  <p>Please choose currency</p>
}

export default CurrencyDisplay;