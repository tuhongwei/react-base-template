import React, { Component } from 'react';
import request from './utils/request';

const sendError = err => {
  request.post('/middleware/errorMsg', err).then(res => {
    console.log(res.data);
  });
};

class ErrorBoundary extends Component {
  constructor (props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError () {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }
  componentDidCatch (error, info) {
    // You can also log the error to an error reporting service
    sendError(error);
  }

  render () {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
