const express = require('express');
const bodyParser = require('body-parser');
const WebSocket = require('ws');
const urlJoin = require('url-join');
const fs = require('fs-extra');

class BedrockApiServer {
  // @todo define structure of `userConfig`
  constructor(userConfig) {
    this.config = userConfig;
    this.endpoints = [];

    this.app = express();

    this.app.use(bodyParser.json());

    this.app.use((req, res, next) => {
      res.header('Access-Control-Allow-Origin', '*');
      res.header(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept',
      );
      next();
    });

    if (this.config.staticDirs) {
      this.config.staticDirs.forEach(staticDir =>
        this.app.use(staticDir.prefix, express.static(staticDir.path)),
      );
    }

    this.app.get('/', (req, res) => {
      res.json({
        ok: true,
        message: 'Welcome to the API!',
      });
    });

    if (this.config.designTokens) {
      this.config.designTokens.forEach(designToken => {
        const url = urlJoin(
          this.config.baseUrl,
          'design-token',
          designToken.id,
        );
        // console.log(`Setting up "${url}" api endpoint...`);
        this.registerEndpoint(url);
        this.app.get(url, async (req, res) => {
          const response = await designToken.get(req.query);
          // console.log(`Responding on "${url}" api endpoint with: `, response);
          res.send(response);
        });
      });

      const url2 = urlJoin(this.config.baseUrl, 'design-tokens');
      this.registerEndpoint(url2);
      this.app.get(url2, async (req, res) => {
        res.send(this.config.designTokens);
      });
    }

    if (this.config.twigRenderer) {
      const url = urlJoin(this.config.baseUrl, '/render-twig');
      // console.log(`Setting up "${url}" api endpoint...`);
      this.registerEndpoint(url, 'POST');
      this.app.post(url, async (req, res) => {
        const { body } = req;
        const { type } = req.query;
        if (!type) {
          console.error('Error: not enough info to render twig template');
          res.status(400).send({
            ok: false,
            message: 'Request not formatted correctly.',
          });
        }

        let results;
        switch (type) {
          case 'renderString':
            results = await this.config.twigRenderer.renderString(
              body.template,
              body.data,
            );
            break;
          case 'renderFile':
            results = await this.config.twigRenderer.render(
              body.template,
              body.data,
            );
            break;
          default:
            results = {
              ok: false,
              message: 'No valid "type" of request sent.',
            };
        }

        res.json(results);
      });
    }

    if (this.config.patterns) {
      const { getPatternMeta, getPatterns } = this.config.patterns;
      const url1 = urlJoin(this.config.baseUrl, 'pattern-meta/:id');
      this.registerEndpoint(url1);
      this.app.get(url1, async (req, res) => {
        const results = await getPatternMeta(req.params.id);
        res.send(results);
      });

      const url2 = urlJoin(this.config.baseUrl, 'patterns/:type');
      this.registerEndpoint(url2);
      this.app.get(url2, async (req, res) => {
        const results = await getPatterns(req.params.id);
        res.send(results);
      });
    }

    if (this.config.examples) {
      const { getExamples, getExample, setExample } = this.config.examples;
      const url1 = urlJoin(this.config.baseUrl, '/example/:id');
      this.registerEndpoint(url1);
      this.app.get(url1, async (req, res) => {
        try {
          const example = await getExample(req.params.id);
          res.send({
            ok: true,
            example,
          });
        } catch (error) {
          if (error.code === 'ENOENT') {
            res.send({
              ok: false,
              message: `Example "${req.params.id}" not found.`,
            });
          } else {
            res.send({
              ok: false,
              message: error.toString(),
            });
          }
        }
      });

      const url2 = urlJoin(this.config.baseUrl, '/example/:id');
      this.registerEndpoint(url2, 'POST');
      this.app.post(url2, async (req, res) => {
        const results = await setExample(req.params.id, req.body);
        res.send(results);
      });

      const url3 = urlJoin(this.config.baseUrl, '/examples');
      this.registerEndpoint(url3);
      this.app.get(url3, async (req, res) => {
        const results = await getExamples();
        res.send(results);
      });
    }

    if (this.config.sections) {
      this.config.sections.forEach(section => {
        const url = urlJoin(this.config.baseUrl, `section/${section.id}/:id`);
        this.registerEndpoint(url);
        this.app.get(url, async (req, res) => {
          const item = section.items.find(x => x.id === req.params.id);
          if (!item) {
            res.send({
              ok: false,
              message: `Item ${req.params.id} not found`,
            });
          }
          const contents = await fs.readFile(item.src, 'utf8');
          res.send({
            ok: true,
            data: {
              ...item,
              contents,
            },
          });
        });
      });
    }

    const url2 = urlJoin(this.config.baseUrl, 'sections');
    this.registerEndpoint(url2);
    this.app.get(url2, async (req, res) => {
      const { sections = [] } = this.config;
      res.send(sections);
    });

    if (this.config.websocketsPort) {
      this.wss = new WebSocket.Server({
        port: this.config.websocketsPort,
        clientTracking: true,
      });
    }
  }

  static getExpress() {
    return express;
  }

  getApp() {
    return this.app;
  }

  registerEndpoint(pathname, method = 'GET') {
    this.endpoints.push({
      pathname,
      method,
    });
  }

  announcePatternChange(data) {
    if (!this.wss) {
      console.error(
        'Attempted to fire "announcePatternChange" but no WebSockets Server setup due to lack of "websocketsPort" in config',
      );
      return false;
    }
    // console.log('announcePatternChange...');
    this.wss.clients.forEach(client => {
      if (client.readyState === WebSocket.OPEN) {
        client.send(JSON.stringify(data));
      }
    });
  }

  listen() {
    const { app, config, endpoints } = this;
    const { showEndpoints, port } = config;
    // console.log({ endpoints });
    app.listen(port, () => {
      console.log(
        `Express listening on http://localhost:${port}`,
        showEndpoints ? 'Available endpoints:' : null,
      );
      if (showEndpoints) {
        console.log(
          endpoints.map(e => ` ${e.pathname} (${e.method})`).join('\n'),
        );
      }
    });
  }
}

module.exports = BedrockApiServer;
