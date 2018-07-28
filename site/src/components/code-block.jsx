import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CodeBlock extends Component {
  constructor(props) {
    super(props);
  }

  // @todo Setup code highlighting
  componentDidMount() {}

  render() {
    // @todo Make into Tabbed Panel of Code Blocks
    const items = this.props.items.map(item => (
      <div>
        <h5>{item.name}</h5>
        <pre className={`language-${item.language}`}>
          {/* @todo Ensure code is always formatted very nicely */}
          <code>{item.code.trim()}</code>
        </pre>
      </div>
    ));
    return <div>{items}</div>;
  }
}

CodeBlock.propTypes = {
  items: PropTypes.arrayOf({
    name: PropTypes.string.isRequired,
    language: PropTypes.string,
    code: PropTypes.string.isRequired,
  }).isRequired,
};

export default CodeBlock;
