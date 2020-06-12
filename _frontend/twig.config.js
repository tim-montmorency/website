/**
 * twig.config.js
 * ==============
 */

const path = require('path');

/* eslint-disable no-underscore-dangle, no-param-reassign */
module.exports = function config(fractal) {
  return {
    // if pristine is set to true, bundled filters, functions, tests and tags are not registered.
    pristine: false,

    // if importContext is set to true, all include calls are passed the component's context
    importContext: false,

    // use custom handle prefix, this will change your includes to {% include '%button' %}
    handlePrefix: '@',

    // register custom filters
    filters: {
      stringify(obj) {
        return JSON.stringify(obj);
      },
      // Drupal translation
      // https://api.drupal.org/api/drupal/core%21includes%21bootstrap.inc/function/t/8.2.x
      // https://www.drupal.org/docs/8/theming/twig/filters-modifying-variables-in-twig-templates
      t(str) {
        return str;
      },
    },

    // register custom functions
    functions: null,

    // register custom tests
    tests: null,

    // register custom tags
    tags: {
      /**
       * render
       * ======
       * Usage examples
       * @example {% render "@component" %}
       * @example {% render "@component" with hero %}
       * @example {% render "@component" with { some: 'values' } %}
       * @example {% render "@component" with hero only %}
       * @example {% render "@component" with { some: 'values' } only %}
       */
      render(Twig) {
        return {
          type: 'rendertag',
          regex: /^render\s+(.+?)\s*(?:with\s+([\S\s]+?))?\s*(only)?$/,
          next: [],
          open: true,
          compile(token) {
            const { match } = token;
            const handle = match[1].trim();
            const context = match[2];
            const only = match[3];

            token.stack = Twig.expression.compile.apply(this, [
              {
                type: Twig.expression.type.expression,
                value: handle,
              },
            ]).stack;

            if (context !== undefined) {
              token.contextStack = Twig.expression.compile.apply(this, [
                {
                  type: Twig.expression.type.expression,
                  value: context.trim(),
                },
              ]).stack;
            }

            token.only = only !== undefined;

            delete token.match;
            return token;
          },
          parse(token, context, chain) {
            const file = Twig.expression.parse.apply(this, [token.stack, context]);
            const handle = path.parse(file).name;

            if (!handle.startsWith('@')) {
              throw new Error('You must provide a valid component handle to the render tag.');
            }

            const entity = fractal.components.find(handle);

            if (!entity) {
              throw new Error(`Could not render component '${handle}' - component not found.`);
            }

            const variant = entity.isComponent ? entity.variants().default() : entity;

            // Inherits _env and _config properties from the parent context
            // This allows 'path' filter to work properly
            const childContext = {
              // _self will be the Variant instance of the component
              // eg: If rendering the default component, get the default variant to get the correct label / title etc.
              _self: variant,
              _env: context._env,
              _config: context._config,
            };

            // If the render was not called with the 'only' modifier, we pass the component's context to it.

            if (!token.only) {
              // variant.context seems to always be an already merged object of its context with the base context
              Object.assign(childContext, variant.context);
            }

            // Did the render call had an object passed as context (eg {% render '@button' with someData %})
            if (token.contextStack !== undefined) {
              Object.assign(childContext, Twig.expression.parse.apply(this, [token.contextStack, context]));
            }

            const template = file instanceof Twig.Template ? file : this.template.importFile(file);

            return {
              chain,
              output: template.render(childContext),
            };
          },
        };
      },
    },
  };
};
/* eslint-enable no-underscore-dangle, no-param-reassign */
