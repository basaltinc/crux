import express from 'express';
import bodyParser from 'body-parser';
import api from './api';

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

app.use(express.static('public2'));
app.use(express.static('../build'));

app.use('/api', api);

app.listen(3042, () =>
  console.log('Express listening on http://localhost:3042'),
);
