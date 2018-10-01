import React from 'react';
import PropTypes from 'prop-types';
import { convertColor, colorContrastTester } from '@basalt/bedrock-utils';
import { Details, Select } from '@basalt/bedrock-atoms';
import {
  ColorContrastPlayground,
  AccessibilityInfo,
  AccessabilityDropdowns,
  AccessibilityResults,
  LargeText,
  Ratio,
  SmallText,
  ColorBlock,
  ColorCompare,
  ContrastWrapper,
  ContrastInner,
  ColorContrast,
  Results,
  RowWrapper,
  Fade,
} from './color-contrast-block.styles';

class ColorContrastBlock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bgColor: 'white',
      textColor: 'black',
      contrast: {
        aa: '',
        aaa: '',
        aaaLarge: '',
        aaLarge: '',
        ratio: '',
      },
    };
    this.checkColorContrast = this.checkColorContrast.bind(this);
    // this.handleChange = this.handleChange.bind(this);
    // this.newColorContrast = this.newColorContrast.bind(this);
  }

  componentDidMount() {
    this.checkColorContrast();
  }

  checkColorContrast() {
    const bgValue = convertColor(this.state.bgColor, 'hex').slice(1);
    const txtValue = convertColor(this.state.textColor, 'hex').slice(1);

    const url = `https://webaim.org/resources/contrastchecker/?fcolor=${txtValue}&bcolor=${bgValue}&api`;

    window
      .fetch(url)
      .then(res => res.json())
      .then(results => {
        this.setState({
          contrast: {
            aa: results.AA,
            aaa: results.AAA,
            aaaLarge: results.AAALarge,
            aaLarge: results.AALarge,
            ratio: results.ratio,
          },
        });
      });
  }

  // newColorContrast(color, color2) {
  //   const bgValue = convertColor(color, 'hex').slice(1);
  //   const txtValue = convertColor(color2, 'hex').slice(1);
  //
  //   const url = `https://webaim.org/resources/contrastchecker/?fcolor=${txtValue}&bcolor=${bgValue}&api`;
  //
  //   window
  //     .fetch(url)
  //     .then(res => res.json())
  //     .then(results => results);
  // }

  render() {
    const colorBlocks = this.props.bgColors.map(color => (
      <ColorContrast key={color.value} color={color.value}>
        <ContrastInner key={color.name}>
          <h3>{color.name}</h3>
          <p className="col col--1">Ratio</p>
          <p className="col col--2">AA</p>
          <p className="col col--3">AAA</p>
          <p className="col col--4">AA Large</p>
          <p className="col col--5">AAA Large</p>
          <ColorBlock
            color={color.value}
            number={this.props.bgColors.length - 1}
          />
          <RowWrapper>
            {this.props.bgColors
              .filter(color2 => color2.value !== color.value)
              .map(color2 => (
                <ColorCompare
                  color={color.value}
                  key={color2.value}
                  color2={color2.value}
                  jk={color2}
                  // results={colorContrastTester(color.value, color2.value)}
                  // testing={colorContrastTester(color.value, color2.value)}
                >
                  {/* {console.log(colorContrastTester(color.value, color2.value))} */}
                  {/* {console.log()} */}
                  {/* {this.props.contrastResults.ratio} */}
                  <Fade color2={color2.value} />
                  <Results>10.9</Results>
                  <Results>Pass</Results>
                  <Results>Pass</Results>
                  <Results>Fail</Results>
                  <Results>Pass</Results>
                  {/* <Results>{results.ratio}</Results> */}
                  {/* <Results>{results.AAA}</Results> */}
                  {/* <Results>{results.AA}</Results> */}
                  {/* <Results>{results.AAALarge}</Results> */}
                  {/* <Results>{results.AALarge}</Results> */}
                </ColorCompare>
              ))}
          </RowWrapper>
        </ContrastInner>
      </ColorContrast>
    ));
    /* eslint-disable jsx-a11y/label-has-for */
    return (
      <div>
        <AccessabilityDropdowns>
          Background Color:
          {this.props.bgColors.length > 0 && (
            <Select
              value={this.state.bgColor}
              items={this.props.bgColors.map(color => ({
                value: color.value,
                key: color.name,
                title: color.name,
              }))}
              handleChange={value => {
                this.setState({ bgColor: value }, () =>
                  this.checkColorContrast(),
                );
              }}
            />
          )}
          Text Color:
          {this.props.textColors.length > 0 && (
            <Select
              value={this.state.textColor}
              items={this.props.textColors.map(color => ({
                value: color.value,
                key: color.name,
                title: color.name,
              }))}
              handleChange={value => {
                this.setState({ textColor: value }, () =>
                  this.checkColorContrast(),
                );
              }}
            />
          )}
        </AccessabilityDropdowns>
        <ColorContrastPlayground bgColor={this.state.bgColor}>
          <LargeText color={this.state.textColor}>
            Large Text looks like this
          </LargeText>
          <SmallText color={this.state.textColor}>
            small text looks like this
          </SmallText>
        </ColorContrastPlayground>
        <AccessibilityInfo>
          <p>
            WCAG AAA:{' '}
            <AccessibilityResults pass={this.state.contrast.aaa}>
              {this.state.contrast.aaa}
            </AccessibilityResults>
          </p>
          <p>
            WCAG AA:{' '}
            <AccessibilityResults pass={this.state.contrast.aa}>
              {this.state.contrast.aa}
            </AccessibilityResults>
          </p>
          <p>
            WCAG AAA (Large Text):{' '}
            <AccessibilityResults pass={this.state.contrast.aaaLarge}>
              {this.state.contrast.aaaLarge}
            </AccessibilityResults>
          </p>
          <p>
            WCAG AA (Large Text):{' '}
            <AccessibilityResults pass={this.state.contrast.aaLarge}>
              {this.state.contrast.aaLarge}
            </AccessibilityResults>
          </p>
          <p>
            WCAG Ratio:{' '}
            <Ratio ratio={this.state.contrast.ratio}>
              {this.state.contrast.ratio}
            </Ratio>
          </p>
        </AccessibilityInfo>
        <br />
        <Details>
          <summary>WCAG Details</summary>
          <p>
            <a href="https://www.w3.org/TR/WCAG20/" target="blank">
              WCAG 2.0
            </a>{' '}
            standards require a contrast ratio of greater than 4.5:1 for normal
            text and 3:1 for large text. For AAA standards, normal text ratio
            must be greater than 7:1 and large text ratio must be greater than
            4.5:1. Large text is defined as anything 14pt bold or higher.
          </p>
        </Details>
        <br />

        <ContrastWrapper>{colorBlocks}</ContrastWrapper>
      </div>
    );
  }
}

ColorContrastBlock.defaultProps = {};

ColorContrastBlock.propTypes = {
  bgColors: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
      comment: PropTypes.string.isRequired,
    }),
  ).isRequired,
  textColors: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
      comment: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default ColorContrastBlock;
