import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { TextInputWrapper } from '@basalt/bedrock-atoms';
import LinkList from './link-list';
import SecondaryNavItems from './secondary-nav-items.json';

const TypeToFilterInputWrapper = TextInputWrapper.extend`
  display: flex;
`;

const TypeToFilter = styled.div`
  > .eyebrow {
    margin-top: 0;
    font-weight: bold;
  }
  position: relative;
  margin-bottom: 2rem;
`;

const ClearFilterButton = styled.div`
  border: solid 1px lightgrey;
  border-left: none;
  background-color: white;
  height: 33px;
  width: 33px;
  flex-shrink: 0;
  display: ${props => (props.isVisible ? 'flex' : 'none')};
  justify-content: center;
  align-items: center;
  &:hover {
    cursor: pointer;
  }
  > i {
    opacity: 0.5;
  }
`;

const {
  resourcesLinks,
  perceptualPatternsLinks,
  aboutLinks,
  exampleLinks,
} = SecondaryNavItems;

class SecondaryNav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filterTerm: '',
      items: [],
    };
    this.handleFilterReset = this.handleFilterReset.bind(this);
  }

  static getDerivedStateFromProps(props) {
    return {
      items: [
        ...perceptualPatternsLinks,
        {
          title: 'Patterns',
          id: 'patterns',
          isHeading: true,
        },
        ...props.patterns,
        ...resourcesLinks,
        ...aboutLinks,
        ...exampleLinks,
      ],
    };
  }

  componentDidUpdate(prevProps) {
    if (this.props.location.pathname !== prevProps.location.pathname) {
      this.handleFilterReset();
    }
  }

  handleFilterReset() {
    this.setState({
      filterTerm: '',
    });
  }

  render() {
    const items =
      this.state.filterTerm === ''
        ? this.state.items
        : this.state.items.filter(item => {
            if (item.isHeading) return true;
            return (
              item.title
                .toLowerCase()
                .search(this.state.filterTerm.toLowerCase()) !== -1
            );
          });
    return (
      <div>
        <TypeToFilter>
          <h4 className="eyebrow">Filter List</h4>
          <TypeToFilterInputWrapper>
            <input
              type="text"
              className="type-to-filter"
              placeholder="Type to filter..."
              value={this.state.filterTerm}
              onChange={event =>
                this.setState({ filterTerm: event.target.value })
              }
            />
            <ClearFilterButton
              role="button"
              onClick={this.handleFilterReset}
              onKeyPress={this.handleFilterReset}
              isVisible={!!this.state.filterTerm}
            >
              <i className="icon--close" />
            </ClearFilterButton>
          </TypeToFilterInputWrapper>
        </TypeToFilter>
        <LinkList items={items} basePath="/patterns/components/" />
      </div>
    );
  }
}

export default SecondaryNav;

SecondaryNav.defaultProps = {
  patterns: [],
};

SecondaryNav.propTypes = {
  // eslint-disable-next-line react/no-unused-prop-types
  patterns: PropTypes.arrayOf(
    // @todo pull in definition from `pattern-meta.schema.json`
    PropTypes.shape({
      title: PropTypes.string,
      id: PropTypes.string,
    }),
  ),
  location: PropTypes.shape({
    pathname: PropTypes.string,
  }).isRequired,
};
