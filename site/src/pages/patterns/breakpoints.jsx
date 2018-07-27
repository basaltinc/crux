import React from 'react';

import PatternPage from '../../templates/pattern-page';

import { apiUrlBase } from '../../../config';

class BreakpointsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      breakpoints: [],
    };
  }

  componentDidMount() {
    window
      .fetch(`${apiUrlBase}/breakpoints`)
      .then(res => res.json())
      .then(breakpoints => {
        this.setState({ breakpoints });
      });
  }

  render() {
    return (
      <PatternPage className="docs">
        <div className="body">
          <h4 className="eyebrow">Visual Language</h4>
          <h2>Breakpoints</h2>
        </div>
      </PatternPage>
    );
  }
}

export default BreakpointsPage;
