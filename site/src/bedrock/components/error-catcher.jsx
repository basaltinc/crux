import React, { Component } from 'react';
import PropTypes from 'prop-types';

// http://reactjs.org/docs/error-boundaries.html
class ErrorCatcher extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      errorInfo: null,
    };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({
      error,
      errorInfo,
    });
  }

  render() {
    if (this.state.errorInfo) {
      return (
        <div style={{ width: '90%', margin: '0 auto' }}>
          <h2>Something went wrong.</h2>
          <h4 style={{ color: 'red' }}>
            {this.state.error && this.state.error.toString()}
          </h4>
          <details style={{ whiteSpace: 'pre-wrap' }}>
            <summary>Stack Trace</summary>
            {this.state.errorInfo.componentStack}
          </details>
        </div>
      );
    }
    return this.props.children;
  }
}

ErrorCatcher.propTypes = {
  children: PropTypes.number.isRequired,
};

export default ErrorCatcher;
