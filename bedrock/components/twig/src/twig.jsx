import React from 'react';
import PropTypes from 'prop-types';
import iframeResizer from 'iframe-resizer/js/iframeResizer'; // https://www.npmjs.com/package/iframe-resizer
import { version as iframeResizerVersion } from 'iframe-resizer/package.json';
import { connectToContext, contextPropTypes } from '@basalt/bedrock-core';
import { ResizableWrapper } from './twig.styles';

/**
 * Wrap HTML in full HTML page with CSS & JS assets.
 * @param {string} html - HTML for body
 * @param {string} cssUrl - Url for Design System css assets
 * @param {string} jsUrl - Url for Design System js assets
 * @param {boolean} [isReadyForIframe=true] - Add JS that prepares it for iFrame use.
 * @returns {string} - Full HTML page.
 */
function wrapHtml(html, cssUrl, jsUrl, isReadyForIframe = true) {
  return `
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  <link rel="stylesheet" type="text/css" href="${cssUrl}">
  ${
    isReadyForIframe
      ? `<script src="https://cdnjs.cloudflare.com/ajax/libs/iframe-resizer/${iframeResizerVersion}/iframeResizer.contentWindow.min.js"></script>`
      : ''
  }
</head>
<body>
${html}
<script src="${jsUrl}"></script>
<style>
  body {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .u-full-width.u-full-width {
    position: unset;
  }
</style>
</body>
</html>
`;
}

class Twig extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      html: '',
      ...props.context.settings.config,
      // detailsOpen: false, @todo preserve if `<details>` is open between renders
    };
    this.iframeRef = React.createRef();
    this.getHtml = this.getHtml.bind(this);
  }

  componentDidMount() {
    this.getHtml(this.props.data);
    if (Object.prototype.hasOwnProperty.call(window, 'AbortController')) {
      this.controller = new window.AbortController();
      this.signal = this.controller.signal;
    }
    if (this.state.isDevMode) {
      this.socket = new window.WebSocket(
        `ws://localhost:${this.state.websocketsPort}`,
      );

      // this.socket.addEventListener('open', event => {
      //   this.socket.send('Hello Server!', event);
      // });

      this.socket.addEventListener('message', event => {
        // console.log('Message from server ', event);
        const { path } = JSON.parse(event.data);
        if (path.endsWith('.twig')) {
          this.getHtml(this.props.data);
        }
      });
    }
    const iframes = iframeResizer(
      {
        log: false,
        checkOrigin: [window.location.origin],
        autoResize: false, // When `true`, triggers resize when window changes size or when ANY DOM attribute changes.
      },
      this.iframeRef.current,
    );
    const [thisIframe] = iframes;
    // `this.iframeResizer` can use all these callback methods: https://www.npmjs.com/package/iframe-resizer#callback-methods
    this.iframeResizer = thisIframe.iFrameResizer;
    // @todo Trigger resize only when needed. Temp stop-gap is to trigger a resize every second for now.
    this.resizerIntervalId = setInterval(() => {
      this.iframeResizer.resize();
    }, 1000);
  }

  componentDidUpdate(prevProps) {
    const oldData = JSON.stringify(prevProps.data);
    const newData = JSON.stringify(this.props.data);
    if (oldData !== newData || prevProps.template !== this.props.template) {
      this.getHtml(this.props.data);
    }
  }

  componentWillUnmount() {
    if (Object.prototype.hasOwnProperty.call(window, 'AbortController')) {
      this.controller.abort();
    }
    this.iframeResizer.close(); // https://github.com/davidjbradshaw/iframe-resizer/issues/576
    clearInterval(this.resizerIntervalId);
    if (this.state.isDevMode) {
      this.socket.close(1000, 'componentWillUnmount called');
    }
  }

  /**
   * @param {Object} data - Data to pass to template
   * @return {undefined}
   */
  getHtml(data) {
    const type = this.props.isStringTemplate ? 'renderString' : 'renderFile';
    // let body = data;
    const url = `${this.state.apiUrlBase}/render-twig?type=${type}`;

    // if (this.props.isStringTemplate) {
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
        signal: this.signal,
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
      })
      .catch(error => {
        console.error(
          `Error running getHtml for Twig.jsx ${this.props.template}`,
          error,
        );
      });
  }

  render() {
    let { html } = this.state;
    if (this.props.isDataShown) {
      const code = JSON.stringify(this.props.data, null, '  ');
      html = `${html}
        <details>
          <summary>Data Used</summary>
          <pre><code>${code}</code></pre>
        </details>`;
    }

    if (html.length > 32768) {
      // https://stackoverflow.com/a/19739077
      return (
        <div>
          There is too many characters in the html string to place in the iFrame
          using the <code>srcdoc</code> attribute. The max characters is 32,768
          and there were {html.length}.
        </div>
      );
    }

    const iframe = (
      <iframe
        style={{
          // Using min-width to set the width of the iFrame, works around an issue in iOS that can prevent the iFrame from sizing correctly
          width: '1px',
          minWidth: '100%',
          overflow: 'auto',
          verticalAlign: 'middle',
          border: 'none',
          // border: 'dotted 1px green',
        }}
        id={this.state.id}
        title={this.props.template}
        ref={this.iframeRef}
        srcDoc={wrapHtml(html, this.state.cruxCssUrl, this.state.cruxJsUrl)}
      />
    );

    if (this.props.isResizable) {
      return (
        <ResizableWrapper onMouseUp={() => this.iframeResizer.resize()}>
          {iframe}
        </ResizableWrapper>
      );
    }
    return iframe;
  }
}

Twig.defaultProps = {
  data: {},
  isDataShown: false,
  handleNewHtml: () => {},
  isStringTemplate: false,
  isResizable: true,
};

Twig.propTypes = {
  template: PropTypes.string.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  context: contextPropTypes.isRequired,
  data: PropTypes.object,
  isDataShown: PropTypes.bool,
  handleNewHtml: PropTypes.func,
  isStringTemplate: PropTypes.bool,
  isResizable: PropTypes.bool,
};

export default connectToContext(Twig);
