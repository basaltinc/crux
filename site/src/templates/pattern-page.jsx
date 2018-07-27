import React from 'react';
import PropTypes from 'prop-types';
import Page from './page';
import LinkList from '../components/link-list';
import { components } from '../../data';

// @todo think of a way to not have these be hard coded, then implement that brilliant idea
const perceptualPatternsList = [
  {
    name: 'Colors',
    id: 'colors',
    path: `/patterns/colors`,
  },
  {
    name: 'Animations',
    id: 'animations',
    path: `/patterns/animations`,
  },
  {
    name: 'Spacings',
    id: 'spacings',
    path: '/patterns/spacings',
  },
  {
    name: 'Breakpoints',
    id: 'breakpoints',
    path: '/patterns/breakpoints',
  },
  {
    name: 'Typography',
    id: 'typography',
    path: '/patterns/typography',
  },
  {
    name: 'Components',
    id: 'components',
    isHeading: true,
    path: '/patterns/components',
  },
];
// linkItems is an array of menu items hardcoded together with imported data on components
const linkItems = perceptualPatternsList.concat(
  components.map(component => ({
    name: component.title,
    id: component.id,
    path: `/patterns/components/${component.id}`,
  })),
);

const PatternPage = props => (
  <Page sidebarOne={<LinkList items={linkItems} />}>{props.children}</Page>
);

PatternPage.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PatternPage;
