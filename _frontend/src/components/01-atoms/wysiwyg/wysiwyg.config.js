module.exports = {
  title: 'WYSIWYG',
  status: 'ready',
  meta: {
    col: 'col-12 col-lg-6',
  },
  variants: [
    {
      name: 'Basic',
      context: {
        text: '<h1>H1 title</h1><h2>H2 title</h2><h3>H3 title</h3><ol><li>This is an ordered list</li><li>This is an ordered list</li><li>This is an ordered list</li></ol><ul><li>This is an unordered list</li><li>This is an unordered list</li><li>This is an unordered list</li></ul><p>This is a paragraph element - Lorem ipsum dolor sit amet, consectetur <a href="#">This is a link example</a> adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. <strong>This is strong text</strong> Aliquam etiam erat velit scelerisque in dictum non consectetur. Laoreet non curabitur gravida arcu ac tortor dignissim convallis. </p> <blockquote>Blockquote example. Lorem ipsum sit dolores.</blockquote>', // eslint-disable-line max-len
      },
    },
  ],
};
