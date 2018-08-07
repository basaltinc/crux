import React from 'react';

import { image, paragraph, text, title } from '@basalt/demo-data';

import PatternPage from '../../templates/pattern-page';
import Spinner from '../../bedrock/components/spinner';
import copyIcon from '../../../../images/svgs/copy.svg';
import { apiUrlBase } from '../../../config';

import './demos.css';
import ApiDemo from "../../bedrock/components/api-demo";

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
      { name: `<h1 contentEditable>${this.state.demo.title}</h1>` },
      { name: `<h2 contentEditable>${this.state.demo.title}</h2>` },
      { name: `<h3 contentEditable>${this.state.demo.title}</h3>` },
      { name: `<h4 contentEditable>${this.state.demo.title}</h4>` },
      { name: `<h5 contentEditable>${this.state.demo.title}</h5>` },
      { name: `<h6 contentEditable>${this.state.demo.title}</h6>` },
    ]; // For headings demo below
    /* eslint-disable react/no-unescaped-entities */
    /* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
    return (
      <PatternPage className="docs t-crux-typography">
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
                style={{
                  fontSize: fontSize.value,
                  borderBottom: '1px dotted #CCC',
                  paddingBottom: '20px',
                  marginBottom:
                    this.state.fontSizes.length !== index + 1 ? '35px' : '',
                }}
              >
                <code>{fontSize.name}</code>: {fontSize.value} <br />
                <blockquote className="demo-block__blockquote" contentEditable>
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
                <div className="demo-vars">
                  <div className="copy-this">
                    <img src={copyIcon} alt="Copy" title="Copy!" />
                  </div>
                  <code>{this.state.selectedFontFamily.name}</code>
                  {': '}
                  {this.state.selectedFontFamily.value}
                </div>
                <div className="demo-stage">
                  <p
                    style={{
                      marginTop: '20px',
                      fontSize: '1.5rem',
                    }}
                    contentEditable
                  >
                    {this.state.demo.paragraph}
                  </p>
                  <blockquote
                    className="demo-block__blockquote"
                    style={{
                      fontSize: '1.25rem',
                    }}
                    contentEditable
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
                    <ul contentEditable>
                      <li>{this.state.demo.text}</li>
                      <li>{this.state.demo.title}</li>
                      <li>{this.state.demo.paragraph}</li>
                    </ul>
                    <ol contentEditable>
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
          <ApiDemo
            title={'Font Sizes API'}
            endpoint={`${apiUrlBase}/font-sizes`}
            querySchema=''
          />
          <ApiDemo
            title={'Font Families API'}
            endpoint={`${apiUrlBase}/font-families`}
            querySchema=''
          />
        </div>
      </PatternPage>
    );
  }
}

export default TypographyPage;
