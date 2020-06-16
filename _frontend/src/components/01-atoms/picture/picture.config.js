module.exports = {
  title: 'Picture',
  meta: {
    col: 'col-12 col-md-6 col-lg-4 col-xl-3',
  },
  variants: [
    {
      name: 'Basic',
      context: {
        alt: 'Picture alternative text',
        src: 'https://source.unsplash.com/random/992x992',
      },
    },
    {
      name: 'Not lazy',
      context: {
        alt: 'Picture alternative text',
        src: 'https://source.unsplash.com/random/992x992',
        lazy: false,
      },
    },
    {
      name: 'Multiple sizes',
      context: {
        alt: 'Picture alternative text',
        src: [
          {
            src: 'https://source.unsplash.com/random/1024x990',
            condition: 1024,
          },
          {
            src: 'https://source.unsplash.com/random/992x992',
            condition: 992,
          },
        ],
      },
    },
    {
      name: 'Different orientations',
      context: {
        alt: 'Picture alternative text',
        src: [
          {
            src: 'https://source.unsplash.com/random/800x400',
            condition: 'landscape',
          },
          {
            src: 'https://source.unsplash.com/random/400x800',
            condition: 'portrait',
          },
        ],
      },
    },
  ],
};
