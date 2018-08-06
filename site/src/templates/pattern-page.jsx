import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Page from './page';
import LinkList from '../components/link-list';
import { apiUrlBase } from '../../config'; // Pattern page specific styles

// @todo think of a way to not have these be hard coded, then implement that brilliant idea
const perceptualPatternsList = [
  // {
  //   name: 'Colors',
  //   id: 'colors',
  //   path: `/patterns/colors`,
  // },
  // {
  //   name: 'Animations',
  //   id: 'animations',
  //   path: `/patterns/animations`,
  // },
  // {
  //   name: 'Spacings',
  //   id: 'spacings',
  //   path: '/patterns/spacings',
  // },
  // {
  //   name: 'Breakpoints',
  //   id: 'breakpoints',
  //   path: '/patterns/breakpoints',
  // },
  // {
  //   name: 'Typography',
  //   id: 'typography',
  //   path: '/patterns/typography',
  // },
  // {
  //   name: 'Components',
  //   id: 'components',
  //   isHeading: true,
  //   path: '/patterns/components',
  // },
];

class PatternPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filteredList: [],
      linkItems: [],
      ready: false,
    };

    this.handleFilterList = this.handleFilterList.bind(this);
    this.filterableList = this.filterableList.bind(this);
  }

  componentDidMount() {
    window
      .fetch(`${apiUrlBase}/patterns/components`)
      .then(res => res.json())
      .then(patterns => {
        this.setState({
          linkItems: [
            ...patterns.map(pattern => ({
              name: pattern.title,
              id: pattern.id,
              path: pattern.path,
            })),
          ],
          filteredList: [
            ...patterns.map(pattern => ({
              name: pattern.title,
              id: pattern.id,
              path: pattern.path,
            })),
          ],
        });
      });
  }

  handleFilterList(event) {
    const updatedList = this.state.linkItems.filter(
      item =>
        item.name.toLowerCase().search(event.target.value.toLowerCase()) !== -1,
    );
    this.setState({ filteredList: updatedList, filterTerm: event.target.value });
  }

  filterableList() {
    return (
      <div>
        <input
          type="text"
          className="type-to-filter"
          placeholder="Type to filter..."
          onChange={this.handleFilterList}
        />
        <LinkList items={this.state.filteredList} />
      </div>
    );
  }

  render() {
    return <Page sidebarOne={this.filterableList()} />;
  }
}

PatternPage.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PatternPage;
