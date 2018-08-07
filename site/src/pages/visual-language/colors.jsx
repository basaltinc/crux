import React from 'react';

import VisualLanguagePage from '../../templates/visual-language-page';
import ColorSwatches from '../../bedrock/components/color-swatch';
import DosAndDonts from '../../bedrock/components/dos-and-donts';
import { apiUrlBase } from '../../../config';
import ColorContrastBlock from '../../bedrock/components/color-contrast-block';
import exampleDo from '../../../../images/dos-and-donts/background-colors/background-colors-do.png';
import exampleDont from '../../../../images/dos-and-donts/background-colors/background-colors-dont.png';

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
          <DosAndDonts
            items={[
              {
                image: exampleDont,
                caption: 'use color combinations that fail WCAG standards.',
                do: false,
              },
              {
                title: 'Do Example',
                image: exampleDo,
                caption: 'use color combinations with distinct contrast that fulfill WCAG standards.',
                do: true,
              },
            ]}
          />
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
        </div>
      </VisualLanguagePage>
    );
  }
}

export default ColorsPage;
