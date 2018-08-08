import React from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { image, paragraph, text, title } from '@basalt/demo-data';

import VisualLanguagePage from '../../templates/visual-language-page';
import Spinner from '../../bedrock/components/spinner';
import { apiUrlBase } from '../../../config';

import './demos.css';
import ApiDemo from '../../bedrock/components/api-demo';

class TypographyPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ready: false,
      fontSizes: [],
      fontFamilies: [],
      selectedFontFamily: '',
      demo: {
        image: image(),
        paragraph: paragraph(),
        text: text(),
        title: title(),
      },
    };
  }

  componentDidMount() {
    window
      .fetch(`${apiUrlBase}/font-sizes`)
      .then(res => res.json())
      .then(fontSizes => {
        this.setState({
          fontSizes,
          ready: true,
        });
      });
    window
      .fetch(`${apiUrlBase}/font-families`)
      .then(res => res.json())
      .then(fontFamilies => {
        this.setState({
          fontFamilies,
          selectedFontFamily: fontFamilies[0],
          ready: true,
        });
      });
  }

  render() {
    if (!this.state.ready) {
      return <Spinner />;
    }
    const headings = [
      {
        name: `<h1 contentEditable suppressContentEditableWarning>${
          this.state.demo.title
        }</h1>`,
      },
      {
        name: `<h2 contentEditable suppressContentEditableWarning>${
          this.state.demo.title
        }</h2>`,
      },
      {
        name: `<h3 contentEditable suppressContentEditableWarning>${
          this.state.demo.title
        }</h3>`,
      },
      {
        name: `<h4 contentEditable suppressContentEditableWarning>${
          this.state.demo.title
        }</h4>`,
      },
      {
        name: `<h5 contentEditable suppressContentEditableWarning>${
          this.state.demo.title
        }</h5>`,
      },
      {
        name: `<h6 contentEditable suppressContentEditableWarning>${
          this.state.demo.title
        }</h6>`,
      },
    ]; // For headings demo below
    /* eslint-disable react/no-unescaped-entities */
    /* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
    return (
      <VisualLanguagePage className="docs t-crux-typography">
        <div className="body">
          <h4 className="eyebrow">Visual Language</h4>
          <h2>Typography</h2>
          <blockquote>
            <strong>Typography is the voice of a brand.</strong> This set of
            typefaces best represent Basalt’s brand attributes and personality.
            They should be used across all digital and print applications.
          </blockquote>
          <hr />

          <div className="demo-block">
            <h3 className="demo-block__title">Font sizes</h3>
            <p>
              <strong>
                Go ahead, adjust the text below to see if the "shoe fits":
              </strong>
            </p>
            {this.state.fontSizes.map((fontSize, index) => (
              <div
                key={fontSize.name}
                style={{
                  fontSize: fontSize.value,
                  borderBottom: '1px dotted #CCC',
                  paddingBottom: '20px',
                  marginBottom:
                    this.state.fontSizes.length !== index + 1 ? '35px' : '',
                }}
              >
                <code>{fontSize.name}</code>: {fontSize.value} <br />
                <blockquote
                  className="demo-block__blockquote"
                  contentEditable
                  suppressContentEditableWarning
                >
                  {this.state.demo.paragraph}
                </blockquote>
              </div>
            ))}
          </div>

          <div className="demo-block t-crux-typography">
            <h3 className="demo-block__title">Font families</h3>
            <p>
              <strong>Available font families within Crux:</strong>
            </p>
            <ul className="demo-tabs">
              {this.state.fontFamilies.map(fontFamily => (
                <li
                  key={fontFamily.name}
                  onClick={() =>
                    this.setState({ selectedFontFamily: fontFamily })
                  }
                  className={
                    this.state.selectedFontFamily.name === fontFamily.name
                      ? 'demo-tabs__tab is-active'
                      : 'demo-tabs__tab'
                  }
                  style={{
                    fontFamily: fontFamily.value,
                  }}
                >
                  {fontFamily.comment ? fontFamily.comment : fontFamily.value}
                </li>
              ))}
            </ul>
            {this.state.selectedFontFamily && (
              <div
                className="demo-inner"
                style={{
                  fontFamily: this.state.selectedFontFamily.value,
                }}
              >
                <div
                  className="demo-vars"
                  style={{ display: 'flex', justifyContent: 'space-between' }}
                >
                  <div>
                    <code>{this.state.selectedFontFamily.name}</code>
                    {': '}
                    {this.state.selectedFontFamily.value}
                  </div>
                  <CopyToClipboard
                    text={this.state.selectedFontFamily.name}
                    onCopy={() =>
                      window.alert(
                        `${
                          this.state.selectedFontFamily.name
                        } copied to clipboard`,
                      )
                    }
                  >
                    <svg
                      width="26"
                      height="26"
                      viewBox="0 0 1792 1792"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M1696 384q40 0 68 28t28 68v1216q0 40-28 68t-68 28h-960q-40 0-68-28t-28-68v-288h-544q-40 0-68-28t-28-68v-672q0-40 20-88t48-76l408-408q28-28 76-48t88-20h416q40 0 68 28t28 68v328q68-40 128-40h416zm-544 213l-299 299h299v-299zm-640-384l-299 299h299v-299zm196 647l316-316v-416h-384v416q0 40-28 68t-68 28h-416v640h512v-256q0-40 20-88t48-76zm956 804v-1152h-384v416q0 40-28 68t-68 28h-416v640h896z" />
                    </svg>
                  </CopyToClipboard>
                </div>
                <div className="demo-stage">
                  <p
                    style={{
                      marginTop: '20px',
                      fontSize: '1.5rem',
                    }}
                    contentEditable
                    suppressContentEditableWarning
                  >
                    {this.state.demo.paragraph}
                  </p>
                  <blockquote
                    className="demo-block__blockquote"
                    style={{
                      fontSize: '1.25rem',
                    }}
                    contentEditable
                    suppressContentEditableWarning
                  >
                    {this.state.demo.paragraph}
                  </blockquote>
                  <div
                    className="smart-grid"
                    data-row-items-small="1"
                    data-row-items-medium="2"
                    style={{
                      marginTop: '30px',
                    }}
                  >
                    <ul contentEditable suppressContentEditableWarning>
                      <li>{this.state.demo.text}</li>
                      <li>{this.state.demo.title}</li>
                      <li>{this.state.demo.paragraph}</li>
                    </ul>
                    <ol contentEditable suppressContentEditableWarning>
                      <li>{this.state.demo.text}</li>
                      <li>{this.state.demo.title}</li>
                      <li>{this.state.demo.paragraph}</li>
                    </ol>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="demo-block">
            <h3 className="demo-block__title">Headings</h3>
            <p>
              <strong>Headings within Crux:</strong>
            </p>
            {headings.map((item, index) => (
              <div
                key={item.name}
                style={{
                  borderBottom:
                    headings.length !== index + 1 ? '1px dotted #CCC' : '',
                  paddingBottom: headings.length !== index + 1 ? '20px' : '',
                  marginBottom: headings.length !== index + 1 ? '35px' : '',
                }}
                dangerouslySetInnerHTML={{
                  __html: `<span class="eyebrow"><strong>H${index +
                    1}</strong> | Heading ${index + 1}</span> ${item.name}`,
                }}
              />
            ))}
          </div>
          <br />
          <ApiDemo
            title={'Font Sizes API'}
            endpoint={`${apiUrlBase}/font-sizes`}
            requestType={'get'}
          />
          <br />
          <ApiDemo
            title={'Font Families API'}
            endpoint={`${apiUrlBase}/font-families`}
            requestType={'get'}
          />
        </div>
      </VisualLanguagePage>
    );
  }
}

export default TypographyPage;
