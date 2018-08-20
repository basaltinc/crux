import React from 'react';
import styled from 'styled-components';

import { TwoUp } from '@basalt/bedrock-atoms';

const logos = [
  {
    fileName: 'main',
    importName: '/assets/images/logos/main.png',
  },
  {
    fileName: 'black-grey',
    importName: '/assets/images/logos/black-grey.png',
  },
  {
    fileName: 'black-only',
    importName: '/assets/images/logos/black-only.png',
  },
  {
    fileName: 'white-color',
    importName: '/assets/images/logos/white-color.png',
  },
  {
    fileName: 'white-grey',
    importName: '/assets/images/logos/white-grey.png',
  },
  {
    fileName: 'white',
    importName: '/assets/images/logos/white.png',
  },
  {
    fileName: 'icon-black-grey',
    importName: '/assets/images/logos/icon-black-grey.png',
  },
  {
    fileName: 'icon-black',
    importName: '/assets/images/logos/icon-black.png',
  },
  {
    fileName: 'icon-color',
    importName: '/assets/images/logos/icon-color.png',
  },
  {
    fileName: 'icon-white-color',
    importName: '/assets/images/logos/icon-white-color.png',
  },
  {
    fileName: 'icon-white-grey',
    importName: '/assets/images/logos/icon-white-grey.png',
  },
  {
    fileName: 'icon-white',
    importName: '/assets/images/logos/icon-white.png',
  },
];
const basePath = '../../../../images/logos/';

const DemoLogoBox = styled.div`
  border: dotted 1px #ccc;
  padding: 0.5rem;
  img {
    background-color: hsl(0, 0%, 90%);
    transition: all ease-in 0.2s;
    &:hover {
      background-color: hsl(0, 0%, 10%);
    }
  }
`;

function downloadTiles() {
  return logos.map(logo => (
    <DemoLogoBox key={logo.fileName}>
      <p>
        <b>{logo.fileName}</b>
      </p>
      <img src={logo.importName} alt={`${logo.fileName}`} />
      <br />
      <br />
      <span>Download: </span>
      <a
        href={`${basePath}${logo.fileName}.svg`}
        target="_blank"
        rel="noopener noreferrer"
      >
        SVG
      </a>
      &nbsp;&nbsp;
      <a
        href={`${basePath}${logo.fileName}.png`}
        target="_blank"
        rel="noopener noreferrer"
      >
        PNG
      </a>
    </DemoLogoBox>
  ));
}

function LogoDownloads() {
  return (
    <div>
      <h3 className="eyebrow">Resources</h3>
      <h2>Logo Downloads</h2>
      <TwoUp>
        <div>
          <h4>Main Logo Permalinks</h4>
          <ul>
            <li>
              200px wide:{' '}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="http://files.basalt.io/logos/main--200.png"
              >
                http://files.basalt.io/logos/main--200.png
              </a>
            </li>
            <li>
              500px wide:{' '}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="http://files.basalt.io/logos/main--500.png"
              >
                http://files.basalt.io/logos/main--500.png
              </a>
            </li>
            <li>
              1000px wide:{' '}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="http://files.basalt.io/logos/main--1000.png"
              >
                http://files.basalt.io/logos/main--1000.png
              </a>
            </li>
            <li>
              ~1700px{' '}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="wide: http://files.basalt.io/logos/main.png"
              >
                wide: http://files.basalt.io/logos/main.png
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4>Main Icon Permalinks</h4>
          <ul>
            <li>
              25px wide:{' '}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="http://files.basalt.io/logos/icon--25.png"
              >
                http://files.basalt.io/logos/icon--25.png
              </a>
            </li>
            <li>
              50px wide:{' '}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="http://files.basalt.io/logos/icon--50.png"
              >
                http://files.basalt.io/logos/icon--50.png
              </a>
            </li>
            <li>
              100px wide:{' '}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="http://files.basalt.io/logos/icon--100.png"
              >
                http://files.basalt.io/logos/icon--100.png
              </a>
            </li>
            <li>
              200px wide:{' '}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="http://files.basalt.io/logos/icon--200.png"
              >
                http://files.basalt.io/logos/icon--200.png
              </a>
            </li>
            <li>
              500px wide:{' '}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="http://files.basalt.io/logos/icon--500.png"
              >
                http://files.basalt.io/logos/icon--500.png
              </a>
            </li>
          </ul>
        </div>
      </TwoUp>
      <h4>Downloadable Logo Resources</h4>
      <p>
        Each logo is shown with a light gray background color, though the file
        does not contain it. Hover over to view with a dark gray background.
        This is only for helping to pick a logo with strong contrast.
      </p>

      <div
        className="smart-grid"
        data-row-items-small="2"
        data-row-items-large="3"
      >
        {downloadTiles()}
      </div>
    </div>
  );
}

LogoDownloads.propTypes = {};

export default LogoDownloads;
