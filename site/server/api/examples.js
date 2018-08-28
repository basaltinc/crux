import express from 'express';
import { getExample } from '../data/examples';

const router = express.Router();

router.get('/:id', async (req, res) => {
  const results = await getExample(req.params.id);
  res.send(results);
});

export default router;
