import React from 'react';
import PropTypes from 'prop-types';
import SchemaForm from '@basalt/bedrock-schema-form';
import { Select } from '@basalt/bedrock-atoms';
import Twig from '../twig/twig';
import CodeBlock from '../code-block/code-block';
import {
  OverviewWrapper,
  CodeBlockWrapper,
  DemoGrid,
  DemoGridControls,
  DemoStage,
  FlexWrapper,
  Resizable,
  SchemaFormWrapper,
  SchemaFormWrapperInner,
} from './overview.styles';

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
