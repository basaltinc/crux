import React from 'react';
import PropTypes from 'prop-types';
import Page from '../../../templates/page';
import { components } from '../../../../data';

const LinkList = ({ items }) => (
  <nav className="link-list">
    <ul>{items.map(item => <li>{item.name}</li>)}</ul>
  </nav>
);

LinkList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

const ComponentsPage = () => (
  <Page
    sidebarOne={
      <LinkList
        items={components.map(component => ({ name: component.title }))}
      />
    }
  >
    <div>
      {/* @todo temp fix - refactor templates to allow for pages w/o sidebars */}
      <h2>Welcome to the Design System!</h2>
    </div>
  </Page>
);

export default ComponentsPage;
