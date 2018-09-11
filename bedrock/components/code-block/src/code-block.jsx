import React, { Component } from 'react';
import PropTypes from 'prop-types';
import pretty from 'pretty';
import TabbedPanel from '@basalt/bedrock-tabbed-panel';

import { CodePreview } from './code-block.styles';

class CodeBlock extends Component {
  constructor(props) {
    super(props);
  }

  // @todo Setup code highlighting
  componentDidMount() {}

  render() {
    const items = this.props.items.map(item => {
      let handleTyping = () => {};
      let isLive = false;
      if (item.handleTyping) {
        handleTyping = item.handleTyping; // eslint-disable-line prefer-destructuring
        isLive = true;
      }

      return {
        title: item.name,
        id: item.language,
        children: (
          <CodePreview>
            <code
              onKeyUp={event => handleTyping(event.target.innerText)}
              contentEditable={isLive}
              suppressContentEditableWarning
              role="textbox"
              tabIndex={0}
              style={{
                whiteSpace: 'pre',
                overflow: 'auto',
                width: '100%',
              }}
            >
              {item.language === 'html'
                ? pretty(item.code.trim(), { ocd: true })
                : item.code.trim()}
            </code>
          </CodePreview>
        ),
      };
    });

    return <TabbedPanel bleed="0" color="component" items={items} />;
  }
}

CodeBlock.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      language: PropTypes.string,
      code: PropTypes.string.isRequired,
      handleTyping: PropTypes.func,
    }),
  ).isRequired,
};

export default CodeBlock;
