import React from 'react';
import PatternPage from '../../../templates/pattern-page';
import Overview from '../../../components/overview';
import { components } from '../../../../data';

const mediaTile = components.find(
  component => component.title === 'Media Tile',
);

const MediaTilePage = () => (
  <PatternPage>
    <Overview {...mediaTile} />
  </PatternPage>
);

export default MediaTilePage;
