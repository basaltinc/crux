const { image, paragraph, text } = require('@basalt/demo-data');
const schema = require('./exec-bio-schema.json');

schema.examples = [
  {
    is_even: true,
    avatar: '/assets/images/chris-strahl.jpg',
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
];

const meta = {
  id: 'exec-bio',
  title: 'Executive Bio',
  type: 'component',
  templates: [
    {
      name: '@components/_exec-bio.twig',
      selector: '.exec-bio',
      schema,
    },
  ],
};

module.exports = {
  meta,
};
