import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { SmartGridWrapper, SmartGridItem } from './smart-grid.styles';

// eslint-disable-next-line react/prefer-stateless-function
export default class SmartGrid extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const childrenGridItems = React.Children.map(this.props.children, child => (
      <SmartGridItem
        xsmall={this.props['row-items-xsmall']}
        small={this.props['row-items-small']}
        medium={this.props['row-items-medium']}
        large={this.props['row-items-large']}
        xlarge={this.props['row-items-xlarge']}
        xxlarge={this.props['row-items-xxlarge']}
        xxxlarge={this.props['row-items-xxxlarge']}
      >
        {child}
      </SmartGridItem>
    ));
    return (
      <SmartGridWrapper {...this.props}>{childrenGridItems}</SmartGridWrapper>
    );
  }
}

/*
** The value `0` below is used to infer "use the last value"
** Example: 'row-items-small' below inherits from 'row-items-xsmall'
 */
SmartGrid.defaultProps = {
  'row-items-xsmall': 1,
  'row-items-small': 0,
  'row-items-medium': 2,
  'row-items-large': 3,
  'row-items-xlarge': 0,
  'row-items-xxlarge': 0,
  'row-items-xxxlarge': 0,
};

SmartGrid.propTypes = {
  children: PropTypes.arrayOf(PropTypes.object).isRequired,
  'row-items-xsmall': PropTypes.number,
  'row-items-small': PropTypes.number,
  'row-items-medium': PropTypes.number,
  'row-items-large': PropTypes.number,
  'row-items-xlarge': PropTypes.number,
  'row-items-xxlarge': PropTypes.number,
  'row-items-xxxlarge': PropTypes.number,
};
