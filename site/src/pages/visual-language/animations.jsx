import React from 'react';
import styled from 'styled-components';

import { apiUrlBase } from '../../../config';
import ApiDemo from '../../bedrock/components/api-demo';
import { TwoUp } from '../../bedrock/components/atoms';
import Spinner from '../../bedrock/components/spinner';
import DosAndDonts from '../../bedrock/components/dos-and-donts';

const DemoTransition = styled.div`
  background: #ddd;
  padding: 1em;
  margin-bottom: 1em;
  text-align: center;
  border-radius: 0;
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
      transitions: [], // eslint-disable-line react/no-unused-state
    };
  }

  componentDidMount() {
    window
      .fetch(`${apiUrlBase}/transitions`)
      .then(res => res.json())
      .then(transitions => {
        this.setState({
          transitions, // eslint-disable-line react/no-unused-state
        });
      });
  }

  render() {
    return (
      <div>
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
                  Hover over this Media Tile
                </h2>
                <div className="media-tile__body media-tile__body u-c-white">
                  Hovering over this Media Tile will cause the opacity of the
                  image overlay to transition to a more opaque color.
                </div>
              </div>
            </div>
          </TwoUp>
          <br />
          <h4>Movement</h4>
          <p>
            Movement is an effective way to communicate actions, changes to
            application state, and draw the attention of a user.
          </p>
          <TwoUp>
            <DemoTransitionMove>
              <strong>Move</strong> (Hover to see effect)
            </DemoTransitionMove>
            <div>
              <h5>Loading Spinner Example</h5>
              <Spinner />
            </div>
          </TwoUp>
          <h4>Sass/Scss Variables</h4>
          <ul>
            <li>
              <code>$trans-opacity__time: 0.3s;</code>
            </li>
            <li>
              <code>$trans-opacity__function: ease-in;</code>
            </li>
            <li>
              <code>
                $trans-opacity: $trans-opacity__time $trans-opacity__function;
              </code>{' '}
              convenience variable for using both
            </li>
            <li>
              <code>$trans-move__time: 0.3s;</code>
            </li>
            <li>
              <code>$trans-move__function: ease-in;</code>
            </li>
            <li>
              <code>
                $trans-move: $trans-opacity__time $trans-move__function;
              </code>{' '}
              convenience variable for using both
            </li>
          </ul>
        </div>
        <br />
        <ApiDemo
          title="Animations API"
          endpoint={`${apiUrlBase}/transitions`}
          requestType="get"
        />
        <DosAndDonts
          items={[
            {
              image: '/assets/images/dos-and-donts/spinner/spinner-dont.png',
              caption: 'add text to the spinner.',
              do: false,
            },
            {
              title: 'Do Example',
              image: '/assets/images/dos-and-donts/spinner/spinner-do.png',
              caption: "let the spinner convey it's meaning.",
              do: true,
            },
          ]}
        />
      </div>
    );
  }
}

export default AnimationsPage;
