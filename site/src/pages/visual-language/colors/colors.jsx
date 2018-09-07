import React from 'react';

import ColorSwatches from '@basalt/bedrock-color-swatch';
import DosAndDonts from '@basalt/bedrock-dos-and-donts';
import ColorContrastBlock from '@basalt/bedrock-color-contrast-block';
import ApiDemo from '@basalt/bedrock-api-demo';
import { BlockQuoteWrapper } from '@basalt/bedrock-atoms';
import { apiUrlBase } from '../../../../config';

class ColorsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      colors: [],
    };
  }

  componentDidMount() {
    window
      .fetch(`${apiUrlBase}/colors`)
      .then(res => res.json())
      .then(colors => {
        this.setState({ colors });
      });
  }

  render() {
    return (
      <div className="docs">
        <div className="body">
          <h4 className="eyebrow">Visual Language</h4>
          <h2>Colors</h2>
          <BlockQuoteWrapper>
            Mere colour, unspoiled by meaning, and unallied with definite form,
            can speak to the soul in a thousand different ways.
            <footer>Oscar Wilde</footer>
          </BlockQuoteWrapper>
          <br />
          <p>
            Color is a defining element of any strong brand identity. Dedicated
            use of the Basalt palette with reinforce the cohesiveness of the
            brand and visually communicates your brand personality with your
            audience.
          </p>
          <p>
            The Basalt palette is a 5 color structure that contains two light
            tones, two dark tones and a brighter spot color. Together they
            channel natural elements while staying energetic and active creating
            balance and speaking to the Basalt brand story.
          </p>
          <p>
            Each color has a Sass variable and two utility classes. For example
            <code>$c-blue</code> has <code>.u-c-blue</code> for color and{' '}
            <code>.u-bg-blue</code> for background-color.
          </p>
          <br />
          <h4>Color Palette</h4>
          <p>
            The following colors make up the primary color palette of the Basalt
            brand.
          </p>
          <ColorSwatches colors={this.state.colors} />
          <br />
          <h4>Colors and Accessibility</h4>
          <p>
            Color contrast (the difference between text and background color) is
            an important aspect of accessibility standards. Text color and
            background color need to have a high enough contrast ratio to be
            readable. Test out various color combinations below to see what does
            and doesn&#39;t meet accessibility standards.
          </p>
          <ColorContrastBlock
            bgColors={this.state.colors}
            textColors={this.state.colors}
            do={this.state.do}
          />
          <ApiDemo
            title="Colors API"
            endpoint={`${apiUrlBase}/colors`}
            queryData={{
              format: 'hsl',
            }}
            querySchema={{
              type: 'object',
              required: ['format'],
              properties: {
                format: {
                  title: 'Color Format',
                  type: 'string',
                  enum: ['hsl', 'hex', 'rgb'],
                  enumNames: [
                    'HSL (Hue, Saturation, Lightness)',
                    'Hex (Hexadecimal)',
                    'RGB (Red, Green, Blue)',
                  ],
                  default: 'hsl',
                  'ui:widget': 'radio',
                },
              },
            }}
            requestType="get"
          />
        </div>
        <DosAndDonts
          items={[
            {
              image:
                '/assets/images/dos-and-donts/background-colors/background-colors-dont.png',
              caption:
                'use color combinations with low color contrast that fail WCAG standards.',
              do: false,
            },
            {
              title: 'Do Example',
              image:
                '/assets/images/dos-and-donts/background-colors/background-colors-do.png',
              caption:
                'use color combinations with distinct contrast that fulfill WCAG standards.',
              do: true,
            },
          ]}
        />
      </div>
    );
  }
}

export default ColorsPage;
