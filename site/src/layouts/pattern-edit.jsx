import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connectToContext, contextPropTypes } from '@basalt/bedrock-core';
import SchemaForm from '@basalt/bedrock-schema-form';
import { StatusMessage } from '@basalt/bedrock-atoms';
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
    this.state = {
      statusMessage: '',
      statusType: 'info',
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit({ formData }) {
    window
      .fetch(this.apiEndpoint, {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then(res => res.json())
      .then(results => {
        if (results.ok) {
          this.setState({
            statusMessage: results.message,
            statusType: 'success',
          });
        } else {
          this.setState({
            statusMessage: results.message,
            statusType: 'error',
          });
        }
      })
      .catch(err => console.error(err));
  }

  render() {
    return (
      <div>
        {this.state.statusMessage && (
          <StatusMessage
            message={this.state.statusMessage}
            type={this.state.statusType}
          />
        )}
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

PatternEdit.propTypes = {
  context: contextPropTypes.isRequired,
  id: PropTypes.string.isRequired,
};

export default connectToContext(PatternEdit);
