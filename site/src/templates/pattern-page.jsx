import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Page from './page';
import LinkList from '../components/link-list';
import { apiUrlBase } from '../../config'; // Pattern page specific styles

// @todo think of a way to not have these be hard coded, then implement that brilliant idea
const perceptualPatternsList = [
  {
    name: 'Colors',
    id: 'colors',
    path: `/patterns/colors`,
  },
  {
    name: 'Animations',
    id: 'animations',
    path: `/patterns/animations`,
  },
  {
    name: 'Spacings',
    id: 'spacings',
    path: '/patterns/spacings',
  },
  {
    name: 'Breakpoints',
    id: 'breakpoints',
    path: '/patterns/breakpoints',
  },
  {
    name: 'Typography',
    id: 'typography',
    path: '/patterns/typography',
  },
  {
    name: 'Components',
    id: 'components',
    isHeading: true,
    path: '/patterns/components',
  },
];

class PatternPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      linkItems: perceptualPatternsList,
      ready: false,
    };
  }

  componentDidMount() {
    window
      .fetch(`${apiUrlBase}/patterns/components`)
      .then(res => res.json())
      .then(patterns => {
        console.log("JOLO",patterns);
        this.setState({
          linkItems: [
            ...this.state.linkItems,
            ...patterns.map(pattern => ({
              name: pattern.title,
              id: pattern.id,
              path: pattern.path,
            })),
          ],
        });
      });
  }

  render() {
    return (
      <Page sidebarOne={<LinkList items={this.state.linkItems} />}>
        {this.props.children}
      </Page>
    );
  }
}

PatternPage.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PatternPage;
