import React from 'react';
import PatternPage from '../../../templates/pattern-page';
import Overview from '../../../components/overview';
import { components } from '../../../../data';

const hero = components.find(component => component.title === 'Hero');

const ComponentsPage = () => (
  <PatternPage>
    <Overview {...hero} />
  </PatternPage>
);

export default ComponentsPage;
