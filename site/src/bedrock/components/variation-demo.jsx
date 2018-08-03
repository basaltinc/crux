import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import SchemaForm from './schema-form/src/SchemaForm';
import Twig from '../../components/twig';
import TabbedPanel from './tabbed-panel';

const VariationsWrapper = styled.div`
  margin: 2rem 0;
  .form-group > div:first-child {
    display: none;
  }
`;

class VariationDemo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: props.data,
      expanded: props.expanded,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {}

  handleChange(data) {
    this.setState({
      data: Object.assign({}, this.state.data, data.formData),
    });
  }

  render() {
    const { prop, propKey } = this.props;
    const formSchema = {
      type: 'object',
      properties: {
        [propKey]: prop,
      },
    };

    let content;
    if (this.state.expanded) {
      // Items is either an enum of strings, or a boolean
      const items = prop.enum ? prop.enum : [true, false];
      content = items.map(item => {
        const itemData = Object.assign({}, this.props.data, {
          [propKey]: item,
        });
        return (
          <div
            style={{
              borderBottom: 'solid 1px #ccc',
              paddingBottom: '10px',
              marginBottom: '10px',
            }}
          >
            <h4>
              <code>{propKey}</code>:{' '}
              <code>
                {typeof item === 'boolean' ? JSON.stringify(item) : item}
              </code>
            </h4>
            <Twig template={this.props.template} data={itemData} />
          </div>
        );
      });
    } else {
      content = (
        <div>
          <SchemaForm
            schema={formSchema}
            onChange={this.handleChange}
            formData={this.state.data}
            inline
            uiSchema={{
              [propKey]: {
                'ui:widget': 'radio',
              },
            }}
          />
          <br />
          <Twig template={this.props.template} data={this.state.data} />
        </div>
      );
    }

    const title = prop.title || propKey;
    return (
      <div
        style={{
          border: 'dotted blue 1px',
          padding: '5px',
          margin: '5px',
        }}
      >
        <h5>Property: {title}</h5>
        {prop.description && <p>Description: {prop.description}</p>}
        <button
          className="button button--color-blue--light button--size-small"
          onClick={() => this.setState({ expanded: !this.state.expanded })}
        >
          {(this.state.expanded && 'Hide All Variations') ||
            'Show All Variations'}
        </button>
        <br />
        <br />
        <div>{content}</div>
      </div>
    );
  }
}

VariationDemo.defaultProps = {
  data: {},
  expanded: false,
};

VariationDemo.propTypes = {
  template: PropTypes.string.isRequired,
  data: PropTypes.object,
  // @todo cleanup api of `propKey` & `prop` - feels messy (but works!)
  propKey: PropTypes.string.isRequired,
  prop: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
    enum: PropTypes.array.isRequired,
  }).isRequired,
  expanded: PropTypes.bool,
};

export default VariationDemo;

export const VariationDemos = ({ schema, template, data, expanded }) => {
  const variationsData = [];
  Object.keys(schema.properties).forEach(propKey => {
    const prop = schema.properties[propKey];
    if (prop.enum || prop.type === 'boolean') {
      variationsData.push({
        template,
        prop,
        propKey,
        data,
      });
    }
  });

  if (variationsData.length === 0) {
    return null;
  }

  const variations = variationsData.map(variationData => ({
    title: variationData.propKey,
    id: variationData.propKey,
    children: (
      <VariationDemo
        {...variationData}
        expanded={expanded}
        key={variationData.propKey}
      />
    ),
  }));

  return (
    <VariationsWrapper>
      <h4>Variations</h4>
      <p>
        Explore the variations of each property of this component.<br />Use the
        radio buttons, or press &quot;Show All Variations&quot; to see all
        variations side by side.
      </p>
      <TabbedPanel items={variations} />
    </VariationsWrapper>
  );
};

VariationDemos.defaultProps = {
  expanded: false,
};

VariationDemos.propTypes = {
  schema: PropTypes.object.isRequired,
  template: PropTypes.string.isRequired,
  data: PropTypes.object.isRequired,
  expanded: PropTypes.bool,
};
