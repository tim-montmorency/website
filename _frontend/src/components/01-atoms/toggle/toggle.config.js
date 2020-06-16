module.exports = {
  title: 'Toggle',
  status: 'wip',
  meta: {
    col: 'col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2',
  },
  variants: [
    {
      name: 'No text',
    },
    {
      name: 'Text',
      context: {
        text: 'Text',
      },
    },
    {
      name: 'Checked',
      context: {
        text: 'Text',
        checked: true,
      },
    },
    {
      name: 'Disabled',
      context: {
        text: 'Text',
        disabled: true,
      },
    },
    {
      name: 'Checked disabled',
      context: {
        text: 'Text',
        disabled: true,
        checked: true,
      },
    },
  ],
};
