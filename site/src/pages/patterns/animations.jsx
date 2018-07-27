import React from 'react';

import PatternPage from '../../templates/pattern-page';
import './animations.css';
import { apiUrlBase } from '../../../config';

class AnimationsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      transitions: [],
    };
  }

  componentDidMount() {
    window
      .fetch(`${apiUrlBase}/transitions`)
      .then(res => res.json())
      .then(transitions => {
        this.setState({ transitions });
      });
  }

  render() {
    return (
      <PatternPage>
        <div className="body">
          <h4 className="eyebrow">Visual Language</h4>
          <h2>Animation</h2>
          <hr />
          <blockquote>
            Animation offers a medium of story telling and visual entertainment
            which can bring pleasure and information to people of all ages
            everywhere in the world. - Walt Disney
          </blockquote>
          <hr />
          <div className="demo-transition transition-opacity">
            <strong>Opacity</strong> (Hover to see effect)
          </div>
          <div className="demo-transition transition-move">
            <strong>Move</strong> (Hover to see effect)
          </div>

          <pre>
            <code>{JSON.stringify(this.state.transitions, null, '  ')}</code>
          </pre>
        </div>
      </PatternPage>
    );
  }
}

export default AnimationsPage;
