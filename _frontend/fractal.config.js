/**
 * fractalfile.js
 * ==============
 * Fractal is a tool to help you build and document web component libraries
 * and then integrate them into your projects
 * Read the Fractal documentation at http://fractal.build/guide.
 *
 * This document was renamed from fractal.js.
 * ref: https://github.com/frctl/fractal/issues/118#issuecomment-255254117
 */

const _ = require('lodash');
const chalk = require('chalk');
const hljs = require('highlight.js'); // eslint-disable-line import/no-extraneous-dependencies
const log = require('fancy-log');
const mandelbrot = require('@frctl/mandelbrot');
const os = require('os');
const path = require('path');

// Create a new Fractal instance and export it
const fractal = module.exports = require('@frctl/fractal').create(); // eslint-disable-line no-multi-assign

// Require the Twig adapter
const twigAdapter = require('@frctl/twig')(require('./twig.config')(fractal));

const ip = _.chain(os.networkInterfaces())
  .values()
  .flatten()
  .find((n) => n.family === 'IPv4' && n.internal === false && !_.startsWith(n.address, '10.0.75.'))
  .value()
  .address;

const paths = {
  components: './src/components',
  dest: '../styleguide',
  docs: './docs',
  staticAssets: '../site/themes/tim/',
};

const syncOptions = {
  // Specify a hostname to use
  host: 'fractal.tim.test',

  // Stop the browser from automatically opening
  open: false,
};

// Theme configuration
// https://fractal.build/guide/customisation/web-themes.html#configuring-themes
// https://fractal.build/guide/web/default-theme.html#customisation
const theme = mandelbrot({
  nav: ['search', 'components', 'docs', 'assets', 'information'],
  panels: ['html', 'view', 'context', 'resources', 'info', 'notes'],
  scripts: ['default'],
  skin: 'black',
  styles: ['default'],
});

// Project-related metadata
fractal.set('project.author', 'TIM');
fractal.set('project.title', 'TIM');
fractal.set('project.version', 'v1.0');

// Components global configuration
// https://fractal.build/guide/components/configuration-reference.html
fractal.components.engine(twigAdapter);
fractal.components.set('default.preview', '@preview-default');
fractal.components.set('default.status', 'wip');
fractal.components.set('ext', '.twig');
fractal.components.set('path', path.join(__dirname, paths.components));
fractal.components.set('resources', { assets: { label: 'Assets', match: ['**/*'] } });
hljs.registerLanguage('vue', () => ({ subLanguage: 'xml' }));

// Documentation global configuration
// https://fractal.build/guide/documentation/configuration-reference.html
fractal.docs.set('path', path.join(__dirname, paths.docs));

// Web UI global configuration
// https://fractal.build/guide/web/configuration-reference.html
fractal.web.set('builder.dest', path.join(__dirname, paths.dest));
fractal.web.set('server.syncOptions', syncOptions);
fractal.web.set('static.mount', 'assets');
fractal.web.set('static.path', path.join(__dirname, paths.staticAssets));
fractal.web.theme(theme);

log(`Network IP: '${chalk.blue(ip)}'`);
