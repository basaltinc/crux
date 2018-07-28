import React from 'react';
import PropTypes from 'prop-types';
import Twig from './twig';
import SchemaForm from './schema-form';
import SchemaTable from '../components/schema-table';

class Overview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: props.data,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ formData }) {
    // console.log(formData);
    this.setState({
      data: formData,
    });
  }

  render() {
    const demos = this.props.demoSizes.map(size => (
      <div
        key={size}
        style={{
          width: size,
          margin: '0 auto 5px',
          resize: 'both',
          overflow: 'scroll',
          border: 'dotted 1px grey',
          padding: '5px',
        }}
      >
        <Twig template={this.props.template} data={this.state.data} />
      </div>
    ));

    let title = '';
    if (this.props.title) {
      title = this.props.title;
    } else if (this.props.schema) {
      title = this.props.schema.title;
    }
    return (
      <article data-name="overview" style={{ width: '100%' }}>
        {title && <h4>{title}</h4>}
        {demos}
        {this.props.schema && (
          <div>
            <SchemaForm
              schema={this.props.schema}
              formData={this.state.data}
              onChange={this.handleChange}
            />
            <details open={this.props.isPropsTableOpen}>
              <summary>Props Table</summary>
              <SchemaTable schema={this.props.schema} />
            </details>
          </div>
        )}
      </article>
    );
  }
}

Overview.defaultProps = {
  data: {},
  isPropsTableOpen: true,
  demoSizes: ['100%'],
  title: '',
  schema: null,
};

Overview.propTypes = {
  template: PropTypes.string.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  data: PropTypes.object,
  // eslint-disable-next-line react/forbid-prop-types
  schema: PropTypes.object,
  demoSizes: PropTypes.arrayOf(PropTypes.string),
  isPropsTableOpen: PropTypes.bool,
  title: PropTypes.string,
};

export default Overview;
