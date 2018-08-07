import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import qs from 'query-string';
import SchemaForm from './schema-form';
import SchemaTable from './schema-table';
import { Details } from './atoms';

const ApiInput = styled.input`
  width: 50%;
  padding: 0.5rem;
  margin-bottom: 0.5rem;
`;

const PostOrGet = styled.span`
  background-color: ${props =>
    props.requestType === 'GET' ? 'green' : 'blue'};
  color: white;
  text-align: center;
  border-radius: 1rem;
  font-weight: bold;
  display: block;
  padding: 0.35rem;
  margin-bottom: 0.5rem;
  width: 8%;
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
      <Details>
        <summary>{this.props.title}</summary>
        <ApiInput type="text" value={this.buildUrl()} />
        {this.props.requestType && (
          <PostOrGet requestType={this.props.requestType}>
            {this.props.requestType}
          </PostOrGet>
        )}
        {this.props.querySchema && (
          <SchemaForm
            schema={this.props.querySchema}
            onChange={this.handleFormUpdate}
            formData={this.state.queryData}
            inline
          />
        )}
        {this.props.querySchema && (
          <div>
            <h4>Query Params</h4>
            <SchemaTable schema={this.props.querySchema} />
          </div>
        )}
        <h4>Response</h4>
        <pre>
          <code>{JSON.stringify(this.state.results, null, 2)}</code>
        </pre>
      </Details>
    );
  }
}

ApiDemo.defaultProps = {
  title: 'API',
  querySchema: {},
  queryData: {},
  requestType: 'GET',
};

ApiDemo.propTypes = {
  title: PropTypes.string,
  endpoint: PropTypes.string.isRequired,
  querySchema: PropTypes.object,
  queryData: PropTypes.object,
  requestType: PropTypes.oneOf(['GET', 'POST']),
};

export default ApiDemo;
