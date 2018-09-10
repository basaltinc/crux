#!/usr/bin/env node
const BedrockApiServer = require('@basalt/bedrock-api-server');
const {
  designTokens,
  twigRenderer,
  getPatternMeta,
  getPatterns,
  getExamples,
  getExample,
  setExample,
  patternManifest,
  paths,
} = require('@basalt/crux-assets');

// First cli arg starts on `2`
const port = process.argv[2] || 3042;

const apiServer = new BedrockApiServer({
  port,
  websocketsPort: 5042,
  baseUrl: '/api',
  showEndpoints: true,
  designTokens,
  twigRenderer,
  patterns: {
    getPatternMeta,
    getPatterns,
  },
  examples: {
    getExamples,
    getExample,
    setExample,
  },
  staticDirs: [
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
