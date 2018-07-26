import React from 'react';
import PatternPage from '../../../templates/pattern-page';
import Overview from '../../../components/overview';
import { components } from '../../../../data';

const mediaBlock = components.find(
  component => component.title === 'Media Block',
);

const MediaBlockPage = () => (
  <PatternPage>
    <Overview {...mediaBlock} />
  </PatternPage>
);

export default MediaBlockPage;
