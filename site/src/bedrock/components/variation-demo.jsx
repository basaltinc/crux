import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FaEllipsisH, FaEllipsisV } from 'react-icons/fa';
import SchemaForm from './schema-form/src/SchemaForm';
import Twig from '../../components/twig';
import TabbedPanel from './tabbed-panel';
import { Checkerboard } from './atoms';
import { getTypeColor } from '../../theme';

const VariationsWrapper = styled.div`
  margin: 2rem 0;
  .form-group > div:first-child {
    display: none;
  }
`;

const HeaderRegion = styled.div`
  background: ${props => props.colorThemeAccent};
  border-bottom: 10px solid ${props => props.colorTheme};
  border-top-right-radius: var(--border-radius);
  border-top-left-radius: var(--border-radius);
  padding: 30px;
  line-height: 1;
  position: relative;
  h5 {
    color: ${props => props.colorTheme};
  }
`;

const FooterRegion = styled.div`
  border-top: 1px solid ${props => props.colorTheme};
  padding: 18px 15px 15px;
  summary {
    color: ${props => props.colorTheme};
    outline: none;
    user-select: none;
    font-weight: bold;
  }
  details[open] summary {
    color: #000;
  }
  pre {
    margin: 0;
  }
`;

export class VariationDemo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: props.data,
      isExpanded: props.isExpanded,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {}

  handleChange(data) {
    this.setState(prevState => ({
      data: Object.assign({}, prevState.data, data.formData),
    }));
  }

  render() {
    const { prop, propKey } = this.props;
    const colorTheme = `var(${getTypeColor(this.props.color)})`;
    const colorThemeAccent = `var(${getTypeColor(this.props.color, 'accent')})`;
    const formSchema = {
      type: 'object',
      properties: {
        [propKey]: prop,
      },
    };

    let content;
    if (this.state.isExpanded) {
      // Items is either an enum of strings, or a boolean
      const items = prop.enum ? prop.enum : [true, false];
      content = items.map(item => {
        const itemData = Object.assign({}, this.props.data, {
          [propKey]: item,
        });
        return (
          <div
            key={item.propKey}
            style={{
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
            <Checkerboard bleed="20px">
              <Twig template={this.props.template} data={itemData} />
            </Checkerboard>
          </div>
        );
      });
    } else {
      content = (
        <div>
          <div
            style={{
              borderBottom: `1px solid ${colorTheme}`,
            }}
          >
            <SchemaForm
              schema={formSchema}
              onChange={this.handleChange}
              formData={this.state.data}
              isInline
              uiSchema={{
                [propKey]: {
                  'ui:widget': 'radio',
                },
              }}
            />
          </div>
          <Checkerboard bleed="20px">
            <Twig
              template={this.props.template}
              showDataUsed={false}
              data={this.state.data}
            />
          </Checkerboard>
        </div>
      );
    }

    return (
      <div>
        <HeaderRegion
          colorTheme={colorTheme}
          colorThemeAccent={colorThemeAccent}
        >
          {prop.description && (
            <div>
              <h5>Description</h5>
              <p>{prop.description}</p>
            </div>
          )}
          <div
            style={{
              cursor: 'pointer',
              position: 'absolute',
              color: colorTheme,
              fontWeight: 'bold',
              display: 'inline-block',
              right: '15px',
              bottom: '15px',
            }}
            role="button"
            onClick={() =>
              this.setState(prevState => ({
                isExpanded: !prevState.isExpanded,
              }))
            }
            onKeyUp={() =>
              this.setState(prevState => ({
                isExpanded: !prevState.isExpanded,
              }))
            }
            tabIndex={0}
          >
            {this.state.isExpanded ? <FaEllipsisH /> : <FaEllipsisV />}
          </div>
        </HeaderRegion>
        <div>{content}</div>
        <FooterRegion
          colorTheme={colorTheme}
          style={{
            display: this.state.isExpanded ? 'none' : 'block',
          }}
        >
          <details>
            <summary>Data Used</summary>
            <pre>
              <code>{JSON.stringify(this.props.data, null, '  ')}</code>
            </pre>
          </details>
        </FooterRegion>
      </div>
    );
  }
}

VariationDemo.defaultProps = {
  data: {},
  isExpanded: false,
  color: 'component',
};

VariationDemo.propTypes = {
  template: PropTypes.string.isRequired,
  data: PropTypes.object,
  // @todo cleanup api of `propKey` & `prop` - feels messy (but works!)
  propKey: PropTypes.string.isRequired,
  prop: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
    enum: PropTypes.array,
  }).isRequired,
  isExpanded: PropTypes.bool,
  color: PropTypes.string,
};

export default function VariationDemos({ schema, template, data, isExpanded }) {
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
        isExpanded={isExpanded}
        key={variationData.propKey}
      />
    ),
  }));

  return (
    <VariationsWrapper>
      <h4>Variations</h4>
      <p>
        Explore the variations of each property of this component.
        <br />
        Use the radio buttons, or press &quot;Show All Variations&quot; to see
        all variations side by side.
      </p>
      <TabbedPanel color="component" bleed="0" items={variations} />
    </VariationsWrapper>
  );
}

VariationDemos.defaultProps = {
  isExpanded: false,
};

VariationDemos.propTypes = {
  schema: PropTypes.object.isRequired,
  template: PropTypes.string.isRequired,
  data: PropTypes.object.isRequired,
  isExpanded: PropTypes.bool,
};
