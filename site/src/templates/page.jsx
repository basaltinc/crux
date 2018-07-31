import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Site from '../templates/site';

// @todo Evan is working on a better way to pull in styles
import '../../../build/assets/style.css'; // eslint-disable-line

const MainStyled = styled.main`
  width: 100%;
  display: ${props =>
    props.sidebarOne || props.sidebarTwo ? 'flex' : 'block'};
  justify-content: ${props =>
    props.sidebarOne || props.sidebarTwo ? 'space-between' : 'none'};
  flex-wrap: ${props => (props.sidebarOneOnTop ? 'wrap' : 'none')};
`;

const PageContentStyled = styled.div`
  flex-grow: 1;
`;

const SidebarStyled = styled.div`
  width: 20%;
  flex-grow: 0;
  flex-shrink: 0;
  min-width: 300px;
  max-width: 450px;
  padding: 2rem;
  border-right: solid 1px black;
  h4 {
    margin: 1.25rem 0 0.25rem;
  }
  ul {
    list-style: none;
    padding-left: 10px;
    margin: 0;
  }
`;

const SidebarOneStyled = SidebarStyled.extend`
  order: -1;
  margin-right: 1rem;
  ${props => props.sidebarOneOnTop ? `
    width: 100%;
    max-width: 100%;
    border-right: 0;
    border-bottom: solid 1px black;
    ul {
      display: flex;
      align-items: center;
      li {
        margin: 5px 5px 5px 0;
      }
      * {
        margin: 0;
      }
    }
  ` : ''}
`;

const SidebarTwoStyled = SidebarStyled.extend`
  order: 1;
  margin-left: 1rem;
`;

class Page extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sidebarOneOnTop: props.sidebarOneOnTop,
    };
  }

  render() {
    return (
      <Site>
        <MainStyled {...this.props} sidebarOneOnTop={this.state.sidebarOneOnTop}>
          <PageContentStyled>{this.props.children}</PageContentStyled>
          {this.props.sidebarOne && (
            <SidebarOneStyled {...this.state}>
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
            </SidebarOneStyled>
          )}
          {this.props.sidebarTwo && (
            <SidebarTwoStyled {...this.state}>
              {this.props.sidebarTwo}
            </SidebarTwoStyled>
          )}
        </MainStyled>
      </Site>
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
