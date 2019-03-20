module.exports = {
  $schema: 'http://json-schema.org/draft-07/schema',
  title: 'Call To Action',
  type: 'object',
  description:
    "This 'Call To Action' is designed to specifically encourage the user to contact Basalt.",
  required: [
    'header_text',
    'address_one',
    'address_two',
    'address_link',
    'telephone',
  ],
  properties: {
    header_text: {
      title: 'Header Text',
      type: 'string',
      default: 'Get In Touch',
    },
    address_one: {
      title: 'Address Line One',
      type: 'string',
      default: '524 E Burnside Street Suite 430',
    },
    address_two: {
      title: 'Address Line Two',
      type: 'string',
      default: 'Portland, OR 97214',
    },
    address_link: {
      title: 'Address Maps Link',
      type: 'string',
      default:
        'https://www.google.com/maps/place/524+E+Burnside+St+%23430,+Portland,+OR+97214/@45.5227687,-122.6623515,17z',
    },
    telephone: {
      title: 'Telephone',
      type: 'string',
      default: '503-206-6778',
    },
  },
  examples: [
    {
      header_text: 'Get In Touch',
      address_one: '524 E Burnside Street Suite 430',
      address_two: 'Portland, OR 97214',
      address_link:
        'https://www.google.com/maps/place/524+E+Burnside+St+%23430,+Portland,+OR+97214/@45.5227687,-122.6623515,17z',
      telephone: '503-206-6778',
    },
  ],
};
