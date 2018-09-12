import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Spinner from '@basalt/bedrock-spinner';
import { Details, Select } from '@basalt/bedrock-atoms';
import ErrorCatcher from '@basalt/bedrock-error-catcher';
import ApiDemo from '@basalt/bedrock-api-demo';
import Overview from '@basalt/bedrock-overview';
import Twig from '@basalt/bedrock-twig';
import { connectToContext, contextPropTypes } from '@basalt/bedrock-core';
import {
  LoadableSchemaTable,
  LoadableVariationDemo,
  LoadableDosAndDonts,
} from '../loadable-components';

const OverviewHeader = styled.header`
  position: relative;
  margin-bottom: 2rem;
`;

class ComponentOverview extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTemplate: {
        name: '',
        schema: {},
        uiSchema: {},
        isInline: false,
      },
      meta: {},
      ready: false,
    };
    this.apiEndpoint = `${
      props.context.settings.urls.apiUrlBase
    }/pattern-meta/${props.id}`;
    this.isDevMode = this.props.context.settings.isDevMode;
    this.websocketsPort = this.props.context.settings.websocketsPort;
    this.getData = this.getData.bind(this);
  }

  componentDidMount() {
    this.getData();
    if (this.isDevMode) {
      this.socket = new window.WebSocket(
        `ws://localhost:${this.websocketsPort}`,
      );

      // this.socket.addEventListener('open', event => {
      //   this.socket.send('Hello Server!', event);
      // });

      this.socket.addEventListener('message', event => {
        const { ext } = JSON.parse(event.data);
        // console.log('Message from server ', ext, event.data);
        if (ext !== '.twig') {
          this.getData();
        }
      });
    }
  }

  componentWillUnmount() {
    if (this.isDevMode) {
      this.socket.close(1000, 'componentWillUnmount called');
    }
  }

  getData() {
    window
      .fetch(this.apiEndpoint)
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
      const { title, description, type, templates, demoSize } = this.state.meta;
      const { name, schema, uiSchema, isInline } = this.state.currentTemplate;
      const [data, ...examples] = schema.examples ? schema.examples : [{}];
      const dosAndDonts = schema.dosAndDonts ? schema.dosAndDonts : [];
      content = (
        <article>
          <OverviewHeader>
            <h4 className="eyebrow" style={{ textTransform: 'capitalize' }}>
              {type}
            </h4>
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
            uiSchema={uiSchema}
            demoSizes={this.props.demoSizes}
            data={data}
            size={demoSize}
            key={name}
            isInline={isInline}
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
              key={JSON.stringify(item)}
              title={item.title}
              description={item.description}
              items={item.items}
            />
          ))}

          <ApiDemo endpoint={this.apiEndpoint} />
        </article>
      );
    }
    return <ErrorCatcher>{content}</ErrorCatcher>;
  }
}

ComponentOverview.defaultProps = {
  demoSizes: [],
};

ComponentOverview.propTypes = {
  id: PropTypes.string.isRequired,
  demoSizes: PropTypes.arrayOf(PropTypes.string.isRequired),
  context: contextPropTypes.isRequired,
};

export default connectToContext(ComponentOverview);
