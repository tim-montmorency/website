/**
 * global.js
 * ===============
 * Globally register all components located in this folder for convenience.
 * Components are registered if their file name match PascalCase.
 * https://vuejs.org/v2/guide/components-registration.html
 * https://vuejs.org/v2/style-guide/#Single-file-component-filename-casing-strongly-recommended
 */

import Vue from 'vue';

// ref: https://webpack.js.org/guides/dependency-management/#require-context
const requireComponent = require.context(
  // The relative path of the components folder
  '.',
  // Whether or not to look in subfolders
  true,
  // The regular expression used to match base component filenames
  /[A-Z][a-z]+(?:[A-Z][a-z]+)*\.global\.vue$/, // PascalCaseFileName.global.vue
);

// For each matching file name...
requireComponent.keys().forEach((fileName) => {
  // Get component config
  const componentConfig = requireComponent(fileName);

  // Get PascalCase name of component
  const componentName = fileName
    // Gets the file name regardless of folder depth (ex: ./MyComponent.global.vue -> MyComponent.global.vue)
    .split('/').pop()
    // Remove the file extension (ex: MyComponent.global.vue -> MyComponent)
    .replace(/(\.\w+)+$/, '');

  // Register component globally
  Vue.component(
    componentName,
    // Look for the component options on `.default`, which will
    // exist if the component was exported with `export default`,
    // otherwise fall back to module's root.
    componentConfig.default || componentConfig,
  );
});
