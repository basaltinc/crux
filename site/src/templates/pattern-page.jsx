import React from 'react';
import PropTypes from 'prop-types';
import Page from './page';
import LinkList from '../components/link-list';
import { components } from '../../data';

import './pattern-page.css'; // Pattern page specific styles

const PatternPage = props => (
  <Page
    sidebarOne={
      <LinkList
        items={components.map(component => ({
          name: component.title,
          id: component.id,
          path: `/patterns/components/${component.id}`,
        }))}
      />
    }
  >
    {props.children}
  </Page>
);

PatternPage.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PatternPage;
