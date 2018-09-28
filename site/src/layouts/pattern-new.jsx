import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connectToContext, contextPropTypes } from '@basalt/bedrock-core';
import SchemaForm from '@basalt/bedrock-schema-form';
import { StatusMessage } from '@basalt/bedrock-atoms';
import patternNewSchema from '@basalt/bedrock-pattern-manifest/src/pattern-new.schema';
import urlJoin from 'url-join';

class PatternEdit extends Component {
  constructor(props) {
    super(props);
    this.apiEndpoint = urlJoin(
      props.context.settings.urls.apiUrlBase,
      'new-pattern',
    );
    this.state = {
      statusMessage: '',
      statusType: 'info',
      redirectUrl: '',
      formData: {},
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
          // can't use React Router link, b/c we need the whole React Context to start over so the system knows about the new pattern, so we use a full page change.
          setTimeout(() => {
            window.location = `/patterns/${formData.id}/edit`;
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
          schema={patternNewSchema}
          formData={this.state.formData}
          hasSubmit
          onSubmit={this.handleSubmit}
        />
        <br />
        <StatusMessage
          message={`Warning: after you land on the brand new Overview page, you will see an error saying something like 'Template ... is not defined'
        
YOU MUST RESTART COMMAND LINE TOOLS AFTERWARDS
        
We're working on a better solution already; thanks you for your patience,
The Management        
        `}
          type="warning"
        />
      </div>
    );
  }
}

PatternEdit.propTypes = {
  context: contextPropTypes.isRequired,
};

export default connectToContext(PatternEdit);
