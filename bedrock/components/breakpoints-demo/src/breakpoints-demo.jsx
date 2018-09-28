import React from 'react';
import ApiDemo from '@basalt/bedrock-api-demo';
import BreakpointsChart from '@basalt/bedrock-breakpoints-chart';
import { connectToContext, contextPropTypes } from '@basalt/bedrock-core';

class BreakpointsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      breakpoints: [],
    };
    this.apiEndpoint = `${
      props.context.settings.urls.apiUrlBase
    }/design-token/breakpoints`;
  }

  componentDidMount() {
    window
      .fetch(this.apiEndpoint)
      .then(res => res.json())
      .then(breakpoints => {
        this.setState({ breakpoints });
      });
  }

  render() {
    console.log(this.state.breakpoints);
    return (
      <div className="docs">
        <h4 className="eyebrow">Visual Language</h4>
        <h2>Breakpoints</h2>
        <BreakpointsChart breakpoints={this.state.breakpoints} />
        <br />
        <ApiDemo
          title="Breakpoints API"
          endpoint={this.apiEndpoint}
          requestType="get"
        />
      </div>
    );
  }
}

BreakpointsPage.propTypes = {
  context: contextPropTypes.isRequired,
};

export default connectToContext(BreakpointsPage);
