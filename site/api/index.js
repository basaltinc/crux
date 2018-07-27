import express from 'express';
import { getColors } from '../data/colors';
import twigRenderer from '../twig';

const router = express.Router();
// all routes in here have a `/api` prefix

router.get('/', (req, res) => {
  res.json({
    ok: true,
    message: 'Welcome to the API!',
  });
});

router.post('/render-twig', async (req, res) => {
  const { body } = req;
  const { templatePath } = req.query;
  if (!templatePath || !body) {
    console.error('Error: not enough info to render twig template');
    res.status(400).send({
      ok: false,
      message: 'Request not formatted correctly.',
    });
  }

  const results = await twigRenderer.render(templatePath, body);
  // console.log(results);
  res.json(results);
});

router.get('/colors', async (req, res) => {
  const colors = await getColors();
  res.send(colors);
});

export default router;
