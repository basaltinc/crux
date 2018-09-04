const { image, paragraph, title } = require('@basalt/demo-data');

module.exports = {
  $schema: 'http://json-schema.org/draft-07/schema',
  title: 'Blog Teaser',
  type: 'object',
  description: 'A block with a title, text, and CTA.',
  properties: {
    title: {
      type: 'string',
      title: 'Blog Post Title',
    },
    author: {
      title: 'Blog Author',
      type: 'string',
      description: 'Author of the blog post',
    },
    teaser_avatar: {
      title: 'Teaser Avatar',
      type: 'string',
      description: 'Image source for an avatar',
    },
    date: {
      title: 'Date',
      type: 'string',
      description: 'Date of publication to be displayed',
    },
    summary: {
      title: 'Summary',
      type: 'string',
      description: 'Teaser text summary of blog post',
    },
    image: {
      type: 'string',
      title: 'Image',
      description: 'An image to go with the blog post teaser',
    },
    is_even: {
      type: 'boolean',
      title: 'Is Even',
      description:
        'For alternating collections of blog teasers, allows even and odd blog teaser be styled separately',
    },
  },
  examples: [
    {
      title: 'A Tale of Two Lego Cities',
      author: 'Nam Ho',
      teaser_avatar: '/assets/images/avatar-example2.jpg',
      date: 'November 8, 2017',
      summary:
        "You don't re-make a set of Legos every time you build a castle. We believe building for the web should be no different.",
      image: '/assets/images/legos.jpg',
      is_even: true,
    },
    {
      title: title(),
      author: 'John Doe',
      teaser_avatar: image(),
      date: 'January 1st, 2000',
      summary: paragraph(),
      image: image(),
      is_even: true,
    },
  ],
};
