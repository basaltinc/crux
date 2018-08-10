import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import styled from 'styled-components';

import Header from './components/header';
import Footer from './components/footer';
import './global.css';
import ErrorCatcher from './bedrock/components/error-catcher';
import { apiUrlBase } from '../config';
import { TypeToFilterWrapper } from './bedrock/components/atoms';
import LinkList from './components/link-list';

const Page1 = () => <div>ima Page1</div>;
const Page2 = () => <div>ima Page2</div>;

const SiteMain = styled.div`
  display: flex;
  justify-content: center;
  min-height: calc(100vh - 229px);
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

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      sidebarOneOnTop: false,
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
            <SiteMain>
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
              <Switch>
                <Route path="/page1" component={Page1} />
                <Route path="/page2" component={Page2} />
                <Route path="/page3" render={() => <div>ima Page3</div>} />
                <Route
                  path="/components/:id"
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
            </SiteMain>
            <SiteFooter>
              <Footer />
            </SiteFooter>
          </div>
        </Router>
      </ErrorCatcher>
    );
  }
}
