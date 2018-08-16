import React from 'react';

import ApiDemo from '@basalt/bedrock-api-demo';
import SpacingSwatches from '../../components/spacing';
import { apiUrlBase } from '../../../config';

export default class SpacingPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      spacings: [],
    };
  }

  componentDidMount() {
    window
      .fetch(`${apiUrlBase}/spacings`)
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
          <hr />
          <blockquote>
            Whitespace is like air: it is necessary for design to breathe. –
            Wojciech Zieliński
          </blockquote>
          <hr />
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
          endpoint={`${apiUrlBase}/spacings`}
          requestType="get"
        />
      </div>
    );
  }
}
