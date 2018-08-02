import React from 'react';
import PropTypes from 'prop-types';
import AboutPage from '../../templates/about-page';

class FeatureRequest extends React.Component {
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

const FeatureRequestPage = () => (
  <AboutPage className="docs">
    <div className="body">
      <h4 className="eyebrow">About</h4>
      <h2>Feature Requests</h2>
      <hr />
      <blockquote>
        Ask, and you shall receive (in three to five business days). - Genie
      </blockquote>
      <hr />
      <FeatureRequest />
    </div>
    <form action="#">
      {/* <div> */}
      {/* <label htmlFor="name">Name</label> */}
      {/* <input type="text" id="name" /> */}
      {/* </div> */}
      {/* <div> */}
      {/* <label htmlFor="email">Email</label> */}
      {/* <input type="text" id="email" /> */}
      {/* </div> */}
      {/* <div> */}
      {/* <label htmlFor="body">Feature Request</label> */}
      {/* <input type="textarea" id="body" /> */}
      {/* </div> */}
    </form>
  </AboutPage>
);

FeatureRequest.defaultProps = {
  title: '',
  description: 'Have an idea for a new feature? Submit your idea!',
  buttonText: 'Request a Feature',
  buttonDest:
    'https://3.basecamp.com/3884180/buckets/5827789/todolists/1207207552#adding_to_1207207552',
};

FeatureRequest.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  buttonText: PropTypes.string,
  buttonDest: PropTypes.string,
};

export default FeatureRequestPage;
