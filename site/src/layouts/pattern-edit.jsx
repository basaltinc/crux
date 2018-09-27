import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connectToContext, contextPropTypes } from '@basalt/bedrock-core';
import SchemaForm from '@basalt/bedrock-schema-form';
import patternMetaSchema from '@basalt/bedrock-pattern-manifest/src/pattern-meta.schema';
import urlJoin from 'url-join';

class PatternEdit extends Component {
  constructor(props) {
    super(props);
    this.apiEndpoint = urlJoin(
      props.context.settings.urls.apiUrlBase,
      'pattern-meta',
      props.id,
    );
    const pattern = props.context.patterns.find(p => p.id === props.id);
    this.patternMeta = pattern.meta;

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit({ formData }) {
    console.log('submitted', formData);
    window
      .fetch(this.apiEndpoint, {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: {
          'Content-Type': 'application/json',
        }
      })
      .then(res => res.json())
      .then(res => console.log(res))
      .catch(err => console.error(err));
  }

  render() {
    return (
      <div>
        <SchemaForm
          schema={patternMetaSchema}
          formData={this.patternMeta}
          hasSubmit
          onSubmit={this.handleSubmit}
        />
      </div>
    );
  }
}

export default connectToContext(PatternEdit);
