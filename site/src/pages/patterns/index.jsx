import React, { Component } from 'react';

import ComponentBoard from '../../components/component-board';
import Page from '../../templates/page';
import { apiUrlBase } from '../../../config';

class PatternsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      patterns: [],
      ready: false,
    };
  }

  componentDidMount() {
    window
      .fetch(`${apiUrlBase}/patterns/components`)
      .then(res => res.json())
      .then(patterns => {
        this.setState({ patterns, ready: true });
      });
  }

  render() {
    return (
      <Page>
        <h2>Welcome to the Design System!</h2>
        <ComponentBoard
          patterns={this.state.patterns}
          ready={this.state.ready}
        />
      </Page>
    );
  }
}

export default PatternsPage;
