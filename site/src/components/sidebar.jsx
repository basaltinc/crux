import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import LinkList from './link-list';
import { TypeToFilterWrapper } from '../bedrock/components/atoms';

const SidebarStyled = styled.aside`
  width: 10%;
  flex-grow: 0;
  flex-shrink: 0;
  min-width: 300px;
  max-width: 350px;
  padding: 2rem;
  border-right: solid 1px lightgrey;
  background-color: #f2f3f3;
  h4 {
    margin: 1.25rem 0 0.25rem;
  }
  ul {
    list-style: none;
    padding-left: 0;
    margin: 0;
  }
`;

const SidebarOneStyled = SidebarStyled.extend`
  order: -1;
  ${props =>
    props.sidebarOneOnTop
      ? `
    width: 100%;
    max-width: 100%;
    border-right: 0;
    border-bottom: solid 1px black;
    ul {
      display: flex;
      align-items: center;
      li {
        margin: 5px 5px 5px 0;
      }
      * {
        margin: 0;
      }
    }
  `
      : ''};
`;

const resourcesLinks = [
  {
    title: 'Branding',
    id: 'branding',
    isHeading: true,
  },
  {
    title: 'Logo Downloads',
    id: 'logo-downloads',
    path: `/resources/logo-downloads`,
  },
  {
    title: 'Logo Usage',
    id: 'logo-usage',
    path: '/resources/logo-usage',
  },
  {
    title: 'Photography Guidelines',
    id: 'photography-guidelines',
    path: '/resources/photography-guidelines',
  },
  {
    title: 'Brand Descriptors',
    id: 'brand-descriptors',
    path: '/resources/brand-descriptors',
  },
  {
    title: 'Sketch Assets',
    id: 'sketch',
    isHeading: true,
  },
  {
    title: 'Coming Soon...',
    id: 'coming-soon',
    path: '#',
  },
];

const perceptualPatternsLinks = [
  {
    title: 'Visual Language',
    id: 'visual',
    isHeading: true,
  },
  {
    title: 'Animations',
    id: 'AnimationsPage',
    path: `/visual-language/animations`,
  },
  {
    title: 'Breakpoints',
    id: 'BreakpointsPage',
    path: '/visual-language/breakpoints',
  },
  {
    title: 'Colors',
    id: 'ColorsPage',
    path: `/visual-language/colors`,
  },
  {
    title: 'Spacings',
    id: 'SpacingPage',
    path: '/visual-language/spacings',
  },
  {
    title: 'Typography',
    id: 'TypographyPage',
    path: '/visual-language/typography',
  },
];

const aboutLinks = [
  {
    title: 'About',
    id: 'heading',
    isHeading: true,
  },
  {
    path: '/about',
    title: 'Get Started',
    id: 'about',
  },
  {
    path: '/about/release-notes',
    title: 'Release Notes',
    id: 'release-notes',
  },
  {
    path: '/about/feature-requests',
    title: 'Feature Requests and Bugs',
    id: 'feature-requests',
  },
];

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sidebarOneOnTop: false,
      filterTerm: '',
      items : [],
      ready: false,
    };
  }

  static getDerivedStateFromProps(props, state) {
    return {
      items: [
        ...aboutLinks,
        ...perceptualPatternsLinks,
        {
          title: 'Patterns',
          id: 'patterns',
          isHeading: true,
        },
        ...props.patterns,
        ...resourcesLinks,
      ],
    };
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
      <SidebarOneStyled sidebarOneOnTop={this.state.sidebarOneOnTop}>
        <div>
          <TypeToFilterWrapper>
            <input
              type="text"
              className="type-to-filter"
              placeholder="Type to filter..."
              value={this.state.filterTerm}
              onChange={event =>
                this.setState({ filterTerm: event.target.value })
              }
            />
          </TypeToFilterWrapper>
          <LinkList items={items} basePath="/patterns/components/" />
        </div>
        <button
          className="button button--color-blue--light button--size-small"
          onClick={() =>
            this.setState({
              sidebarOneOnTop: !this.state.sidebarOneOnTop,
            })
          }
        >
          Toggle
        </button>
      </SidebarOneStyled>
    );
  }
}

Sidebar.defaultProps = {
  patterns: [],
};

Sidebar.propTypes = {
  patterns: PropTypes.arrayOf(
    // @todo pull in definition from `pattern-meta.schema.json`
    PropTypes.shape({
      title: PropTypes.string,
      id: PropTypes.string,
    }),
  ),
};

export default Sidebar;
