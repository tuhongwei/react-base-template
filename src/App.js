import React, { Component } from 'react';
// import { Button } from 'antd';
import logo from './assets/img/logo.svg';
import ReactRouter from './router';
import './App.css';

class App extends Component {
  render () {
    return (
      <div className='App'>
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
        </header>
        <ReactRouter />
      </div>
    );
  }
}

export default App;
