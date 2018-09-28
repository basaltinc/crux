#!/usr/bin/env node
const { join } = require('path');
const BedrockPatternManifest = require('@basalt/bedrock-pattern-manifest');
const BedrockApiServer = require('@basalt/bedrock-api-server');
const {
  designTokens,
  twigRenderer,
  getExamples,
  getExample,
  setExample,
  paths,
} = require('@basalt/crux-assets');

// First cli arg starts on `2`
const port = process.argv[2] || 3042;

const patternManifest = new BedrockPatternManifest({
  patternPaths: paths.patterns,
  newPatternDir: paths.newPatternDir,
});

const apiServer = new BedrockApiServer({
  port,
  websocketsPort: 5042,
  spaIndexHtmlPath: join(__dirname, '../dist/index.html'),
  baseUrl: '/api',
  showEndpoints: true,
  designTokens,
  twigRenderer,
  patterns: {
    getPattern: patternManifest.getPattern,
    getPatterns: patternManifest.getPatterns,
    setPatternMeta: patternManifest.setPatternMeta,
    getPatternMeta: patternManifest.getPatternMeta,
    createPatternFiles: patternManifest.createPatternFiles,
  },
  examples: {
    getExamples,
    getExample,
    setExample,
  },
  sections: [
    {
      title: 'About',
      id: 'about',
      items: [
        {
          title: 'Get Started',
          id: 'get-started',
          src: join(__dirname, '../sections/about/get-started.md'),
        },
        {
          title: 'Feature Requests',
          id: 'feature-requests',
          src: join(__dirname, '../sections/about/feature-requests.md'),
        },
      ],
    },
    {
      title: 'Resources',
      id: 'resources',
      items: [
        {
          title: 'Sketch',
          id: 'sketch-assets',
          src: join(__dirname, '../sections/resources/sketch-assets.md'),
        },
        {
          title: 'Photography Guidelines',
          id: 'photography-guidelines',
          src: join(
            __dirname,
            '../sections/resources/photography-guidelines.md',
          ),
        },
        {
          title: 'Logo Downloads',
          id: 'logo-downloads',
          src: join(__dirname, '../sections/resources/logo-downloads.md'),
        },
      ],
    },
  ],
  staticDirs: [
    {
      prefix: '/',
      path: join(__dirname, '../dist'),
    },
    {
      prefix: '/',
      path: join(__dirname, '../public'),
    },
    {
      prefix: '/assets',
      path: paths.assetDir,
    },
  ],
});

patternManifest.watch(({ event, path }) => {
  // console.log('patternManifest.watch fired ', { event, path });
  apiServer.announcePatternChange({ event, path });
});

apiServer.listen();
