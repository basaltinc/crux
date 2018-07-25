import React from 'react';
import PropTypes from 'prop-types';
import SchemaForm from 'react-jsonschema-form';
import Demo from './demo';

export default class LiveDemo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: props.data,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ formData }) {
    console.log(formData);
    this.setState({
      data: formData,
    });
  }

  // componentWillReceiveProps() {}
  // componentDidMount() {}

  render() {
    return (
      <div data-name="live-demo">
        <Demo template={this.props.template} data={this.state.data} />
        <SchemaForm
          schema={this.props.schema}
          formData={this.state.data}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

LiveDemo.defaultProps = {
  data: {},
};

LiveDemo.propTypes = {
  template: PropTypes.string.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  data: PropTypes.object,
  // eslint-disable-next-line react/forbid-prop-types
  schema: PropTypes.object.isRequired,
};
