import React from 'react';
import PropTypes from 'prop-types';
import AboutPage from '../../templates/about-page';

class BugsAndIssues extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className={'feature-request'}>
        {this.props.title && <h3>{this.props.title}</h3>}
        {this.props.description && <p>{this.props.description}</p>}
        <a
          href={this.props.buttonDest}
          className={'button button--color-blue button--size-medium'}
          target={'_blank'}
        >
          {this.props.buttonText}
        </a>
      </div>
    );
  }
}

const BugsPage = () => (
  <AboutPage className="docs">
    <div className="body">
      <h4 className="eyebrow">About</h4>
      <h2>Bugs and Issues</h2>
      <hr />
      <blockquote>¯\_(ツ)_/¯</blockquote>
      <hr />
    </div>
    <BugsAndIssues />
  </AboutPage>
);

BugsAndIssues.defaultProps = {
  title: '',
  description: 'Find a bug? Please let us know!',
  buttonText: 'Report a Bug',
  buttonDest:
    'https://3.basecamp.com/3884180/buckets/5827789/todolists/1219730803',
};

BugsAndIssues.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  buttonText: PropTypes.string,
  buttonDest: PropTypes.string,
};

export default BugsPage;
