module.exports = {
  $schema: 'http://json-schema.org/draft-07/schema',
  title: 'Content Tile',
  type: 'object',
  description: "Used for displaying a snippet of blog, resource or podcast content.",
  required: ['header'],
  properties: {
    metaInfo: {
      title: 'Top Meta Info',
      type: 'string',
      description:
        'Light information anchored at the very top, for providing meta context.',
    },
    metaDate: {
      title: 'Top Meta Date (optional)',
      type: 'string',
    },
    header: {
      title: 'Header Text',
      type: 'string',
    },
    headingLevel: {
      title: 'Heading Level',
      type: 'number',
      default: 3,
      description:
        'Set the heading level (1-6) so that the heading fits properly in the dom header tree.'
    },
    thumbnailImgUrl: {
      title: 'Thumbnail Image URL',
      type: 'string',
    },
    snippet: {
      title: 'Content Snippet',
      type: 'string',
      description:
        'Content snippet shown below the thumbnail image. Max character length of 200 (truncated if longer).'
    },
    link: {
      title: 'Content Link',
      type: 'string',
    },
  }
};
