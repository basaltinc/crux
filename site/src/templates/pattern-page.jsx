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
    name: 'Components',
    id: 'components',
    isHeading: true,
  },
];

const PatternPage = props => {
  const linkItems = perceptualPatternsList
    .concat(
      components
        .map(component => ({
          name: component.title,
          id: component.id,
          path: `/patterns/components/${component.id}`,
        }))
    );

  return (
    <Page
      sidebarOne={
        <LinkList
          items={linkItems}
        />
      }
    >
      {props.children}
    </Page>
  );
}

PatternPage.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PatternPage;
