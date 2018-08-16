import express from 'express';
import bodyParser from 'body-parser';
import { join } from 'path';
import api from './api';

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

app.listen(port, () =>
  console.log(`Express listening on http://localhost:${port}`),
);
