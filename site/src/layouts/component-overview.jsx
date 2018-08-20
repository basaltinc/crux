import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Loadable from 'react-loadable';
import styled from 'styled-components';
import Spinner from '@basalt/bedrock-spinner';
import { Details, Select } from '@basalt/bedrock-atoms';
import ErrorCatcher from '@basalt/bedrock-error-catcher';
import ApiDemo from '@basalt/bedrock-api-demo';
import Twig from '../components/twig';
import { apiUrlBase } from '../../config';
import Overview from '../components/overview';

const LoadableSchemaTable = Loadable({
  loader: () =>
    import(/* webpackChunkName: 'schema-table' */ '@basalt/bedrock-schema-table'),
  loading: Spinner,
});

const LoadableVariationDemo = Loadable({
  loader: () =>
    import(/* webpackChunkName: 'variation-demo' */ '@basalt/bedrock-variation-demo'),
  loading: Spinner,
});

const LoadableDosAndDonts = Loadable({
  loader: () =>
    import(/* webpackChunkName: 'dos-and-donts' */ '@basalt/bedrock-dos-and-donts'),
  loading: Spinner,
});

const OverviewHeader = styled.header`
  position: relative;
  margin-bottom: 2rem;
`;

export default class ComponentOverview extends Component {
  constructor(props) {
    super(props);
    this.state = {
      apiEndpoint: `${apiUrlBase}/pattern-meta/${props.id}`,
      currentTemplate: {
        name: '',
        schema: {},
      },
      meta: {},
      ready: false,
    };
  }

  componentDidMount() {
    window
      .fetch(this.state.apiEndpoint)
      .then(res => res.json())
      .then(meta => {
        this.setState({
          meta,
          currentTemplate: meta.templates[0],
          ready: true,
        });
      });
  }

  render() {
    let content;
    if (!this.state.ready) {
      content = <Spinner />;
    } else {
      const { title, description, type, templates } = this.state.meta;
      const { name, schema } = this.state.currentTemplate;
      const [data, ...examples] = schema.examples ? schema.examples : [{}];
      const dosAndDonts = schema.dosAndDonts ? schema.dosAndDonts : [];
      content = (
        <article>
          <OverviewHeader>
            <h4 className="eyebrow" style={{ textTransform: 'capitalize' }}>{type}</h4>
            <h2>{title}</h2>
            <p>{description}</p>
            {templates.length > 1 && (
              <Select
                label="Template"
                items={templates.map(t => ({
                  value: t.name,
                  title: t.schema.title,
                }))}
                handleChange={value => {
                  this.setState({
                    currentTemplate: templates.find(t => t.name === value),
                  });
                }}
              />
            )}
          </OverviewHeader>
          <Overview
            template={name}
            schema={schema}
            demoSizes={this.props.demoSizes}
            data={data}
            size={this.props.size}
            key={name}
          />

          {examples && (
            <Details>
              <summary>Examples</summary>
              {examples.map(example => (
                <Twig
                  template={name}
                  data={example}
                  key={JSON.stringify(example)}
                />
              ))}
            </Details>
          )}

          {Object.keys(schema.properties).length > 0 && (
            <div>
              <h4>Properties</h4>
              <p>
                The following properties make up the data that defines each
                instance of this component.
              </p>
              <Details open>
                <summary>Props Table</summary>
                <LoadableSchemaTable schema={schema} />
              </Details>
            </div>
          )}

          <LoadableVariationDemo schema={schema} template={name} data={data} />

          {dosAndDonts.map(item => (
            <LoadableDosAndDonts
              key={item.title}
              title={item.title}
              description={item.description}
              items={item.items}
            />
          ))}

          <ApiDemo endpoint={this.state.apiEndpoint} />
        </article>
      );
    }
    return <ErrorCatcher>{content}</ErrorCatcher>;
  }
}

ComponentOverview.defaultProps = {
  demoSizes: [],
  size: Overview.defaultProps.size,
};

ComponentOverview.propTypes = {
  id: PropTypes.string.isRequired,
  demoSizes: PropTypes.arrayOf(PropTypes.string.isRequired),
  size: Overview.propTypes.size,
};
