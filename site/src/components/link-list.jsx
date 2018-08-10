import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const StyledUl = styled.ul`
  && {
    margin-bottom: 2.25rem;
    h4 {
      margin: 0 0 0.75rem -0rem;
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
    margin-top: 2.25rem;
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

const generateLinkItems = items =>
  items.map(item => {
    if (item.isHeading) {
      return (
        <li key={item.id}>
          <h4>
            {item.path && <NavLink to={item.path}>{item.name}</NavLink>}
            {!item.path && item.name}
          </h4>
        </li>
      );
    }
    return (
      <li key={item.id}>
        <NavLink to={item.path} className="h5">
          {item.name}
        </NavLink>
      </li>
    );
  });

const LinkList = ({ items }) => (
  <nav className="link-list">
    <StyledUl>{generateLinkItems(items)}</StyledUl>
  </nav>
);

LinkList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
      path: PropTypes.string,
    }),
  ).isRequired,
};

export default LinkList;
