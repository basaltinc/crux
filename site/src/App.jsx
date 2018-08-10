import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import styled from 'styled-components';

import Header from './components/header';
import Footer from './components/footer';
import './global.css';
import ErrorCatcher from './bedrock/components/error-catcher';
import { apiUrlBase } from '../config';
import { TypeToFilterWrapper } from './bedrock/components/atoms';
import LinkList from './components/link-list';

const Site = styled.div`
  display: flex;
  justify-content: center;
  min-height: calc(100vh - 229px);
  width: 100%;
`;

const MainContent = styled.div`
  flex-grow: 1;
`;

const SiteFooter = styled.div`
  background-color: #16394b;
  color: white;
  && a {
    color: white;
  }
`;

const SidebarStyled = styled.div`
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
  {
    name: 'Coming Soon...',
    id: 'coming-soon',
    path: '#',
  },
];
const perceptualPatternsLinks = [
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
const aboutLinks = [
  {
    name: 'About',
    id: 'heading',
    isHeading: true,
  },
  {
    path: '/about',
    name: 'Get Started',
    id: 'about',
  },
  {
    path: '/about/release-notes',
    name: 'Release Notes',
    id: 'release-notes',
  },
  {
    path: '/about/feature-requests',
    name: 'Feature Requests and Bugs',
    id: 'feature-requests',
  },
];

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      sidebarOneOnTop: false,
      filteredList: aboutLinks
        .concat(perceptualPatternsLinks)
        .concat([
          {
            name: 'Patterns',
            id: 'patterns',
            isHeading: true,
          },
        ])
        .concat(resourcesLinks),
      linkItems: aboutLinks
        .concat(perceptualPatternsLinks)
        .concat([
          {
            name: 'Patterns',
            id: 'patterns',
            isHeading: true,
          },
        ])
        .concat(resourcesLinks),
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
          filteredList: aboutLinks
            .concat(perceptualPatternsLinks)
            .concat([
              {
                name: 'Patterns',
                id: 'patterns',
                isHeading: true,
              },
            ])
            .concat(
              ...patterns.map(pattern => ({
                name: pattern.title,
                id: pattern.id,
                path: pattern.path,
              })),
            )
            .concat(resourcesLinks),
          linkItems: aboutLinks
            .concat(perceptualPatternsLinks)
            .concat([
              {
                name: 'Patterns',
                id: 'patterns',
                isHeading: true,
              },
            ])
            .concat(
              ...patterns.map(pattern => ({
                name: pattern.title,
                id: pattern.id,
                path: pattern.path,
              })),
            )
            .concat(resourcesLinks),
        });
      });
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
      <ErrorCatcher>
        <Router>
          <div>
            <Header siteTitle={'Crux'} />
            <Site>
              <SidebarOneStyled {...this.state}>
                {this.filterableList()}
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
              <MainContent>
                <Switch>
                  <Route
                    path="/patterns/components/:id"
                    render={({ match }) => (
                      <h3>ima component page {match.params.id}</h3>
                    )}
                  />
                  <Route
                    render={() => (
                      <div>
                        <h3>Page Not Found ¯\_(ツ)_/¯</h3>
                      </div>
                    )}
                  />
                </Switch>
              </MainContent>
            </Site>
            <SiteFooter>
              <Footer />
            </SiteFooter>
          </div>
        </Router>
      </ErrorCatcher>
    );
  }
}
