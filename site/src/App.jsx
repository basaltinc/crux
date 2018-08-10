import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

const Page1 = () => <div>ima Page1</div>;
const Page2 = () => <div>ima Page2</div>;

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  render() {
    return (
      <Router>
        <div>
          <header
            style={{
              border: 'solid 1px blue',
              padding: '5px',
            }}
          >
            <Link to={'/page1'}>Page 1</Link>
            <Link to={'/page2'}>Page 2</Link>
            <Link to={'/page3'}>Page 3</Link>
          </header>
          <article
            style={{
              border: 'solid 1px green',
              padding: '5px',
            }}
          >
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
          </article>
        </div>
      </Router>
    );
  }
}
