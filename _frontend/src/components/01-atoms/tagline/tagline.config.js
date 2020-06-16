const faker = require('faker');

module.exports = {
  title: 'Tagline',
  status: 'wip',
  variants: [
    {
      name: 'Basic',
      context: {
        text: faker.lorem.words(),
      },
    },
    {
      name: 'Strong tag',
      context: {
        tag: 'strong',
        text: faker.lorem.words(),
      },
    },
  ],
};
