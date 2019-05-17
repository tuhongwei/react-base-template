import React, { Component } from 'react';
import logo from './assets/img/logo.svg';
import Clock from './components/Clock';
import Calculator from './components/Calculator';
import './App.css';

class App extends Component {
  render () {
    return (
      <div className='App'>
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <Clock />
          <Calculator />
        </header>
      </div>
    );
  }
}

export default App;
