import React, { Component } from 'react';
import styled from 'styled-components';

import Spinner from '@basalt/bedrock-spinner';
import ComponentBoard from '../../components/component-board';
import { apiUrlBase } from '../../../config';

const PatternsHeader = styled.div`
  margin-left: 50px;
`;

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
      .fetch(`${apiUrlBase}/patterns/component`)
      .then(res => res.json())
      .then(patterns => {
        this.setState({ patterns, ready: true });
      });
  }

  render() {
    if (!this.state.ready) {
      return <Spinner />;
    }
    return (
      <div>
        <PatternsHeader>
          <h2>Patterns</h2>
          <p>
            Explore the design patterns that make up the Crux Design System.
          </p>
        </PatternsHeader>
        <ComponentBoard patterns={this.state.patterns} />
      </div>
    );
  }
}

export default PatternsPage;
