import express from 'express';
import { getExample, getExamples } from '../data/examples';

const router = express.Router();

router.get('/example/:id', async (req, res) => {
  const results = await getExample(req.params.id);
  res.send(results);
});

router.get('/examples', async (req, res) => {
  const results = await getExamples();
  res.send(results);
});

export default router;
