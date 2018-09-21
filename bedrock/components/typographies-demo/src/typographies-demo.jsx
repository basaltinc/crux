import React from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import styled from 'styled-components';
import { image, paragraph, text, title } from '@basalt/demo-data';
import { BlockQuoteWrapper, DemoBlock } from '@basalt/bedrock-atoms';
import SmartGrid from '@basalt/bedrock-smart-grid';
import ApiDemo from '@basalt/bedrock-api-demo';
import Spinner from '@basalt/bedrock-spinner';
import { connectToContext, contextPropTypes } from '@basalt/bedrock-core';
import TabbedPanel from '@basalt/bedrock-tabbed-panel';

const CopyThisClipboard = styled(CopyToClipboard)`
  position: absolute;
  cursor: pointer;
  right: 20px;
`;

const TypographyChildrenDemoWrapper = styled.div`
  font-family: ${props => props.fontFamily};
  padding: ${props => props.theme.spacing.l} ${props => props.theme.spacing.l} 0;

  blockquote::first-line {
    font-weight: 800;
  }
  blockquote[contenteditable] {
    border-top: 1px dashed transparent;
    border-right: 1px dashed transparent;
    border-bottom: 1px dashed transparent;
    transition: ${props => props.theme.transition.all};
  }
  blockquote[contenteditable]:hover {
    border-top: 1px dashed ${props => props.theme.colors.neutral_light};
    border-right: 1px dashed ${props => props.theme.colors.neutral_light};
    border-bottom: 1px dashed ${props => props.theme.colors.neutral_light};
  }
  [contenteditable]:not(blockquote) {
    border: 1px dashed transparent;
    transition: ${props => props.theme.transition.all};
  }
  [contenteditable]:not(blockquote):hover {
    border: 1px dashed ${props => props.theme.colors.neutral_light};
  }
`;

const FontSizeDemo = styled.div`
  font-size: ${props => props.fontSize};
  border-bottom: ${props =>
    props.length !== props.index
      ? `1px dotted ${props.theme.colors.neutral_light}`
      : ''};
  padding-bottom: ${props =>
    props.length !== props.index ? props.theme.spacing.m : ''};
  margin-bottom: ${props =>
    props.length !== props.index ? props.theme.spacing.l : ''};

  blockquote::first-line {
    font-weight: 800;
  }
`;

const HeadingsDemo = styled.div`
  border-bottom: ${props =>
    props.length !== props.index
      ? `1px dotted ${props.theme.colors.neutral_light}`
      : ''};
  padding-bottom: ${props =>
    props.length !== props.index ? props.theme.spacing.l : ''};
  margin-bottom: ${props =>
    props.length !== props.index ? props.theme.spacing.l : ''};
`;

class TypographyPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ready: false,
      fontSizes: [],
      fontFamilies: [],
      demo: {
        image: image(),
        paragraph: paragraph(),
        text: text(),
        title: title(),
      },
    };
    this.apiEndpoint = `${
      props.context.settings.urls.apiUrlBase
    }/design-token/typography`;
  }

  componentDidMount() {
    window
      .fetch(this.apiEndpoint)
      .then(res => res.json())
      .then(({ fontSizes, fontFamilies }) => {
        this.setState({
          fontSizes,
          fontFamilies,
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
    ];
    /* eslint-disable react/no-unescaped-entities */
    /* eslint-disable jsx-a11y/no-noninteractive-element-interactions */

    const items = this.state.fontFamilies.map(fontFamily => ({
      title: fontFamily.comment,
      id: fontFamily.name,
      header: (
        <React.Fragment>
          <div>
            <code>{fontFamily.name}:</code> {fontFamily.value}
          </div>
          <CopyThisClipboard
            text={fontFamily.name}
            onCopy={() =>
              // @todo Have icon show copy was successful; remove `alert`
              window.alert(`${fontFamily.name} copied to clipboard`)
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
          </CopyThisClipboard>
        </React.Fragment>
      ),
      children: (
        <React.Fragment>
          <TypographyChildrenDemoWrapper fontFamily={fontFamily.value}>
            <p
              style={{
                fontSize: '1.5rem',
              }}
              contentEditable
              suppressContentEditableWarning
            >
              {this.state.demo.paragraph}
            </p>
            <blockquote
              style={{
                fontSize: '1.25rem',
              }}
              contentEditable
              suppressContentEditableWarning
            >
              {this.state.demo.paragraph}
            </blockquote>
            <SmartGrid row-items-large={2}>
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
            </SmartGrid>
          </TypographyChildrenDemoWrapper>
        </React.Fragment>
      ),
    }));

    return (
      <div className="body">
        <h4 className="eyebrow">Visual Language</h4>
        <h2>Typography</h2>
        <BlockQuoteWrapper>
          <strong>Typography is the voice of a brand.</strong> This set of
          typefaces best represent Basalt's brand attributes and personality.
          They should be used across all digital and print applications.
        </BlockQuoteWrapper>
        <DemoBlock>
          <h3>Font sizes</h3>
          <p>
            <strong>
              Go ahead, adjust the text below to see if the "shoe fits":
            </strong>
          </p>
          {this.state.fontSizes.map((fontSize, index) => (
            <FontSizeDemo
              key={fontSize.name}
              index={index + 1}
              length={this.state.fontSizes.length}
              fontSize={fontSize.value}
            >
              <code>{fontSize.name}</code>: {fontSize.value} <br />
              <blockquote contentEditable suppressContentEditableWarning>
                {this.state.demo.paragraph}
              </blockquote>
            </FontSizeDemo>
          ))}
        </DemoBlock>

        <DemoBlock>
          <h3>Font families</h3>
          <p>
            <strong>Available font families within Crux:</strong>
          </p>
          <TabbedPanel bleed="0" color="typography" items={items} />
        </DemoBlock>

        <DemoBlock>
          <h3>Headings</h3>
          <p>
            <strong>Headings within Crux:</strong>
          </p>
          {headings.map((item, index) => (
            <HeadingsDemo
              key={item.name}
              index={index + 1}
              length={headings.length}
              dangerouslySetInnerHTML={{
                __html: `<span class="eyebrow"><strong>H${index +
                  1}</strong> | Heading ${index + 1}</span> ${item.name}`,
              }}
            />
          ))}
        </DemoBlock>
        <br />
        <ApiDemo
          title="Typography API"
          endpoint={this.apiEndpoint}
          requestType="get"
        />
        <br />
      </div>
    );
  }
}

TypographyPage.propTypes = {
  context: contextPropTypes.isRequired,
};

export default connectToContext(TypographyPage);
