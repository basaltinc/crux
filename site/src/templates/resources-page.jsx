import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Page from './page';
import LinkList from '../components/link-list';
// import { apiUrlBase } from '../../config'; // Pattern page specific styles

// @todo think of a way to not have these be hard coded, then implement that brilliant idea
const resourcesList = [
  {
    name: 'Branding',
    id: 'branding',
    isHeading: true,
  },
  {
    name: 'Logo Downloads',
    id: 'logo-downloads',
    path: `/resources/logo-downloads`,
  },
  {
    name: 'Logo Usage',
    id: 'logo-usage',
    path: '/resources/logo-usage',
  },
  {
    name: 'Photography Guidelines',
    id: 'photography-guidelines',
    path: '/resources/photography-guidelines',
  },
  {
    name: 'Brand Descriptors',
    id: 'brand-descriptors',
    path: '/resources/brand-descriptors',
  },
  {
    name: 'Sketch Assets',
    id: 'sketch',
    isHeading: true,
  },
];

class ResourcesPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filteredList: [...resourcesList],
      linkItems: [...resourcesList],
      ready: false,
    };

    this.handleFilterList = this.handleFilterList.bind(this);
    this.filterableList = this.filterableList.bind(this);
  }

  handleFilterList(event) {
    const updatedList = this.state.linkItems.filter(
      item =>
        item.name.toLowerCase().search(event.target.value.toLowerCase()) !==
          -1 || item.isHeading,
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

ResourcesPage.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ResourcesPage;
