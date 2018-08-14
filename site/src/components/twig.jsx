import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { apiUrlBase } from '../../config';

// This is an intentional override of the utility class u-full-width
// to prevent it from overflowing the demo stage
const FullWidthFixedWrapper = styled.div`
  width: 100%;
  .u-full-width {
    width: 100%;
    left: 0;
    right: 0;
    margin-left: 0;
    margin-right: 0;
  }
`;

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
    if (oldData !== newData || prevProps.template !== this.props.template) {
      this.getHtml(this.props.data);
    }
  }

  /**
   * @param {Object} data - Data to pass to template
   * @return {undefined}
   */
  getHtml(data) {
    const type = this.props.asString ? 'renderString' : 'renderFile';
    // let body = data;
    const url = `${apiUrlBase}/render-twig?type=${type}`;

    // if (this.props.asString) {
    //   url = `${apiUrlBase}/render-twig?templateString`;
    //   body = {
    //     template: this.props.template,
    //     data,
    //   };
    // }
    window
      .fetch(url, {
        method: 'POST',
        body: JSON.stringify({
          template: this.props.template,
          data,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then(res => res.json())
      .then(results => {
        // eslint-disable-next-line
        // console.debug(results);
        if (results.ok) {
          this.setState({
            html: results.html,
          });
          this.props.handleNewHtml(results.html);
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
    return (
      <FullWidthFixedWrapper
        data-name="demo"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    );
  }
}

Twig.defaultProps = {
  data: {},
  showDataUsed: false,
  handleNewHtml: () => {},
  asString: false,
};

Twig.propTypes = {
  template: PropTypes.string.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  data: PropTypes.object,
  showDataUsed: PropTypes.bool,
  handleNewHtml: PropTypes.func,
  asString: PropTypes.bool,
};
