import React from 'react';
import Page from '../../templates/page';
import LinkList from '../../components/link-list';
import { components } from '../../../data/index';

const ComponentsPage = () => (
  <Page>
    <h2>Welcome to the Design System!</h2>
    <LinkList
      items={components.map(component => ({
        name: component.title,
        id: component.id,
        path: `/patterns/components/${component.id}`,
      }))}
    />
  </Page>
);

export default ComponentsPage;
