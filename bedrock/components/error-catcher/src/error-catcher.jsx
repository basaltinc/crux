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
      const [line1, line2, ...rest] = this.state.errorInfo.componentStack
        .split('\n')
        .filter(x => x); // removes empty lines

      return (
        <div style={{ width: '90%', margin: '0 auto' }}>
          <h2>Something went wrong</h2>
          <h4 style={{ color: 'red' }}>
            {this.state.error && this.state.error.toString()}
          </h4>
          <div>{line1}</div>
          <div>{line2}</div>
          <details style={{ whiteSpace: 'pre-wrap' }}>
            <summary>Rest of Stack Trace</summary>
            {rest.join('\n')}
          </details>
        </div>
      );
    }
    return this.props.children;
  }
}

ErrorCatcher.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ErrorCatcher;
