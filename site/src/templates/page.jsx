import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Site from '../templates/site';

import './page.css';

// @todo Evan is working on a better way to pull in styles
import '../../../build/assets/style.css';
import ErrorCatcher from "../bedrock/components/error-catcher"; // eslint-disable-line

class Page extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sidebarOneOnTop: props.sidebarOneOnTop,
    };
  }

  render() {
    return (
      <ErrorCatcher>
        <Site>
          <main
            className={classNames('page', {
              'page--has-sidebar-one': this.props.sidebarOne,
              'page--has-sidebar-two': this.props.sidebarTwo,
              [`page--${this.props.className}`]: this.props.className,
              'page--has-sidebar-one-on-top':
                this.props.sidebarOne && this.state.sidebarOneOnTop,
            })}
          >
            <div className="page__content">{this.props.children}</div>
            {this.props.sidebarOne && (
              <div className="page__sidebar-one">
                {this.props.sidebarOne}
                <button
                  onClick={() =>
                    this.setState({
                      sidebarOneOnTop: !this.state.sidebarOneOnTop,
                    })
                  }
                >
                  Toggle
                </button>
              </div>
            )}
            {this.props.sidebarTwo && (
              <div className="page__sidebar-two">{this.props.sidebarTwo}</div>
            )}
          </main>
        </Site>
      </ErrorCatcher>
    );
  }
}

Page.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  sidebarOne: PropTypes.node,
  sidebarTwo: PropTypes.node,
  sidebarOneOnTop: PropTypes.bool,
};

Page.defaultProps = {
  className: null,
  sidebarOne: null,
  sidebarTwo: null,
  sidebarOneOnTop: false,
};

export default Page;
