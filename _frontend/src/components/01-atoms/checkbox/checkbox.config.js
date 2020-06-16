module.exports = {
  title: 'Checkbox',
  status: 'wip',
  variants: [
    {
      name: 'Unchecked',
      context: {
        text: 'Unchecked',
      },
    },
    {
      name: 'Checked',
      context: {
        text: 'Checked',
        checked: true,
      },
    },
    {
      name: 'Disabled',
      context: {
        text: 'Disabled',
        disabled: true,
      },
    },
  ],
};
