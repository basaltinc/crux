import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const generateLinkItems = items =>
  items.map(item => {
    if (item.isHeading) {
      return (
        <li key={item.id}>
          <h4>
            {item.path && <Link to={item.path}>{item.name}</Link>}
            {!item.path && item.name}
          </h4>
        </li>
      );
    }
    return (
      <li key={item.id}>
        <Link to={item.path}>{item.name}</Link>
      </li>
    );
  });

const LinkList = ({ items }) => (
  <nav className="link-list">
    <ul>{generateLinkItems(items)}</ul>
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
