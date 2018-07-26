import React from 'react';
import PropTypes from 'prop-types';

const renderApiUrl = 'http://localhost:3042/api/render-twig'; // @todo make dynamic

export default class Twig extends React.Component {
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
   * @param {Object} data - Data to pass to template
   * @return {undefined}
   */
  getHtml(data) {
    // @todo Encode `templatePath`
    window
      .fetch(
        `${renderApiUrl}?templatePath=${encodeURIComponent(
          this.props.template,
        )}`,
        {
          method: 'POST',
          body: JSON.stringify(data),
          headers: {
            'Content-Type': 'application/json',
          },
        },
      )
      .then(res => res.json())
      .then(results => {
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
      <div
        data-name="demo"
        dangerouslySetInnerHTML={{ __html: this.state.html }}
      />
    );
  }
}

Twig.defaultProps = {
  data: {},
};

Twig.propTypes = {
  template: PropTypes.string.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  data: PropTypes.object,
};
