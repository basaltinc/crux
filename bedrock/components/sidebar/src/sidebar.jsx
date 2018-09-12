import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  SidebarColumn,
  ToggleChevron,
  SidebarStyled,
  SidebarTrayHandle,
} from './sidebar.styles';

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sidebarCollapsed: props.isInitiallyCollapsed,
    };

    this.handleToggleClick = this.handleToggleClick.bind(this);
  }

  handleToggleClick() {
    this.setState(prevState => ({
      sidebarCollapsed: !prevState.sidebarCollapsed,
    }));
  }

  render() {
    const isCollapsed = this.state.sidebarCollapsed;

    return (
      <SidebarStyled sidebarCollapsed={isCollapsed}>
        <SidebarColumn sidebarCollapsed={isCollapsed}>
          {this.props.children}
        </SidebarColumn>
        <SidebarTrayHandle onClick={this.handleToggleClick}>
          <ToggleChevron sidebarcollapsed={isCollapsed.toString()} />
        </SidebarTrayHandle>
      </SidebarStyled>
    );
  }
}

Sidebar.defaultProps = {
  isInitiallyCollapsed: false,
};

Sidebar.propTypes = {
  isInitiallyCollapsed: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

export default Sidebar;
