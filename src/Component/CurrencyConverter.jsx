import React, { Component } from 'react';

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

    handleAmountIncrease = () => this.setState({amount: this.state.amount + 1});

    handleAmountDecrease = () => this.setState({amount: this.state.amount - 1});

    handleOptionSelect = (e) => {
      const userValue = e.target.value;
      this.setState({selectedCurrency: userValue});
    }

    render() {
      const currencyList = currencyData.map(currency => <option key={currency.id} value={i}>{currency.name}</option>)
      return (
        <>
          <select value={this.state.selectedCurrency}>
            <option disabled value='Select Currency'>Select Currency</option>
            {currencyList}
          </select>

          <button>+</button>
          <button>-</button>

          <BaseComponent
						currency={currencyData[this.state.selectedCurrency]}
						amount={this.state.amount}
					/>
        </>
      )
    }
  }
)