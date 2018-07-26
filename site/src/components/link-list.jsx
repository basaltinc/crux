import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';

const LinkList = ({ items }) => (
  <nav className="link-list">
    <ul>
      {items.map(item => (
        <li key={item.id}>
          <Link to={item.path}>{item.name}</Link>
        </li>
      ))}
    </ul>
  </nav>
);

LinkList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
      path: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default LinkList;
