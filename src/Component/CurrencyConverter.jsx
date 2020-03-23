import React, { Component } from 'react'

const withCurrency = (BaseComponent) => (
  class Currency extends Component {
    render() {
      return (
        <h1>Hello!</h1>
      )
    }
  }
)