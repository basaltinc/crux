import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  TypeToFilter,
  TypeToFilterInputWrapper,
  ClearFilterButton,
} from '@basalt/bedrock-atoms';
import NavList from '../nav-list/nav-list';
import SecondaryNavItems from './secondary-nav-items.json';
import { apiUrlBase } from '../../../config';

const {
  resourcesLinks,
  perceptualPatternsLinks,
  aboutLinks,
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

  static getDerivedStateFromProps(props, state) {
    return state.items.length > 0
      ? state
      : {
          items: [
            ...perceptualPatternsLinks,
            {
              title: 'Patterns',
              id: 'patterns',
              path: '/patterns',
              isHeading: true,
            },
            ...props.patterns,
            {
              title: 'Examples',
              id: 'example-heading',
              isHeading: true,
              path: '/examples',
            },
            ...aboutLinks,
            ...resourcesLinks,
          ],
        };
  }

  componentDidMount() {
    window
      .fetch(`${apiUrlBase}/examples`)
      .then(res => res.json())
      .then(examples => {
        const exampleLinks = examples.map(example => ({
          id: example.id,
          title: example.title,
          path: `/examples/${example.id}`,
        }));

        this.setState({
          items: [
            ...perceptualPatternsLinks,
            {
              title: 'Patterns',
              id: 'patterns',
              path: '/patterns',
              isHeading: true,
            },
            ...this.props.patterns,
            {
              title: 'Examples',
              id: 'example-heading',
              isHeading: true,
              path: '/examples',
            },
            ...exampleLinks,
            ...aboutLinks,
            ...resourcesLinks,
          ],
        });
      });
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
        <NavList items={items} basePath="/patterns/components/" />
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
