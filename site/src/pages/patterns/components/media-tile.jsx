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

const mediaTile = components.find(
  component => component.title === 'Media Tile',
);

const ComponentsPage = () => (
  <Page
    sidebarOne={
      <LinkList
        items={components.map(component => ({ name: component.title }))}
      />
    }
  >
    <Overview {...mediaTile} />
  </Page>
);

export default ComponentsPage;
