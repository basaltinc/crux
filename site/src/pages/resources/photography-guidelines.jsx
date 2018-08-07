import React from 'react';

import ResourcePage from '../../templates/resources-page';
import PhotographyExamples from '../../../../images/photog-examples.png';

function LogoUsage() {
  return (
    <ResourcePage>
      <h3 className="eyebrow">Resources</h3>
      <h2>Photography Guidelines</h2>
      <p>
        Photography is a powerful tool in telling a story within your brand
        materials. To evoke a sense of wonder and adventure and still feel
        relatable modern, and relevant to the service and industry Basalt is
        part of I suggest using a combination of photos that depict the natural
        world, photos that use repetitive geometric and natural patterns, and
        photos that depict a potential user in situation.
      </p>
      <img src={PhotographyExamples} alt="Examples of proper photography use" />
    </ResourcePage>
  );
}

LogoUsage.propTypes = {};

export default LogoUsage;
