import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import SchemaForm from '@basalt/bedrock-schema-form';
import { Select } from '@basalt/bedrock-atoms';
import Twig from './twig';
import CodeBlock from './code-block';

const sizes = [
  {
    value: 's',
    title: 'Small',
  },
  {
    value: 'm',
    title: 'Medium',
  },
  {
    value: 'l',
    title: 'Large',
  },
  {
    value: 'full',
    title: 'Full',
  },
];

const OverviewWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  ${({ fullScreen }) =>
    fullScreen &&
    `
      position: fixed;
      background-color: white;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      z-index: 10000;
      height: 100vh;
  `};
`;

const DemoStage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1.5rem;
  background-image: linear-gradient(45deg, hsl(0, 0%, 90%) 25%, transparent 25%),
    linear-gradient(-45deg, hsl(0, 0%, 90%) 25%, transparent 25%),
    linear-gradient(45deg, transparent 75%, hsl(0, 0%, 90%) 75%),
    linear-gradient(-45deg, transparent 75%, hsl(0, 0%, 90%) 75%);
  background-size: 20px 20px;
  background-position: 0 0, 0 10px, 10px -10px, -10px 0px;
  width: 100%;
  @media (min-width: 900px) {
    width: ${({ size }) => {
      switch (size) {
        case 's':
          return '33%';
        case 'm':
          return '50%';
        case 'l':
          return '67%';
        default:
          return '100%';
      }
    }};
  }
`;

const Resizable = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  resize: horizontal;
  overflow: hidden;
  padding: 10px;
  width: 100%;
  max-width: ${props => props.size || '100%'};
  background-color: rgba(77, 77, 77, 0.15);
  &:hover:after {
    position: absolute;
    content: 'Resize';
    bottom: 0;
    right: 5px;
    font-size: 14px;
    font-weight: 700;
  }
`;

const DemoGrid = styled.div`
  display: block;
  position: relative;
  flex-grow: 1;
  @media (min-width: 900px) {
    display: ${props => (props.size === 'full' ? 'block' : 'flex')};
  }
`;

const FlexWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const DemoGridControls = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-bottom: 1.5rem;
  > * {
    margin-bottom: 0;
  }
  .button {
    min-height: 33px;
  }
`;

const SchemaFormWrapper = styled.div`
  display: ${props => (props.showForm ? 'flex' : 'none')};
  justify-content: center;
  overflow: auto;
  border: dotted 1px #ccc;
  position: relative;
  padding: 0.5rem;
  width: 100%;
  @media (min-width: 900px) {
    width: ${({ size }) => {
      switch (size) {
        case 's':
          return '67%';
        case 'm':
          return '50%';
        case 'l':
          return '33%';
        default:
          return '100%';
      }
    }};
  }
`;

const SchemaFormWrapperInner = styled.div`
  position: ${props => (props.size === 'full' ? 'static' : '')};
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  max-height: ${props => (props.size === 'full' ? '40vh' : '75vh')};
  max-width: 800px;
  fieldset > legend,
  fieldset > legend + p {
    display: none;
  }
  form > div > label {
    display: none;
  }
`;

const CodeBlockWrapper = styled.div`
  margin: 2rem 0;
`;

class Overview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: props.data,
      html: '',
      size: props.size,
      isStringTemplate: false,
      template: props.template,
      fullScreen: false,
      showForm: true,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ formData }) {
    this.setState({
      data: formData,
    });
  }

  render() {
    const dataString = JSON.stringify(this.state.data, null, '  ');
    const twigCodeExample = `
      {% include '${this.props.template}' with ${dataString} %}
    `;
    return (
      <OverviewWrapper {...this.props} {...this.state}>
        <FlexWrapper>
          <h4>Live Demo</h4>

          <DemoGridControls>
            <Select
              items={sizes}
              value={this.state.size}
              handleChange={size => this.setState({ size })}
              label="Adjust Demo Stage"
            />
            <button
              type="button"
              className="button button--color-blue--light button--size-small"
              onClick={() =>
                this.setState(prevState => ({
                  fullScreen: !prevState.fullScreen,
                }))
              }
            >
              Toggle Fullscreen
            </button>
          </DemoGridControls>
        </FlexWrapper>
        <DemoGrid size={this.state.size}>
          <DemoStage size={this.state.size}>
            <Resizable>
              <Twig
                template={this.state.template}
                data={this.state.data}
                handleNewHtml={html => this.setState({ html })}
                showDataUsed={false}
                isStringTemplate={this.state.isStringTemplate}
              />
            </Resizable>
          </DemoStage>
          <SchemaFormWrapper
            size={this.state.size}
            showForm={this.state.showForm}
          >
            <SchemaFormWrapperInner size={this.state.size}>
              <h4>Edit Form</h4>
              <p>
                The following form is generated from the component schema
                (definition file). Edit this form to see your changes live.
                Changes will also update the code samples below.
              </p>
              <SchemaForm
                schema={this.props.schema}
                formData={this.state.data}
                onChange={this.handleChange}
              />
            </SchemaFormWrapperInner>
          </SchemaFormWrapper>
        </DemoGrid>
        <CodeBlockWrapper
          style={{ display: this.state.fullScreen ? 'none' : 'block' }}
        >
          <h4>Live Code Snippets</h4>
          <p>
            The following code snippets will generate the component in the live
            demo above. <br />
            You may also edit the code below and see how this effects the
            component.
          </p>
          <CodeBlock
            items={[
              {
                name: 'Twig',
                code: twigCodeExample,
                language: 'twig',
                handleTyping: text => {
                  this.setState({
                    isStringTemplate: true,
                    template: text,
                    showForm: false,
                  });
                },
              },
              {
                name: 'HTML',
                code: this.state.html,
                language: 'html',
              },
              {
                name: 'JSON (Data Only)',
                code: dataString,
                language: 'json',
              },
            ]}
          />
        </CodeBlockWrapper>
      </OverviewWrapper>
    );
  }
}

Overview.defaultProps = {
  data: {},
  demoSizes: [],
  size: 'l',
};

Overview.propTypes = {
  template: PropTypes.string.isRequired,
  data: PropTypes.object,
  schema: PropTypes.object.isRequired,
  demoSizes: PropTypes.arrayOf(PropTypes.string),
  size: PropTypes.oneOf(sizes.map(size => size.value)),
};

export default Overview;
