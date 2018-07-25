import React from 'react';
import PropTypes from 'prop-types';

const renderApiUrl = 'http://localhost:3001/'; // @todo make dynamic

export default class Demo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      html: '',
    };
    this.getHtml = this.getHtml.bind(this);
  }

  componentDidMount() {
    this.getHtml(this.props.data);
  }

  componentDidUpdate(prevProps) {
    const oldData = JSON.stringify(prevProps.data);
    const newData = JSON.stringify(this.props.data);
    if (oldData !== newData) {
      this.getHtml(this.props.data);
    }
  }

  /**
   * @param {object} data
   */
  getHtml(data) {
    // @todo Encode `templatePath`
    window
      .fetch(`${renderApiUrl}?templatePath=${this.props.template}`, {
        method: 'POST',
        body: JSON.stringify(data),
        // headers: {}
      })
      .then(res => res.json())
      .then((results) => {
        // eslint-disable-next-line
        // console.debug(results);
        if (results.ok) {
          this.setState({
            html: results.html,
          });
        } else {
          this.setState({
            html: results.message,
          });
        }
      });
  }

  render() {
    /* eslint-disable react/no-danger */
    return (
      <div data-name="demo" dangerouslySetInnerHTML={{ __html: this.state.html }} />
    );
  }
}

Demo.defaultProps = {
  data: {},
};

Demo.propTypes = {
  template: PropTypes.string.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  data: PropTypes.object,
};
