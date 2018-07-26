import React from 'react';
import PropTypes from 'prop-types';
import Page from '../../../templates/page';
import Overview from '../../../components/overview';
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

const hero = components.find(component => component.title === 'Hero');

const ComponentsPage = () => (
  <Page
    sidebarOne={
      <LinkList
        items={components.map(component => ({ name: component.title }))}
      />
    }
  >
    <Overview {...hero} />
  </Page>
);

export default ComponentsPage;
