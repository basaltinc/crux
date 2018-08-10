import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
// import Home from './Home';
// import ComponentsPage from './components';

const Home = props => <div>Home</div>;
const ComponentsPage = props => <div>ComponentsPage</div>;
// const About = props => <div>About</div>;
// const Topics = props => <div>Topics</div>;

const About = () => (
  <div>
    <h2>About</h2>
  </div>
);

const AboutThing = ({ match }) => (
  <div>
    <h2>AboutThing: {match.params.id}</h2>
  </div>
);

const Topics = ({ match }) => (
  <div>
    <h2>Topics</h2>
    <ul>
      <li>
        <Link to={`${match.url}/rendering`}>Rendering with React</Link>
      </li>
      <li>
        <Link to={`${match.url}/components`}>Components</Link>
      </li>
      <li>
        <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
      </li>
    </ul>

    <Route path={`${match.url}/:topicId`} component={Topic} />
    <Route
      exact
      path={match.url}
      render={() => <h3>Please select a topic.</h3>}
    />
  </div>
);

const Topic = ({ match }) => (
  <div>
    <h3>{match.params.topicId}</h3>
  </div>
);

const BasicExample = () => (
  <Router>
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/components">Components</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
          <ul>
            <li>
              <Link to="/about/evan">About Evan</Link>
            </li>
            <li>
              <Link to="/about/joe">About Joe</Link>
            </li>
          </ul>
        </li>
        <li>
          <Link to="/topics">Topics</Link>
        </li>
      </ul>

      <hr />

      <Route exact path="/" component={Home} />
      <Route path="/components" component={ComponentsPage} />
      <Route path="/about" component={About} />
      <Route path="/about/:id" component={AboutThing} />
      <Route path="/topics" component={Topics} />
    </div>
  </Router>
);

export default BasicExample;
