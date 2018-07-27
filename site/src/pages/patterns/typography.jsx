import React from 'react';

import PatternPage from '../../templates/pattern-page';

import { apiUrlBase } from '../../../config';

class TypographyPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fontSizes: [],
      fontFamilies: [],
    };
  }

  componentDidMount() {
    window
      .fetch(`${apiUrlBase}/font-sizes`)
      .then(res => res.json())
      .then(fontSizes => {
        this.setState({ fontSizes });
      });
    window
      .fetch(`${apiUrlBase}/font-families`)
      .then(res => res.json())
      .then(fontFamilies => {
        this.setState({ fontFamilies });
      });
  }

  render() {
    return (
      <PatternPage className="docs">
        <div className="body">
          <h4 className="eyebrow">Visual Language</h4>
          <h2>Typography</h2>

          <pre><code>{JSON.stringify(this.state.fontSizes, null, '  ')}</code></pre>

          <pre><code>{JSON.stringify(this.state.fontFamilies, null, '  ')}</code></pre>

        </div>
      </PatternPage>
    );
  }
}

export default TypographyPage;
