import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Page from './page';
import LinkList from '../components/link-list';
import { apiUrlBase } from '../../config'; // Pattern page specific styles

class PatternPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filteredList: [
        {
          name: 'Patterns',
          id: 'patterns',
          isHeading: true,
        },
      ],
      linkItems: [
        {
          name: 'Patterns',
          id: 'patterns',
          isHeading: true,
        },
      ],
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
            ...this.state.linkItems,
            ...patterns.map(pattern => ({
              name: pattern.title,
              id: pattern.id,
              path: pattern.path,
            })),
          ],
          filteredList: [
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

  handleFilterList(event) {
    const updatedList = this.state.linkItems.filter(
      item =>
        item.name.toLowerCase().search(event.target.value.toLowerCase()) !== -1 || item.isHeading,
    );
    this.setState({
      filteredList: updatedList,
      filterTerm: event.target.value,
    });
  }

  filterableList() {
    return (
      <div>
        <LinkList items={this.state.filteredList} />
        <input
          type="text"
          className="type-to-filter"
          placeholder="Type to filter..."
          onChange={this.handleFilterList}
        />
      </div>
    );
  }

  render() {
    return (
      <Page sidebarOne={this.filterableList()}>{this.props.children}</Page>
    );
  }
}

PatternPage.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PatternPage;
