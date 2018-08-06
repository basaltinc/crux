import React, { Component } from 'react';

import ComponentBoard from '../../components/component-board';
import Page from '../../templates/page';
import { apiUrlBase } from '../../../config';
import LinkList from '../../components/link-list';

// @todo think of a way to not have these be hard coded, then implement that brilliant idea
const perceptualPatternsList = [
  {
    name: 'Colors',
    id: 'colors',
    path: `/visual-language/colors`,
  },
  {
    name: 'Animations',
    id: 'animations',
    path: `/visual-language/animations`,
  },
  {
    name: 'Spacings',
    id: 'spacings',
    path: '/visual-language/spacings',
  },
  {
    name: 'Breakpoints',
    id: 'breakpoints',
    path: '/visual-language/breakpoints',
  },
  {
    name: 'Typography',
    id: 'typography',
    path: '/visual-language/typography',
  },
];

class VisualLanguageLandingPage extends Component {
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
        <h2>Welcome to the Design System, Visual Language!</h2>
        <LinkList items={perceptualPatternsList} />
        <h3>Lets get a component board of visual language patterns</h3>
        <ComponentBoard
          patterns={this.state.patterns}
          ready={this.state.ready}
        />
      </Page>
    );
  }
}

export default VisualLanguageLandingPage;
