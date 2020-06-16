const faker = require('faker');

module.exports = {
  title: 'Title',
  status: 'wip',
  meta: {
    col: 'col-12 col-lg-6',
  },
  variants: [
    {
      name: 'h1 Regular',
      context: {
        text: faker.lorem.sentence(),
        tag: 'h1',
      },
    },
    {
      name: 'h2 Regular',
      context: {
        text: faker.lorem.sentence(),
      },
    },
    {
      name: 'h3 Regular',
      context: {
        text: faker.lorem.sentence(),
        tag: 'h3',
      },
    },
    {
      name: 'h2 Anchor',
      context: {
        text: faker.lorem.sentence(),
        anchor: true,
      },
    },
  ],
};
