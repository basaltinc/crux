import React from 'react';
import PropTypes from 'prop-types';

class BugReport extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="bug-report">
        {this.props.title && <h3>{this.props.title}</h3>}
        {this.props.description && <p>{this.props.description}</p>}
        <a
          href={this.props.buttonDest}
          className="button button--color-blue button--size-medium"
          target="_blank"
          rel="noopener noreferrer"
        >
          {this.props.buttonText}
        </a>
      </div>
    );
  }
}

BugReport.defaultProps = {
  title: 'Bug Report',
  description: 'Find something broken? Please let us know!',
  buttonText: 'Submit Bug',
  buttonDest:
    'https://3.basecamp.com/3884180/buckets/5827789/todolists/1207039385#adding_to_1207039385',
};

BugReport.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  buttonText: PropTypes.string,
  buttonDest: PropTypes.string,
};

export default BugReport;
