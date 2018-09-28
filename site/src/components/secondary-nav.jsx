import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  TypeToFilter,
  TypeToFilterInputWrapper,
  ClearFilterButton,
} from '@basalt/bedrock-atoms';
import { connectToContext, contextPropTypes } from '@basalt/bedrock-core';
import { flattenArray } from '@basalt/bedrock-utils';
import NavList from '@basalt/bedrock-nav-list';
import urlJoin from 'url-join';

class SecondaryNav extends Component {
  static prepSectionLinks(sections) {
    return flattenArray(
      sections.map(section => [
        {
          title: section.title,
          id: section.id,
          isHeading: true,
        },
        ...section.items,
      ]),
    );
  }

  constructor(props) {
    super(props);
    this.state = {
      filterTerm: '',
      items: [],
    };
    this.apiEndpoint = `${props.context.settings.urls.apiUrlBase}`;
    this.handleFilterReset = this.handleFilterReset.bind(this);
  }

  componentDidMount() {
    window
      .fetch(`${this.apiEndpoint}/examples`)
      .then(res => res.json())
      .then(examples => {
        const exampleLinks = examples.map(example => ({
          id: example.id,
          title: example.title,
          path: `/examples/${example.id}`,
        }));

        this.setState({
          items: [
            {
              title: 'Design Tokens',
              id: 'design-tokens',
              path: '/design-tokens',
              isHeading: true,
            },
            ...this.props.context.designTokens,
            {
              title: 'Patterns',
              id: 'patterns',
              path: '/patterns',
              isHeading: true,
            },
            {
              title: '+ add new pattern',
              id: 'new-pattern',
              path: '/new-pattern',
            },
            ...this.props.context.patterns.map(pattern => ({
              id: pattern.id,
              title: pattern.meta.title,
              path: urlJoin('/patterns', pattern.id),
            })),
            {
              title: 'Examples',
              id: 'example-heading',
              isHeading: true,
              path: '/examples',
            },
            ...exampleLinks,
            ...SecondaryNav.prepSectionLinks(this.props.context.sections),
          ],
        });
      })
      .catch(err => {
        console.error(err);
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
        <NavList items={items} />
      </div>
    );
  }
}

SecondaryNav.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string,
  }).isRequired,
  context: contextPropTypes.isRequired,
};

export default connectToContext(SecondaryNav);
