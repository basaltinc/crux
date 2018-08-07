import React from 'react';
import PropTypes from 'prop-types';
import Page from './page';
import LinkList from '../components/link-list';

const aboutLinks = [
  {
    path: '/about',
    name: 'Get Started',
    id: 'about',
  },
  {
    path: '/about/release-notes',
    name: 'Release Notes',
    id: 'release-notes',
  },
  {
    path: '/about/whats-next',
    name: "What's next",
    id: 'whats-next',
  },
  {
    path: '/about/bugs',
    name: 'Bugs and Issues',
    id: 'bugs',
  },
  {
    path: '/about/feature-requests',
    name: 'Feature Requests',
    id: 'feature-requests',
  },
];

const AboutPage = props => (
  <Page sidebarOne={<LinkList items={aboutLinks} />}>{props.children}</Page>
);

AboutPage.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AboutPage;
