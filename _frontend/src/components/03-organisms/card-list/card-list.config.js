const faker = require('faker');
const times = require('lodash/times');

const card = () => {
  const r = Math.floor(Math.random() * 100);

  return {
    image: {
      alt: faker.lorem.words(),
      sources: {
        xl: `https://picsum.photos/218/218?random=${r}`,
        lg: `https://picsum.photos/227/227?random=${r}`,
        sm: `https://picsum.photos/351/351?random=${r}`,
        xs: `https://picsum.photos/415/415?random=${r}`,
      },
    },
    title: faker.company.catchPhrase(),
    subtitle: faker.commerce.department(),
    description: faker.lorem.sentence(),
    link: {
      href: '#',
      text: faker.lorem.words(),
    },
  };
};

module.exports = {
  title: 'Card List',
  context: {
    modifiers: null,
    title: 'Card List Title',
    descriptions: 'Card List Description',
    items: times(12, card),
  },
};
