const sass = require('node-sass');
const sassExtract = require('sass-extract');

const rendered = sass.renderSync({
  file: './src/scss/abstracts/__variables.scss',
});

const variables = sassExtract.extractSync(rendered, {
  file: './src/scss/abstracts/__variables.scss',
});

module.exports = {
  prefix: 'atom',
  preview: '@preview-blocks',
  collated: true,
  collator(markup, item) {
    let html = '';
    let itemIsVisible = item.name !== 'default';
    if (item.meta.default) itemIsVisible = true;

    const createItem = function (name, markupHTML, options = {
      col: 'col-auto',
      theme: 'green',
      styles: '',
      parentClass: '',
    }) {
      return `<div class="${options.col} styleguide--atom">
        <div class="styleguide__title">${name}</div>
        <div class="styleguide__content theme--${options.theme} ${options.parentClass}" ${options.styles}>
          ${markupHTML}
        </div>
      </div>`;
    };

    if (itemIsVisible) {
      if (item.meta.noTheme) {
        // If there is no theme
      } else {
        html += `<h2 class="col-12 styleguide__group-title">${item.name}</h2>`;
      }

      const options = {
        theme: 'green',
        col: 'col-auto',
        styles: '',
        parentClass: '',
      };

      if (item.meta) {
        if (item.meta.col) options.col = item.meta.col;
        if (item.meta.styles) options.styles = `style="${item.meta.styles}"`;
        if (item.meta.parentClass) options.parentClass = item.meta.parentClass;
      }

      if (item.meta.noTheme) {
        html += createItem(item.name, markup, options);
      } else {
        const themes = Object.keys(variables.global.$themes.value);

        themes.forEach((theme) => {
          options.theme = theme;
          html += createItem(theme, markup, options);
        });
      }
    }

    return html;
  },
};
