import React from 'react';

import VisualLanguagePage from '../../templates/visual-language-page';
import ColorSwatches from '../../bedrock/components/color-swatch';
import { apiUrlBase } from '../../../config';
import ColorContrastBlock from '../../bedrock/components/color-contrast-block';
import ApiDemo from '../../bedrock/components/api-demo';

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
      <VisualLanguagePage className="docs">
        <div className="body">
          <h4 className="eyebrow">Visual Language</h4>
          <h2>Colors</h2>
          <hr />
          <blockquote>
            Mere colour, unspoiled by meaning, and unallied with definite form,
            can speak to the soul in a thousand different ways. - Oscar Wilde
          </blockquote>
          <hr />
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
            Each color has a Sass variable and two utility classes. For example,
            $c-blue has : .u-c-blue for color and .u-bg-blue for
            background-color.
          </p>
          <ColorSwatches colors={this.state.colors} />
          <ColorContrastBlock
            bgColors={this.state.colors}
            textColors={this.state.colors}
          />
          <ApiDemo
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
                  default: 'hsl',
                },
              },
            }}
            requestType={'POST'}
          />
        </div>
      </VisualLanguagePage>
    );
  }
}

export default ColorsPage;
