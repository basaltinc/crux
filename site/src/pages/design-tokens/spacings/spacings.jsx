import React from 'react';
import { BlockQuoteWrapper } from '@basalt/bedrock-atoms';

import ApiDemo from '@basalt/bedrock-api-demo';
import SpacingSwatches from '@basalt/bedrock-spacing-swatch';
import { connectToContext, contextPropTypes } from '@basalt/bedrock-core';

class SpacingPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      spacings: [],
    };
    this.apiEndpoint = `${
      this.props.context.settings.urls.apiUrlBase
    }/design-token/spacings`;
  }

  componentDidMount() {
    window
      .fetch(this.apiEndpoint)
      .then(res => res.json())
      .then(spacings => {
        this.setState({ spacings });
      });
  }

  render() {
    return (
      <div>
        <div className="body">
          <h4 className="eyebrow">Visual Language</h4>
          <h2>Spacing</h2>
          <BlockQuoteWrapper>
            Whitespace is like air: it is necessary for design to breathe.
            <footer>Wojciech Zieliński</footer>
          </BlockQuoteWrapper>
          <p>
            Space is a fundamental concept to any visual design language. Space
            and proximity are powerful conveyors of relationships. Like things
            belong together, unlike things should be apart.
          </p>
          <SpacingSwatches spaces={this.state.spacings} />
        </div>
        <br />
        <ApiDemo
          title="Spacing API"
          endpoint={this.apiEndpoint}
          requestType="get"
        />
      </div>
    );
  }
}

SpacingPage.propTypes = {
  context: contextPropTypes.isRequired,
};

export default connectToContext(SpacingPage);
