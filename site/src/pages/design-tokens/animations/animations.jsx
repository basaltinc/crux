import React from 'react';
import ApiDemo from '@basalt/bedrock-api-demo';
import { TwoUp, BlockQuoteWrapper } from '@basalt/bedrock-atoms';
import Spinner from '@basalt/bedrock-spinner';
import DosAndDonts from '@basalt/bedrock-dos-and-donts';
import Twig from '@basalt/bedrock-twig';
import { connectToContext, contextPropTypes } from '@basalt/bedrock-core';
import { DemoTransitionMove, DemoTransitionOpacity } from './animations.styles';

class AnimationsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      transitions: [], // eslint-disable-line react/no-unused-state
    };
    this.apiEndpoint = `${
      props.context.settings.config.apiUrlBase
    }/design-token/transitions`;
  }

  componentDidMount() {
    window
      .fetch(this.apiEndpoint)
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

          <BlockQuoteWrapper>
            Animation offers a medium of story telling and visual entertainment
            which can bring pleasure and information to people of all ages
            everywhere in the world.
            <footer>Walt Disney</footer>
          </BlockQuoteWrapper>
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
            <Twig
              template="@components/_media-tile.twig"
              data={{
                title: 'Hover this Media Tile',
                body:
                  'Hovering over this Media Tile will cause the opacity of the image overlay to transition to a more opaque color.',
                background_image:
                  'https://basalt-demo-data.netlify.com/basalt-brand-stock/julentto-photography-184055.jpg',
                url: '#',
                text_align: 'center',
                title_text_color: 'white',
                body_text_color: 'white',
              }}
            />
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
          title="Transitions API"
          endpoint={this.apiEndpoint}
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

AnimationsPage.propTypes = {
  context: contextPropTypes.isRequired,
};

export default connectToContext(AnimationsPage);
