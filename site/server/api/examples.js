import express from 'express';
import { getExample, setExample, getExamples } from '../data/examples';

const router = express.Router();

router.get('/example/:id', async (req, res) => {
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

router.post('/example/:id', async (req, res) => {
  const results = await setExample(req.params.id, req.body);
  res.send(results);
});

router.get('/examples', async (req, res) => {
  const results = await getExamples();
  res.send(results);
});

export default router;
