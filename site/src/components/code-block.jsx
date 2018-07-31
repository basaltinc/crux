import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TabbedPanel from '../bedrock/components/tabbed-panel';

class CodeBlock extends Component {
  constructor(props) {
    super(props);
  }

  // @todo Setup code highlighting
  componentDidMount() {}

  render() {
    const items = this.props.items.map(item => ({
      title: item.name,
      id: item.language,
      children: (
        <pre className={`language-${item.language}`}>
          <code>{item.code.trim()}</code>
        </pre>
      ),
    }));

    return <TabbedPanel items={items} />;
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
