module.exports = {
  name: 'button',
  context: {
    text: 'Button Text',
  },
  variants: [
    {
      name: 'Disabled',
      context: {
        disabled: true,
      },
    },
    {
      name: 'External',
      context: {
        href: '#',
        target: '_blank',
      },
    },
    {
      name: 'Internal',
      context: {
        href: '#',
      },
    },
  ],
};
