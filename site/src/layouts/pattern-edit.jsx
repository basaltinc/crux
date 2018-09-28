import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
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
    this.state = {
      statusMessage: '',
      statusType: 'info',
      redirectUrl: '',
      formData: pattern.meta,
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
            statusMessage: `${results.message} Redirecting...`,
            statusType: 'success',
            formData,
          });
          // without this delay, the next page does not show the fresh data yet
          setTimeout(() => {
            this.setState({ redirectUrl: `/patterns/${this.props.id}` });
          }, 1000);
        } else {
          this.setState({
            statusMessage: results.message,
            statusType: 'error',
            formData,
          });
        }
      })
      .catch(err => console.error(err));
  }

  render() {
    if (this.state.redirectUrl) {
      return <Redirect to={this.state.redirectUrl} />;
    }
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
          formData={this.state.formData}
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
