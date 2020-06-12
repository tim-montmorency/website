/**
 * async.js
 * ==============
 * Globally register all async components located in this folder for convenience.
 * Components are registered if their file name match PascalCase.
 * Registration is done automatically by webpack string-replace-loader and then built into main.js bundle
 * https://vuejs.org/v2/guide/components-dynamic-async.html#Async-Components
 * https://vuejs.org/v2/style-guide/#Single-file-component-filename-casing-strongly-recommended
 * https://webpack.js.org/guides/code-splitting/#dynamic-imports
 */

import Vue from 'vue'; // eslint-disable-line no-unused-vars

/* {asyncComponentRegistration} */
