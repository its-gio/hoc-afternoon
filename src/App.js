import React, { Component } from 'react';
import './App.css';
import ExchangedCurrency from './Component/CurrencyConverter';

class App extends Component {
  render() {
    return (
      <>
        <h2>Higher Order Component</h2>
        <ExchangedCurrency />
      </>
    );
  }
}

export default App;
