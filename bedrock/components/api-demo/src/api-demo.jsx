import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import qs from 'query-string';
import SchemaForm from '@basalt/bedrock-schema-form';
import SchemaTable from '@basalt/bedrock-schema-table';
import { Details } from '@basalt/bedrock-atoms';

const PostOrGet = styled.span`
  background-color: ${props =>
    props.requestType === 'get' ? 'green' : 'blue'};
  color: white;
  text-align: center;
  border-radius: 0;
  padding: 0.35rem 1rem;
  margin-bottom: 0.5rem;
  font-weight: bold;
`;

class ApiDemo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      results: {},
      queryData: props.queryData,
    };
    this.submitToEndpoint = this.submitToEndpoint.bind(this);
    this.handleFormUpdate = this.handleFormUpdate.bind(this);
    this.buildUrl = this.buildUrl.bind(this);
  }

  componentDidMount() {
    this.submitToEndpoint();
  }

  buildUrl() {
    return this.state.queryData
      ? `${this.props.endpoint}?${qs.stringify(this.state.queryData)}`
      : this.props.endpoint;
  }

  submitToEndpoint() {
    window
      .fetch(this.buildUrl())
      .then(res => res.json())
      .then(results => {
        this.setState({ results });
      });
  }

  handleFormUpdate(data) {
    this.setState(
      {
        queryData: data.formData,
      },
      this.submitToEndpoint,
    );
  }

  render() {
    return (
      <div>
        <h4>{this.props.title}</h4>
        <p>
          {this.props.requestType && (
            <PostOrGet requestType={this.props.requestType}>
              {this.props.requestType}
            </PostOrGet>
          )}
          {'  '}
          <code>{this.buildUrl()}</code>
        </p>
        <Details>
          <summary>API Details</summary>
          <br />
          {this.props.querySchema && (
            <div>
              <h5>API Form</h5>
              <p>
                Edit the following form to see live updates to the response
                generated.
              </p>
              <SchemaForm
                schema={this.props.querySchema}
                onChange={this.handleFormUpdate}
                g
                formData={this.state.queryData}
                //              @todo find a way to dynamically set radio button ui regardless of propKey
                uiSchema={{
                  format: {
                    'ui:widget': 'radio',
                  },
                }}
                isInline
              />
              <br />
            </div>
          )}
          {this.props.querySchema && (
            <div>
              <h5>Query Params</h5>
              <SchemaTable schema={this.props.querySchema} />
              <br />
            </div>
          )}
          <h5>Response</h5>
          <pre>
            <code>{JSON.stringify(this.state.results, null, 2)}</code>
          </pre>
        </Details>
      </div>
    );
  }
}

ApiDemo.defaultProps = {
  title: 'API',
  querySchema: null,
  queryData: null,
  requestType: 'get',
};

ApiDemo.propTypes = {
  title: PropTypes.string,
  endpoint: PropTypes.string.isRequired,
  querySchema: PropTypes.object,
  queryData: PropTypes.object,
  requestType: PropTypes.oneOf(['get', 'post']),
};

export default ApiDemo;
