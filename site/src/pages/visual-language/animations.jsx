import React from 'react';
import styled from 'styled-components';

import { apiUrlBase } from '../../../config';
import VisualLanguagePage from '../../templates/visual-language-page';
import { TwoUp } from '../../bedrock/components/atoms';

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
          <h4>Purpose</h4>
          <p>Animation is a fundamental component of any visual language.</p>
          <ul>
            <li>
              <b>Focus</b> - Motion grabs the attention of the user and focuses
              it on important aspect of the user interface
            </li>
            <li>
              <b>Inform</b> - Animation informs the user in a number of ways.
              For example, a spinner indicates that the system is working.
            </li>
            <li>
              <b>Express</b> - Animation and motion are expressive and add
              character and brand identity to a user interface.
            </li>
          </ul>
          <br />
          <h4>Opacity</h4>
          <p>
            Changes to opacity are an effective way of indicating that an
            element can be interacted with through a click or key press.
          </p>
          <TwoUp>
            <DemoTransitionOpacity>
              <strong>Opacity</strong> (Hover to see effect)
            </DemoTransitionOpacity>
            <div
              className="media-tile u-text-align-center"
              data-linkto="#"
              style={{
                backgroundImage:
                  'url(https://basalt-demo-data.netlify.com/basalt-brand-stock/julentto-photography-184055.jpg)',
              }}
            >
              <div className="media-tile__content u-padding--l">
                <h2 className="media-tile__title u-c-white h2">
                  Consequatur et minima ea magni odio quis
                </h2>
                <div className="media-tile__body media-tile__body u-c-white">
                  Sit voluptate autem qui laudantium quo nisi voluptate nihil
                  vel. Soluta sequi minus aut nam quia ad dolorum hic omnis.
                  Debitis tempore aliquam est aliquid et aspernatur.
                </div>
              </div>
            </div>
          </TwoUp>
          <DemoTransitionMove>
            <strong>Move</strong> (Hover to see effect)
          </DemoTransitionMove>
          {/* <pre> */}
          {/* <code>{JSON.stringify(this.state.transitions, null, '  ')}</code> */}
          {/* </pre> */}
        </div>
      </VisualLanguagePage>
    );
  }
}

export default AnimationsPage;
