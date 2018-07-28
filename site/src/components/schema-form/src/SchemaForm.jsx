import React from 'react';
import PT from 'prop-types';
import Form from 'react-jsonschema-form';
import { getRandomInt } from '../../../../utils';
import CustomArrayField from './custom-templates/array-field';
import CustomField from './custom-templates/custom-field';
import './form.styles.css';

/* eslint-disable no-console */
export default class SchemaForm extends React.Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onError = this.onError.bind(this);
  }

  onChange(data) {
    if (this.props.debug) {
      console.log('Form Data changed ', data);
    }
    this.props.onChange(data);
  }

  onSubmit(data) {
    if (this.props.debug) {
      console.log('Form Data submitted ', data);
    }
    this.props.onSubmit(data);
  }

  onError(data) {
    if (this.props.debug) {
      console.log('Form Data error ', data);
    }
    this.props.onError(data);
  }

  render() {
    return (
      <Form
        {...this.props}
        schema={this.props.schema}
        uiSchema={this.props.uiSchema}
        onSubmit={this.onSubmit}
        onError={this.onError}
        onChange={this.onChange}
        ArrayFieldTemplate={CustomArrayField}
        FieldTemplate={CustomField}
      >
        <span />
        {/* @todo make it easier to disable SchemaForm submit button */}
      </Form>
    );
  }
}

SchemaForm.defaultProps = {
  idPrefix: `schema-form--${getRandomInt(10000)}`,
  debug: false,
  uiSchema: {},
  inline: false,
  onChange: () => {},
  onSubmit: () => {},
  onError: () => {},
};

SchemaForm.propTypes = {
  schema: PT.object.isRequired, // eslint-disable-line react/forbid-prop-types
  uiSchema: PT.object, // eslint-disable-line react/forbid-prop-types
  onChange: PT.func,
  onError: PT.func,
  onSubmit: PT.func,
  debug: PT.bool,
  idPrefix: PT.string,
  inline: PT.bool, // @todo implement `inline` form for left-to-right mini-forms
};
