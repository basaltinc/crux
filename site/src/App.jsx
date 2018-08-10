import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import styled from 'styled-components';

import Header from './components/header';
import Footer from './components/footer';
import './global.css';
import ErrorCatcher from './bedrock/components/error-catcher';

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


export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  render() {
    return (
      <ErrorCatcher>
        <Router>
          <div>
            <Header siteTitle={'Crux'} />
            <SiteMain>
              <div>Sidebar Temp</div>
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
              <Footer></Footer>
            </SiteFooter>
          </div>
        </Router>
      </ErrorCatcher>
    );
  }
}
