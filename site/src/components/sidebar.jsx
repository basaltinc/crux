import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { TextInputWrapper } from '@basalt/bedrock-atoms';
import { FaChevronLeft } from 'react-icons/fa';
import LinkList from './link-list';

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

const SidebarStyled = styled.aside`
  position: relative;
  display: flex;
  flex-shrink: 0;
  flex-direction: row;
  width: ${props => (props.sidebarCollapsed ? '50px' : '300px')};
  transition: 0.6s;
  h4 {
    white-space: nowrap;
    margin: 1.25rem 0 0;
  }
  ul {
    list-style: none;
    padding-left: 0;
    margin: 0;
  }
  a {
    white-space: nowrap;
  }
`;

const SidebarColumn = styled.div`
  position: relative;
  width: calc(100% - 19px);
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: #f2f3f3;
  padding: ${props => (props.sidebarCollapsed ? '25px' : '2rem')};
  transition: 0.6s;
  > * {
    left: ${props => (props.sidebarCollapsed ? '-300px' : '0')};
    opacity: ${props => (props.sidebarCollapsed ? '0' : '1')};
  }
`;

const SidebarTrayHandle = styled.div`
  position: absolute;
  right: 0;
  background-color: white;
  box-sizing: border-box;
  height: 100%;
  border-left: 1px solid lightgray;
  transition: all 0.3s;
  &:hover {
    border-left: solid 1px #e1c933;
    color: #e1c933;
    cursor: pointer;
  }
`;

const ToggleChevron = styled(FaChevronLeft)`
  //transition: 0.1s;
  margin-top: 50vh;
  ${props =>
    props.sidebarcollapsed === 'true'
      ? `
    transform: rotate(180deg);
    `
      : ``};
`;

const resourcesLinks = [
  {
    title: 'Resources',
    id: 'resources',
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
    title: 'Photo Guidelines',
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
    id: 'sketch-assets',
    path: '/resources/sketch-assets',
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
    title: 'Shadows',
    id: 'ShadowsPage',
    path: '/visual-language/shadows',
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
  {
    title: 'Icons',
    id: 'IconsPage',
    path: '/visual-language/icons',
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
    title: 'Requests & Bugs',
    id: 'feature-requests',
  },
  {
    path: '/playground/new',
    title: 'New Playground',
    id: 'new-playground',
  },
];

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sidebarCollapsed: props.isInitiallyCollapsed,
      filterTerm: '',
      items: [],
    };

    this.handleToggleClick = this.handleToggleClick.bind(this);
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
      ],
    };
  }

  componentDidUpdate(prevProps) {
    if (this.props.location.pathname !== prevProps.location.pathname) {
      this.handleFilterReset();
    }
  }

  handleToggleClick() {
    this.setState(prevState => ({
      sidebarCollapsed: !prevState.sidebarCollapsed,
    }));
  }

  handleFilterReset() {
    this.setState({
      filterTerm: '',
    });
  }

  render() {
    const isCollapsed = this.state.sidebarCollapsed;
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
      <SidebarStyled sidebarCollapsed={isCollapsed}>
        <SidebarColumn sidebarCollapsed={isCollapsed}>
          <TypeToFilter sidebarCollapsed={isCollapsed}>
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
        </SidebarColumn>
        <SidebarTrayHandle onClick={this.handleToggleClick}>
          <ToggleChevron sidebarcollapsed={isCollapsed.toString()} />
        </SidebarTrayHandle>
      </SidebarStyled>
    );
  }
}

Sidebar.defaultProps = {
  patterns: [],
  isInitiallyCollapsed: false,
};

Sidebar.propTypes = {
  isInitiallyCollapsed: PropTypes.bool,
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

export default Sidebar;
