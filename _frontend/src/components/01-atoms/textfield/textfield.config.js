module.exports = {
  title: 'Textfield',
  status: 'wip',
  variants: [
    {
      name: 'Text',
      context: {
      },
    },
    {
      name: 'Button',
      context: {
        button: {
          text: 'Submit',
        },
      },
    },
    {
      name: 'Email',
      context: {
        type: 'email',
        placeholder: 'Email',
      },
    },
    {
      name: 'Secondary',
      context: {
        style: 'secondary',
      },
    },
    {
      name: 'Secondary Button',
      context: {
        style: 'secondary',
        button: {
          text: 'Submit',
        },
      },
    },
  ],
};
