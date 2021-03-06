import React, { Component } from 'react';
import CurrencyDisplay from './CurrencyDisplay';

const currencyData = [
	{ name: 'Japanese Yen', symbol: '¥', rate: 113.6, id: 0 },
	{ name: 'British Pound', symbol: '£', rate: 0.77, id: 1 },
	{ name: 'Canadian Dollar', symbol: 'CAD', rate: 1.32, id: 2 },
	{ name: 'Mexican Peso', symbol: 'Mex$', rate: 20.41, id: 3 },
	{ name: 'Swiss Franc', symbol: 'Fr.', rate: 1.01, id: 4 }
]

const withCurrency = (BaseComponent) => (
  class Currency extends Component {
    state = {
      selectedCurrency: 'Select Currency',
      amount: 0
    }

    handleAmountIncrease = () => {
      return this.state.selectedCurrency === 'Select Currency' ?
      null :
      this.setState({amount: this.state.amount + 1});
    }

    handleAmountDecrease = () => {
      return this.state.amount - 1 < 0 || this.state.selectedCurrency === 'Select Currency' ?
      null:
      this.setState({amount: this.state.amount - 1});
    }

    handleOptionSelect = (e) => {
      const userValue = e.target.value;
      this.setState({selectedCurrency: userValue});
    }

    render() {
      const currencyList = currencyData.map((currency, i) => <option key={currency.id} value={i}>{currency.name}</option>)
      return (
        <>
          <select onChange={this.handleOptionSelect} value={this.state.selectedCurrency}>
            <option disabled value='Select Currency'>Select Currency</option>
            {currencyList}
          </select>

          <button onClick={this.handleAmountIncrease}>+</button>
          <button onClick={this.handleAmountDecrease}>-</button>

          <BaseComponent
						currency={currencyData[this.state.selectedCurrency]}
						amount={this.state.amount}
					/>
        </>
      )
    }
  }
)

const ExchangedCurrency = withCurrency(CurrencyDisplay);

export default ExchangedCurrency;