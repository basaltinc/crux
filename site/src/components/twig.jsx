import React from 'react';
import PropTypes from 'prop-types';
import { apiUrlBase } from '../../config';

export default class Twig extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      html: '',
      // detailsOpen: false, @todo preserve if `<details>` is open between renders
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
        `${apiUrlBase}/render-twig?templatePath=${encodeURIComponent(
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
    let html = this.state.html;
    if (this.props.showDataUsed) {
      const code = JSON.stringify(this.props.data, null, '  ');
      html = `${html}
        <details>
          <summary>Data Used</summary>
          <pre><code>${code}</code></pre>
        </details>`;
    }
    return <div data-name="demo" dangerouslySetInnerHTML={{ __html: html }} />;
  }
}

Twig.defaultProps = {
  data: {},
  showDataUsed: true,
};

Twig.propTypes = {
  template: PropTypes.string.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  data: PropTypes.object,
  showDataUsed: PropTypes.bool,
};
