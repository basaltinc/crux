import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Twig from './twig';
import SchemaForm from '../bedrock/components/schema-form';
import SchemaTable from '../bedrock/components/schema-table';
import CodeBlock from './code-block';

const sizes = ['s', 'm', 'l', 'full'];

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
        return '66%';
      default:
        return '100%';
    }
  }};
`;

const Resizable = styled.div`
  resize: horizontal;
  overflow: hidden;
  border: dotted 1px grey;
  padding: 10px;
  max-width: ${props => props.size || '100%'};
`;

const DemoGrid = styled.div`
  display: ${props => (props.size === 'full' ? 'block' : 'flex')};
  position: relative;
`;

const SchemaFormWrapper = styled.div`
  overflow: auto;
  //max-height: 80vh;
  border: dotted 1px #ccc;
  position: relative;
  padding: 0.5rem;
  width: ${({ size }) => {
    switch (size) {
      case 's':
        return '66%';
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
  position: ${props => (props.size === 'full' ? 'static' : 'absolute')};
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`;

class Overview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: props.data,
      html: '',
      size: props.size,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ formData }) {
    // console.log(formData);
    this.setState({
      data: formData,
    });
  }

  render() {
    const demos = this.props.demoSizes.map(size => (
      <Resizable key={size} size={size}>
        <Twig
          template={this.props.template}
          data={this.state.data}
          handleNewHtml={html => this.setState({ html })}
        />
      </Resizable>
    ));
    const sizeSelect = (
      <select
        onChange={event => this.setState({ size: event.target.value })}
        value={this.state.size}
      >
        {sizes.map(size => (
          <option value={size} key={size}>
            {size}
          </option>
        ))}
      </select>
    );

    const dataString = JSON.stringify(this.state.data, null, '  ');
    const twigCodeExample = `
      {% include '${this.props.template}' with ${dataString} %}
    `;

    return (
      <article data-name="overview" style={{ width: '100%' }}>
        <header>
          <h4>{this.props.schema.title}</h4>
          {sizeSelect}
        </header>
        <DemoGrid size={this.state.size}>
          <DemoStage size={this.state.size}>
            <Resizable>
              <Twig
                template={this.props.template}
                data={this.state.data}
                handleNewHtml={html => this.setState({ html })}
                showDataUsed={false}
              />
            </Resizable>
          </DemoStage>
          <SchemaFormWrapper size={this.state.size}>
            <SchemaFormWrapperInner size={this.state.size}>
              <SchemaForm
                schema={this.props.schema}
                formData={this.state.data}
                onChange={this.handleChange}
              />
            </SchemaFormWrapperInner>
          </SchemaFormWrapper>
        </DemoGrid>
        <footer>
          <CodeBlock
            items={[
              {
                name: 'Twig',
                code: twigCodeExample,
                language: 'twig',
              },
              {
                name: 'HTML',
                code: this.state.html,
                language: 'html',
              },
            ]}
          />
          {demos && (
            <details>
              <summary>Multiple Sizes Demoed</summary>
              {demos}
            </details>
          )}
          <details open={this.props.isPropsTableOpen}>
            <summary>Props Table</summary>
            <SchemaTable schema={this.props.schema} />
          </details>
        </footer>
      </article>
    );
  }
}

Overview.defaultProps = {
  data: {},
  isPropsTableOpen: true,
  demoSizes: [],
  size: 'l',
};

Overview.propTypes = {
  template: PropTypes.string.isRequired,
  data: PropTypes.object,
  schema: PropTypes.object.isRequired,
  demoSizes: PropTypes.arrayOf(PropTypes.string),
  isPropsTableOpen: PropTypes.bool,
  size: PropTypes.oneOf(sizes),
};

export default Overview;
