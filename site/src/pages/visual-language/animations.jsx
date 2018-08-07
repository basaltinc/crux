import React from 'react';
import styled from 'styled-components';

import { apiUrlBase } from '../../../config';
import ApiDemo from '../../bedrock/components/api-demo';
import VisualLanguagePage from '../../templates/visual-language-page';

const DemoTransition = styled.div`
  background: #ddd;
  padding: 1em;
  margin-bottom: 1em;
  text-align: center;
  border-radius: 8px;
  cursor: pointer;
  max-width: 800px;
`;

const DemoTransitionOpacity = DemoTransition.extend`
  transition: opacity var(--transition-time) var(--transition-function);
  &:hover {
    opacity: 0;
  }
`;

const DemoTransitionMove = DemoTransition.extend`
  position: relative;
  &:after {
    content: '';
    display: inline-block;
    position: absolute;
    width: 3px;
    top: 0;
    left: 8px;
    bottom: 0;
    background: black;
    transition: left var(--transition-time) var(--transition-function);
  }
  &:hover:after {
    left: calc(100% - 8px);
  }
`;

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
      <VisualLanguagePage>
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
          <DemoTransitionOpacity>
            <strong>Opacity</strong> (Hover to see effect)
          </DemoTransitionOpacity>
          <DemoTransitionMove>
            <strong>Move</strong> (Hover to see effect)
          </DemoTransitionMove>
          {/* <pre> */}
          {/* <code>{JSON.stringify(this.state.transitions, null, '  ')}</code> */}
          {/* </pre> */}
        </div>
        <ApiDemo
          title={'API'}
          endpoint={`${apiUrlBase}/transitions`}
          querySchema=""
        />
      </VisualLanguagePage>
    );
  }
}

export default AnimationsPage;
