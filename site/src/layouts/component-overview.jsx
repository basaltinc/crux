import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Loadable from 'react-loadable';
import styled from 'styled-components';
import Overview from '../components/overview';
import Spinner from '../bedrock/components/spinner';
import { apiUrlBase } from '../../config';
import { Details, Select } from '../bedrock/components/atoms';
import ErrorCatcher from '../bedrock/components/error-catcher';
import Twig from '../components/twig';
import ApiDemo from '../bedrock/components/api-demo';

const LoadableSchemaTable = Loadable({
  loader: () =>
    import(/* webpackChunkName: 'schema-table' */ '../bedrock/components/schema-table'),
  loading: Spinner,
});

const LoadableVariationDemo = Loadable({
  loader: () =>
    import(/* webpackChunkName: 'variation-demo' */ '../bedrock/components/variation-demo'),
  loading: Spinner,
});

const LoadableDosAndDonts = Loadable({
  loader: () =>
    import(/* webpackChunkName: 'dos-and-donts' */ '../bedrock/components/dos-and-donts/src/dos-and-donts'),
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
      content = (
        <article>
          <OverviewHeader>
            <h4 className="eyebrow">{type}</h4>
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

          <h4>Properties</h4>
          <p>
            The following properties make up the data that defines each instance
            of this component.
          </p>
          <Details open>
            <summary>Props Table</summary>
            <LoadableSchemaTable schema={schema} />
          </Details>

          <LoadableVariationDemo schema={schema} template={name} data={data} />

          {this.props.dosAndDonts.map(item => (
            // @todo title is not a required prop, so we need to fix this key structure
            <LoadableDosAndDonts
              key={item.title}
              title={item.title}
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
  dosAndDonts: [],
};

ComponentOverview.propTypes = {
  id: PropTypes.string.isRequired,
  demoSizes: PropTypes.arrayOf(PropTypes.string.isRequired),
  size: Overview.propTypes.size,
  dosAndDonts: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      items: PropTypes.array,
    }),
  ),
};
