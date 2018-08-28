import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FaChevronLeft } from 'react-icons/fa';

const SidebarStyled = styled.aside`
  position: relative;
  display: flex;
  flex-shrink: 0;
  flex-direction: row;
  width: ${props => (props.sidebarCollapsed ? '50px' : '300px')};
  transition: 0.6s;
  h4 {
    white-space: nowrap;
    margin: 1.25rem 0 0;
  }
  ul {
    list-style: none;
    padding-left: 0;
    margin: 0;
  }
  a {
    white-space: nowrap;
  }
`;

const SidebarColumn = styled.div`
  position: relative;
  width: calc(100% - 19px);
  height: 100%;
  overflow: scroll;
  display: flex;
  flex-direction: column;
  background-color: #f2f3f3;
  padding: ${props => (props.sidebarCollapsed ? '25px' : '2rem')};
  transition: 0.6s;
  > * {
    left: ${props => (props.sidebarCollapsed ? '-300px' : '0')};
    opacity: ${props => (props.sidebarCollapsed ? '0' : '1')};
  }
`;

const SidebarTrayHandle = styled.div`
  position: absolute;
  right: 0;
  background-color: white;
  box-sizing: border-box;
  height: 100%;
  border-left: 1px solid lightgray;
  transition: all 0.3s;
  &:hover {
    border-left: solid 1px #e1c933;
    color: #e1c933;
    cursor: pointer;
  }
`;

const ToggleChevron = styled(FaChevronLeft)`
  margin-top: 50vh;
  ${props =>
    props.sidebarcollapsed === 'true'
      ? `
    transform: rotate(180deg);
    `
      : ``};
`;

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
