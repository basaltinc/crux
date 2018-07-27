import express from 'express';
import {
  getColors,
  getBreakpoints,
  getSpacings,
  getTransitions,
  getFontFamilies,
  getFontSizes,
  getPatterns,
  getPatternInfo,
} from '../data';
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

/**
 * @api {post} /api/render-twig Render Twig
 * @apiParam (Query String) {String} templatePath Path to template
 * @apiParam (Body) {json} data Data to pass to template
 * @apiExample {js} Example Request for Button
 *    fetch('/api/render-twig?templatePath=@components/_button.twig'), {
 *       method: 'POST',
 *       body: JSON.stringify({
 *         text: 'Click to read more',
 *       }),
 *       headers: {
 *         'Content-Type': 'application/json',
 *       },
 *     },
 *   )
 *   .then(res => res.json())
 *   .then(results => {
 *      if (results.ok) {
 *        const { html } = results;
 *      } else {
 *        const { message } = results;
 *      }
 *    });
 * @apiName RenderTwig
 * @apiGroup Patterns
 * @apiSuccessExample Success Response
 *   {
 *     "ok": true,
 *     "html": "<p>The rendered template</p>"
 *   }
 * @apiErrorExample Error Resopnse
 *   {
 *     "ok": false,
 *     "message": "Here is what went wrong"
 *   }
 * @apiSuccess {Object} Render Result
 * @apiSampleRequest off
 */
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
  res.json(results);
});

/**
 * @api {get} /api/pattern-info/:type/:id Get Pattern Info
 * @apiParam {String="styleguide","layouts","components","templates"} type Pattern Type
 * @apiParam {String} id Pattern ID i.e. `media-block`
 * @apiName GetPatternInfo
 * @apiGroup Patterns
 * @apiDescription Returns info about a pattern
 * @apiSuccess {Object} Pattern Info
 */
router.get('/pattern-info/:type/:id', async (req, res) => {
  const results = await getPatternInfo(req.params.id, {
    type: req.params.type,
  });
  res.send(results);
});

/**
 * @api {get} /api/patterns/:type Get Patterns Info
 * @apiParam {String="styleguide","layouts","components","templates"} type Pattern Type
 * @apiName GetPatterns
 * @apiGroup Patterns
 * @apiDescription Returns info about all types of patterns
 * @apiSuccess {Object[]} Array of Pattern Info
 */
router.get('/patterns/:type', async (req, res) => {
  const results = await getPatterns(req.params.type);
  res.send(results);
});

/**
 * @api {get} /api/colors Get Colors
 * @apiName GetColors
 * @apiGroup Tokens
 * @apiDescription Returns an array of color design tokens
 * @apiExample {js} ES6
 fetch(`${apiUrlBase}/colors`).then(res => res.json());
 *
 * @apiSuccess {Array} Colors
 */
router.get('/colors', async (req, res) => {
  const colors = await getColors();
  res.send(colors);
});

/**
 * @api {get} /api/breakpoints Get Breakpoints
 * @apiName GetBreakpoints
 * @apiGroup Tokens
 * @apiDescription Returns an array of breakpoint design tokens
 * @apiExample {js} ES6
 fetch(`${apiUrlBase}/breakpoints`).then(res => res.json());
 *
 * @apiSuccess {Array} Breakpoints
 */
router.get('/breakpoints', async (req, res) => {
  const breakpoints = await getBreakpoints();
  res.send(breakpoints);
});

/**
 * @api {get} /api/spacings Get Spacings
 * @apiName GetSpacings
 * @apiGroup Tokens
 * @apiDescription Returns an array of spacing design tokens
 * @apiExample {js} ES6
 fetch(`${apiUrlBase}/spacings`).then(res => res.json());
 *
 * @apiSuccess {Array} Spacings
 */
router.get('/spacings', async (req, res) => {
  const spacings = await getSpacings();
  res.send(spacings);
});

/**
 * @api {get} /api/font-sizes Get Font Sizes
 * @apiName GetFontSizes
 * @apiGroup Tokens
 * @apiDescription Returns an array of font size design tokens
 * @apiExample {js} ES6
 fetch(`${apiUrlBase}/font-sizes`).then(res => res.json());
 *
 * @apiSuccess {Array} Font Sizes
 */
router.get('/font-sizes', async (req, res) => {
  const fontsizes = await getFontSizes();
  res.send(fontsizes);
});

/**
 * @api {get} /api/font-families Get Font Families
 * @apiName GetFontFamilies
 * @apiGroup Tokens
 * @apiDescription Returns an array of font family design tokens
 * @apiExample {js} ES6
    fetch(`${apiUrlBase}/font-families`).then(res => res.json());
 *
 * @apiSuccess {Array} Font Families
 */
router.get('/font-families', async (req, res) => {
  const fontfamilies = await getFontFamilies();
  res.send(fontfamilies);
});

/**
 * @api {get} /api/transitions Get Transitions
 * @apiName GetTransitions
 * @apiGroup Tokens
 * @apiDescription Returns an array of transition design tokens
 * @apiExample {js} ES6
 fetch(`${apiUrlBase}/transitions`).then(res => res.json());
 *
 * @apiSuccess {Array} Transitions
 */
router.get('/transitions', async (req, res) => {
  const transitions = await getTransitions();
  res.send(transitions);
});

export default router;
