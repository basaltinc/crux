import express from 'express';
import WebSocket from 'ws';
import bodyParser from 'body-parser';
import { join } from 'path';
import api from './api';
import events, { eventNames } from './server/events';
import { isDevMode, websocketsPort } from './config';

const port = process.env.PORT || 3042;
const app = express();
app.use(bodyParser.json());

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept',
  );
  next();
});

app.use(express.static('../source/dist'));
app.use(express.static('dist'));
app.use(express.static('public'));
app.use(express.static('public2'));

app.use('/api', api);

app.get('*', (req, res) => {
  res.sendFile(join(__dirname, 'public/index.html'));
});

if (isDevMode) {
  const wss = new WebSocket.Server({
    port: websocketsPort,
  });

  wss.on('connection', ws => {
    // console.log('websocket server connection received');
    // ws.on('message', message => {
    //   console.log('received: %s', message);
    // });

    events.on(eventNames.PATTERN_CHANGED, event => {
      // console.log(path, `ws.readyState: ${ws.readyState}`);
      if (ws.readyState === 1) {
        ws.send(JSON.stringify(event));
      }
    });
  });
}

app.listen(port, () =>
  console.log(`Express listening on http://localhost:${port}`),
);
