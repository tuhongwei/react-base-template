import React, { Component } from 'react';
import TemperatureInput from './TemperatureInput';

class Calculator extends Component {
  constructor (props) {
    super(props);
    this.state = { date: new Date() };
  }
  render () {
    return <TemperatureInput />;
  }
}

export default Calculator;
