import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const StyledUl = styled.ul`
  && {
    margin-bottom: 2.25rem;
    h4 {
      margin: 0;
      color: grey;
    }
  }
  li {
    margin-bottom: 0.5rem;
    display: flex;
    align-items: center;
    position: relative;
  }
  li:not(:first-child) h4 {
    margin-top: 1.25rem;
  }
  a {
    text-decoration: none;
    margin-left: 20px;
    &:hover {
      text-decoration: underline;
    }
  }
  a[aria-current='page'] {
    font-weight: bold;
    &:before {
      content: '>';
      position: absolute;
      left: 0;
    }
  }
`;

const LinkList = ({ items, basePath }) => (
  <nav className="link-list">
    <StyledUl>
      {items.map(item => {
        if (item.isHeading) {
          return (
            <li key={item.id}>
              <h4>
                {item.path && <NavLink to={item.path}>{item.title}</NavLink>}
                {!item.path && item.title}
              </h4>
            </li>
          );
        }
        const path = item.path ? item.path : `${basePath}${item.id}`;
        return (
          <li key={item.id}>
            <NavLink to={path} className="h5" exact>
              {item.title}
            </NavLink>
          </li>
        );
      })}
    </StyledUl>
  </nav>
);

LinkList.defaultProps = {
  basePath: '',
};

LinkList.propTypes = {
  basePath: PropTypes.string,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
      path: PropTypes.string,
    }),
  ).isRequired,
};

export default LinkList;
