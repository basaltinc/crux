import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Page from './page';
import LinkList from '../components/link-list';
import { TypeToFilterWrapper } from '../bedrock/components/atoms';
// import { apiUrlBase } from '../../config'; // Pattern page specific styles

// @todo think of a way to not have these be hard coded, then implement that brilliant idea
const perceptualPatternsList = [
  {
    name: 'Visual Language',
    id: 'visual',
    isHeading: true,
  },
  {
    name: 'Animations',
    id: 'animations',
    path: `/visual-language/animations`,
  },
  {
    name: 'Breakpoints',
    id: 'breakpoints',
    path: '/visual-language/breakpoints',
  },
  {
    name: 'Colors',
    id: 'colors',
    path: `/visual-language/colors`,
  },
  {
    name: 'Spacings',
    id: 'spacings',
    path: '/visual-language/spacings',
  },
  {
    name: 'Typography',
    id: 'typography',
    path: '/visual-language/typography',
  },
];

class VisualLanguagePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filteredList: [...perceptualPatternsList],
      linkItems: [...perceptualPatternsList],
      ready: false,
    };

    this.handleFilterList = this.handleFilterList.bind(this);
    this.filterableList = this.filterableList.bind(this);
  }

  componentDidMount() {
    // @todo Connect to a proper visual lang api endpoint
    // window
    //   .fetch(`${apiUrlBase}/patterns/components`)
    //   .then(res => res.json())
    //   .then(patterns => {
    //     this.setState({
    //       linkItems: [
    //         ...this.state.linkItems,
    //         ...patterns.map(pattern => ({
    //           name: pattern.title,
    //           id: pattern.id,
    //           path: pattern.path,
    //         })),
    //       ],
    //       filteredList: [
    //         ...this.state.linkItems,
    //         ...patterns.map(pattern => ({
    //           name: pattern.title,
    //           id: pattern.id,
    //           path: pattern.path,
    //         })),
    //       ],
    //     });
    //   });
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
        <TypeToFilterWrapper>
          <input
            type="text"
            className="type-to-filter"
            placeholder="Type to filter..."
            onChange={this.handleFilterList}
          />
        </TypeToFilterWrapper>
        <LinkList items={this.state.filteredList} />
      </div>
    );
  }

  render() {
    return (
      <Page sidebarOne={this.filterableList()}>{this.props.children}</Page>
    );
  }
}

VisualLanguagePage.propTypes = {
  children: PropTypes.node.isRequired,
};

export default VisualLanguagePage;
