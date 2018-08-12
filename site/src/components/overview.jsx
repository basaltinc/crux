import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Twig from './twig';
import SchemaForm from '../bedrock/components/schema-form';
import { SelectStyledWrapper } from '../bedrock/components/atoms';
import CodeBlock from './code-block';

const sizes = {
  Small: 's',
  Medium: 'm',
  Large: 'l',
  Full: 'full',
};

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

const OverviewHeader = styled.header`
  position: relative;
  margin-bottom: 2rem;
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
  display: ${props => (props.size === 'full' ? 'block' : 'flex')};
  position: relative;
`;

const DemoGridConrols = styled.div`
  position: absolute;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  bottom: 0;
  right: 0;
  > * {
    margin-left: 10px;
    margin-bottom: 0;
  }
`;

const SchemaFormWrapper = styled.div`
  display: ${props => (props.showForm ? 'flex' : 'none')};
  justify-content: center;
  overflow: auto;
  border: dotted 1px #ccc;
  position: relative;
  padding: 0.5rem;
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
      isTemplateString: false,
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
    // @todo determine if this is still wanted/needed, otherwise delete
    // const demos = this.props.demoSizes.map(size => (
    //   <Resizable key={size} size={size}>
    //     <Twig
    //       template={this.props.template}
    //       data={this.state.data}
    //       handleNewHtml={html => this.setState({ html })}
    //     />
    //   </Resizable>
    // ));
    const sizeSelect = (
      <SelectStyledWrapper>
        <select
          onChange={event => this.setState({ size: event.target.value })}
          value={this.state.size}
        >
          {Object.keys(sizes).map(key => (
            <option value={sizes[key]} key={sizes[key]}>
              {key}
            </option>
          ))}
        </select>
      </SelectStyledWrapper>
    );

    const dataString = JSON.stringify(this.state.data, null, '  ');
    const twigCodeExample = `
      {% include '${this.props.template}' with ${dataString} %}
    `;
    return (
      <OverviewWrapper {...this.props} {...this.state}>
        <OverviewHeader>
          <h4 className="eyebrow">Component</h4>
          <h2>{this.props.schema.title}</h2>
          <p>{this.props.schema.description}</p>
        </OverviewHeader>
        <div style={{ position: 'relative', marginBottom: '1rem' }}>
          <DemoGridConrols>
            <p>Adjust Demo Stage: </p>
            {sizeSelect}
            <button
              className="button button--color-blue--light button--size-small"
              onClick={() =>
                this.setState({ fullScreen: !this.state.fullScreen })
              }
            >
              Toggle Fullscreen
            </button>
          </DemoGridConrols>
          <h4>Live Demo</h4>
        </div>
        <DemoGrid size={this.state.size}>
          <DemoStage size={this.state.size}>
            <Resizable>
              <Twig
                template={this.state.template}
                data={this.state.data}
                handleNewHtml={html => this.setState({ html })}
                showDataUsed={false}
                asString={this.state.isTemplateString}
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
        <CodeBlockWrapper>
          <h4>Live Code Snippets</h4>
          <p>
            The following code snippets will generate the component in the live
            demo above. <br />You may also edit the code below and see how this
            effects the component.
          </p>
          <CodeBlock
            items={[
              {
                name: 'Twig',
                code: twigCodeExample,
                language: 'twig',
                handleTyping: text => {
                  this.setState({
                    isTemplateString: true,
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
  size: PropTypes.oneOf(Object.values(sizes)),
};

export default Overview;
