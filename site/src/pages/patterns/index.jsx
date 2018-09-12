import React, { Component } from 'react';
import { uniqueArray, flattenArray } from '@basalt/bedrock-utils';
import Spinner from '@basalt/bedrock-spinner';
import SchemaForm from '@basalt/bedrock-schema-form';
import PatternGrid from '@basalt/bedrock-pattern-grid';
import { connectToContext, contextPropTypes } from '@basalt/bedrock-core';

class PatternsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      patterns: [],
      ready: false,
      visibleStatuses: [],
      statuses: [],
      uses: [],
      visibleUses: [],
    };
  }

  componentDidMount() {
    window
      .fetch(
        `${this.props.context.settings.config.apiUrlBase}/patterns/component`,
      )
      .then(res => res.json())
      .then(patterns => {
        const statuses = uniqueArray(patterns.map(p => p.status));
        const uses = uniqueArray(
          flattenArray(patterns.map(p => p.uses)),
        ).filter(Boolean);

        this.setState({
          patterns,
          ready: true,
          statuses,
          visibleStatuses: statuses,
          uses,
          visibleUses: uses,
        });
      });
  }

  render() {
    if (!this.state.ready) {
      return <Spinner />;
    }

    const { patterns, visibleUses, visibleStatuses } = this.state;

    const visibleItems = patterns
      .filter(item => item.id !== 'site-footer')
      .filter(item => item.id !== 'site-header')
      .filter(item => visibleStatuses.includes(item.status))
      .filter(item => item.uses.some(use => visibleUses.includes(use)));

    return (
      <div>
        <h2>Patterns</h2>
        <p>Explore the design patterns that make up the Crux Design System.</p>
        <SchemaForm
          isInline
          formData={this.state}
          schema={{
            type: 'object',
            properties: {
              visibleStatuses: {
                title: 'Status',
                type: 'array',
                uniqueItems: true,
                items: {
                  type: 'string',
                  enum: this.state.statuses,
                },
              },
              visibleUses: {
                title: 'Uses',
                type: 'array',
                uniqueItems: true,
                items: {
                  type: 'string',
                  enum: this.state.uses,
                },
              },
            },
          }}
          uiSchema={{
            visibleStatuses: {
              'ui:widget': 'checkboxes',
              'ui:options': {
                inline: true,
              },
            },
            visibleUses: {
              'ui:widget': 'checkboxes',
              'ui:options': {
                inline: true,
              },
            },
          }}
          onChange={({ formData }) => {
            this.setState({
              visibleStatuses: formData.visibleStatuses,
              visibleUses: formData.visibleUses,
            });
          }}
        />
        <PatternGrid patterns={visibleItems} />
      </div>
    );
  }
}

PatternsPage.propTypes = {
  context: contextPropTypes.isRequired,
};

export default connectToContext(PatternsPage);
