const { image, paragraph, text } = require('@basalt/demo-data');

module.exports = {
  $schema: 'http://json-schema.org/draft-07/schema',
  title: 'Executive Bio',
  type: 'object',
  description:
    'The Executive Bio a UI component designed to profile members of the executive team.',
  properties: {
    is_even: {
      title: 'Is Even',
      type: 'boolean',
      description:
        'Used to define if its an even or odd member of a list of executive bios.',
    },
    avatar: {
      title: 'Avatar Image',
      type: 'string',
      description:
        'Url string for an image asset. An avatar image of the person being profiled.',
    },
    name: {
      title: 'Name',
      type: 'string',
      description: 'Name of the executive',
    },
    twitter: {
      title: 'Twitter Handle',
      type: 'string',
      description: 'Twitter handle. If provided, generates a link to twitter.',
    },
    bio: {
      title: 'Biography',
      type: 'string',
      description: 'A brief biography of the individual being profiled',
    },
  },
  examples: [
    {
      is_even: true,
      avatar: '/images/chris-strahl.jpg',
      name: 'Chris Strahl',
      twitter: 'chrisstrahl',
      bio:
        "Chris is Basalt's change management expert. He helps enterprise-level clients incept the right technology strategies, combining long-range business foresight and technical expertise to help organizations adapt, evolve, plan, and optimize value from the systems they use. He has worked with Major League Soccer, the US Department of Defense, NBC, Twitter, Time Inc., Apple, and many others. As an expert digital strategist, Chris loves working consultatively with clients to build design systems that integrate creative teams, decrease time-to-market, and safeguard brand consistency.",
    },
    {
      is_even: true,
      avatar: image(),
      name: text(),
      twitter: 'Basaltian',
      bio: paragraph(),
    },
  ],
};
