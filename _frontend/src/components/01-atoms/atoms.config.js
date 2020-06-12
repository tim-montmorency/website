const sass = require('node-sass');
const sassExtract = require('sass-extract');

const variables = sassExtract.extractSync(sass.renderSync({ file: './src/styles/abstracts/_variables.scss' }));
const themes = Object.keys(variables.global.$themes.value);

module.exports = {
  prefix: 'atom',
  collated: true,
  collator(markup, item) {
    return `
      <div style="color: #535363; padding: 20px; text-transform: capitalize;">${item.name}</div>
      <div class="d-flex flex-wrap">
        ${themes.map((theme) => `<div class="theme theme--${theme}" style="padding: 20px;">${markup}</div>`).join('')}
      </div>
      <hr style="margin: 0;">
    `;
  },
};
