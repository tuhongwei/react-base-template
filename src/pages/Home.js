import React, { Component } from 'react';
import './Home.css';

const scaleNames = {
  c: 'Celsius',
  f: 'Fahrenheit'
};

class Home extends Component {
  constructor (props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange (e) {
    this.props.onTemperatureChange(e.target.value);
  }
  render () {
    const temperature = this.props.temperature;
    const scale = this.props.scale;
    return (
      <div className='home'>
        <p>home页</p>
        <fieldset>
          <legend>Enter temperature in {scaleNames[scale]}:</legend>
          <input value={temperature} onChange={this.handleChange} />
        </fieldset>
      </div>
    );
  }
}

export default Home;
