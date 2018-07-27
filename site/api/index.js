import express from 'express';
import { getColors } from '../data/colors';
import { getBreakpoints } from '../data/breakpoints';
import { getSpacings } from '../data/spacings';
import { getTransitions } from '../data/animations';
import { getFontFamilies, getFontSizes } from '../data/typography';
import twigRenderer from '../twig';

const router = express.Router();

// all routes in here have a `/api` prefix
// all routes MUST be documented using `apidoc` - http://apidocjs.com
// docs viewable at http://localhost:3042/apidoc/ (link in site footer)

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

/**
 * @api {get} /api/colors Get Colors
 * @apiName GetColors
 * @apiGroup Tokens
 *
 * @apiSuccess {Array} Colors
 */
router.get('/colors', async (req, res) => {
  const colors = await getColors();
  res.send(colors);
});

router.get('/breakpoints', async (req, res) => {
  const breakpoints = await getBreakpoints();
  res.send(breakpoints);
});

router.get('/spacings', async (req, res) => {
  const spacings = await getSpacings();
  res.send(spacings);
});

router.get('/font-sizes', async (req, res) => {
  const fontsizes = await getFontSizes();
  res.send(fontsizes);
});

router.get('/font-families', async (req, res) => {
  const fontfamilies = await getFontFamilies();
  res.send(fontfamilies);
});

router.get('/transitions', async (req, res) => {
  const transitions = await getTransitions();
  res.send(transitions);
});

export default router;
